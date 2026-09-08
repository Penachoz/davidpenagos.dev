# Modernización de APIs y tres proyectos estrella cloud

## Decisión de portafolio

No conviene abrir tres repositorios vacíos nuevos. Los tres proyectos usarán aplicaciones que ya existen y añadirán capas de seguridad, entrega, infraestructura y operación.

| Orden | Proyecto | Base existente | Nube objetivo | Señal profesional |
| --- | --- | --- | --- | --- |
| 1 | CineCine Cloud Platform | `ApiCineCine` + `CineCine` | AWS | API segura, Docker, CI/CD, Terraform, observabilidad |
| 2 | MediSync Cloud API | `MediSync` | Azure | API contracts, secretos, backups, disponibilidad |
| 3 | Edge Safety Cloud | `PPE-Detection-Raspberrypi` | AWS | edge-to-cloud, eventos, métricas, alertas |

## Incidente crítico: `ApiCineCine`

El repositorio público contiene una URI de MongoDB con usuario y contraseña en `src/main/resources/application.properties`. Aunque se elimine en el siguiente commit, seguirá visible en el historial.

Acciones en este orden:

1. En MongoDB Atlas, deshabilitar o borrar inmediatamente el usuario expuesto.
2. Crear un usuario nuevo con acceso únicamente a la base requerida.
3. Revisar logs de acceso, IPs, cambios y actividad inusual desde la fecha del commit.
4. Restringir Network Access; no dejar `0.0.0.0/0` salvo una excepción temporal y documentada.
5. Crear un backup antes de cualquier limpieza.
6. Cambiar la configuración a:

```properties
spring.data.mongodb.uri=${MONGODB_URI}
spring.data.mongodb.database=${MONGODB_DATABASE:CineCine}
server.port=${PORT:8080}
```

7. Añadir `.env`, `.env.*` y archivos de secretos a `.gitignore`.
8. Limpiar el historial con `git filter-repo` o BFG y coordinar que cualquier clon antiguo sea descartado.
9. Activar secret scanning y push protection en GitHub.
10. Publicar un postmortem corto sin incluir la credencial.

Rotar la credencial es obligatorio; reescribir el historial por sí solo no invalida una contraseña copiada.

---

## Proyecto 1 — CineCine Cloud Platform

### Estado actual observado

- Spring Boot 3.3.5, Java 17 y MongoDB.
- No hay README técnico, Dockerfile ni pipeline CI.
- El modelo `Usuario` guarda `password` directamente.
- `GET /api/usuarios/listarUser` expone todos los usuarios.
- Los endpoints de eliminación y consulta no tienen autenticación/autorización.
- `@CrossOrigin` está en controladores y también existe una configuración CORS.
- No hay validación de payloads, contrato OpenAPI ni tests útiles.
- El frontend apunta a `http://localhost:8080/api`.
- Hay dos backends relacionados (`ApiCineCine` y `CineCine/backend`), lo que crea ambigüedad.

### Arquitectura objetivo

```text
GitHub
  │ OIDC
  ▼
GitHub Actions ── build/test/scan ──► Amazon ECR
                                         │
Internet ──► ALB ──► ECS Fargate ────────┘
                       │
                       ├──► MongoDB Atlas (allowlist + least privilege)
                       ├──► Secrets Manager
                       └──► CloudWatch logs / metrics / alarms

Terraform: VPC, subnets, security groups, ALB, ECS, IAM, ECR, alarms, budget
```

### Fases

#### A. Seguridad y contrato

- Rotar/eliminar el secreto expuesto.
- Elegir un solo backend canónico; archivar o marcar el duplicado.
- Usar DTOs para no devolver documentos de MongoDB directamente.
- Añadir Bean Validation (`@Email`, `@NotBlank`, límites de longitud).
- Hash de contraseñas con BCrypt o, si Firebase gestiona identidad, eliminar contraseñas del backend.
- Spring Security con autorización por recurso; nunca listar contraseñas.
- Respuestas 201/204/400/404 coherentes y `ProblemDetail` para errores.
- CORS por variable de entorno y orígenes exactos.
- OpenAPI documentado y versionado bajo `/api/v1`.
- Rate limiting y límites de tamaño del body.

#### B. Calidad

- Unit tests de servicios.
- Integration tests con Testcontainers y MongoDB.
- Tests de autorización: acceso anónimo, usuario y administrador.
- Maven Wrapper ejecutable.
- Dependabot/Renovate y actualización a una versión estable soportada de Spring Boot.
- README en inglés con arquitectura, quick start, API examples y trade-offs.

#### C. Contenedores

- Dockerfile multi-stage.
- Imagen final con JRE, usuario no-root y filesystem de solo lectura cuando sea posible.
- Endpoint Actuator `/actuator/health`.
- `docker compose` para API + MongoDB local.
- `.dockerignore`, límites de CPU/memoria y graceful shutdown.

#### D. CI/CD e infraestructura

- Pull request: format, compile, unit/integration tests, dependency review y secret scan.
- Main: build OCI image, SBOM, Trivy, firma y publicación en ECR.
- GitHub OIDC hacia AWS; no guardar access keys.
- Terraform con módulos pequeños, `fmt`, `validate`, TFLint y Checkov.
- Environment de producción con aprobación.
- Budget/alerta de costo y comando de destrucción.

#### E. Operación

- Logs JSON con correlation ID.
- Métricas RED: rate, errors, duration.
- Alarmas 5xx, latencia, tareas caídas y uso de recursos.
- Dashboard y runbooks enlazados desde cada alerta.
- Prueba de rollback y postmortem de una falla inducida.

### Definición de terminado

Un tercero puede clonar el repositorio, ejecutar `docker compose up`, correr tests, desplegar con Terraform en una cuenta vacía, observar una falla y recuperar el servicio siguiendo el runbook. No hay secretos permanentes en GitHub.

---

## Proyecto 2 — MediSync Cloud API

### Estado actual observado

- El repositorio incluye `backend/node_modules`, que infla el historial y dificulta auditoría.
- La API Express actual usa CORS abierto, JSON global y una única ruta de usuarios.
- El README promete altos estándares de seguridad y disponibilidad sin evidencia pública suficiente.

### Corrección inmediata

1. Verificar que no haya `.env`, tokens o credenciales dentro de `node_modules` o archivos del backend.
2. Eliminar `node_modules` del historial y añadirlo a `.gitignore`.
3. Mantener `package-lock.json`; instalar con `npm ci`.
4. Cambiar el README de promesas a arquitectura y evidencia medible.

### Arquitectura objetivo

```text
GitHub Actions ── OIDC ──► Azure
      │
      └── test/scan/build ──► Azure Container Registry
                                   │
Users ──► Front Door ──► Container Apps ──► managed database
                              │
                              ├──► Key Vault
                              ├──► Application Insights
                              └──► Log Analytics
Terraform: resource group, network, identity, registry, app, monitoring, budget
```

### Alcance

- Contrato OpenAPI para pacientes, profesionales, disponibilidad y citas.
- Identidad real; no implementar autenticación casera.
- Autorización por rol y protección de datos sensibles.
- Idempotency key al crear citas y control de concurrencia para evitar doble reserva.
- Tests unitarios, integración y contrato.
- Backup/restore probado con RPO y RTO definidos.
- Health/readiness, logs estructurados, métricas y alertas.
- Managed Identity y Key Vault; sin secretos estáticos.
- Datos sintéticos únicamente.

### Definición de terminado

Dos solicitudes concurrentes no reservan el mismo horario, una restauración recupera datos sintéticos dentro del RTO documentado y cada alerta tiene un runbook.

---

## Proyecto 3 — Edge Safety Cloud

### Base

El proyecto Raspberry Pi con YOLOv8/TFLite/OpenCV ya es la pieza más diferenciadora del portafolio. El objetivo no es cambiar el modelo, sino demostrar operación distribuida.

### Arquitectura objetivo

```text
Camera ──► Raspberry Pi / TFLite
                    │ MQTT + device identity
                    ▼
                 AWS IoT Core
                    │
          ┌─────────┴─────────┐
          ▼                   ▼
       Lambda              S3 events
          │                   │
          └────► metrics / logs / alerts
                         │
                         ▼
                  Grafana dashboard
```

### Alcance

- Identidad por dispositivo y certificados separados.
- Publicar eventos, no video continuo, para controlar privacidad y costo.
- Buffer local y reintentos cuando la red falla.
- Regla IoT hacia Lambda/S3 con retención definida.
- Terraform para recursos cloud.
- Métricas de inferencia, eventos, errores, latencia y desconexiones.
- Alerta por dispositivo offline y runbook de reconexión.
- Threat model básico y política de datos.

### Definición de terminado

El dispositivo sigue detectando sin Internet, reenvía eventos al recuperar conexión y el dashboard muestra la interrupción sin almacenar imágenes personales por defecto.

---

## Pines recomendados

Mientras se construyen:

1. `modproxy-artillery`
2. `PPE-Detection-Raspberrypi`
3. `ApiCineCine` — solo después de rotar y limpiar el secreto
4. `DDoS-incident-response-report`
5. `linux-file-permissions`
6. `Penachoz`

Al terminar cada proyecto cloud, reemplazar primero los repositorios de menor señal. Un repositorio vacío o solo planificado no debe ocupar un pin.

## Reglas para los tres proyectos

- README en inglés y resumen breve en español.
- Diagrama, quick start, decisiones, costos y teardown.
- CI verde, tests y escaneo.
- Sin claves, datos personales ni `.env`.
- Issues con alcance y milestones; no crear diez repos vacíos.
- Capturas de métricas y una falla real.
- Runbook y postmortem.
- Sección “What I would change in production”.

