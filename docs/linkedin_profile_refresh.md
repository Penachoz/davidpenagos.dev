# Optimización de LinkedIn — David Penagos

**Objetivo:** posicionar el perfil para prácticas y vacantes entry/junior en infraestructura, cloud, DevOps y soporte técnico de infraestructura, sin presentar aprendizaje como experiencia profesional.

Perfil auditado: [linkedin.com/in/david-penagos-b30406246](https://www.linkedin.com/in/david-penagos-b30406246/)  
Ubicación: Cali, Colombia  
Fecha de revisión: septiembre de 2026

---

## 1. Diagnóstico

La sección “Acerca de” pública todavía presenta ciberseguridad como objetivo principal y dedica buena parte del texto al certificado de Google. Eso ya no coincide con la dirección actual: infraestructura, nube y DevOps.

Fortalezas verificables:

- Estudiante de Ingeniería Informática en la Universidad Autónoma de Occidente.
- Inglés C1 certificado con IELTS.
- Experiencia de atención al cliente en TaskUs, útil para soporte, incidentes y comunicación.
- Laboratorio de balanceo de carga con Linux, Vagrant, Apache y Artillery.
- API REST con Java, Spring Boot y MongoDB.
- Proyecto de visión computacional ejecutado en Raspberry Pi.
- Fundamentos públicos de redes, Linux y respuesta a incidentes.

Brechas que no deben ocultarse:

- Todavía no hay un despliegue cloud completo y reproducible en el portafolio.
- Docker, Terraform, AWS, Azure, Kubernetes y observabilidad están en desarrollo, no dominados.
- No hay evidencia de dos años administrando redes empresariales; por eso conviene priorizar prácticas y roles junior antes que “Coordinador IT”.

---

## 2. Identidad visual

### Foto

Usar una foto reciente, encuadre desde hombros, fondo neutro, luz frontal y ropa lisa. La cara debe ocupar aproximadamente 60% del círculo. Evitar filtros, fondo de habitación o recortes de eventos.

### Banner

Texto sugerido:

> **Infrastructure · Cloud · DevOps**  
> Linux • Networking • Automation • Reliable systems  
> Cali, Colombia · English C1

Diseño: fondo azul marino, diagrama minimalista `Git → CI/CD → Cloud → Observability`, sin una nube llena de logos. Añadir `github.com/Penachoz` en tamaño pequeño.

### URL

Mantener la URL actual. Cuando el portafolio esté desplegado, añadir `davidpenagos.dev` en “Información de contacto”. No publicarlo como enlace antes de que exista.

---

## 3. Titular

Usar esta versión principal:

> **Computer Engineering Student | Infrastructure, Cloud & DevOps | Linux · Networking · Java/Python · Git | English C1 | Open to Intern & Junior Roles**

Versión para búsquedas principalmente en Colombia:

> **Estudiante de Ingeniería Informática | Infraestructura, Cloud y DevOps | Linux · Redes · Java/Python · Git | Inglés C1 | Prácticas / Junior**

No añadir `AWS Engineer`, `SRE`, `Terraform Engineer` o `Kubernetes` al titular hasta tener un proyecto público terminado que lo demuestre.

---

## 4. Acerca de — texto listo para copiar

> Soy estudiante de Ingeniería Informática en la Universidad Autónoma de Occidente, enfocado en infraestructura, cloud y DevOps. Me interesa construir sistemas reproducibles, automatizar tareas operativas y entender cómo detectar, diagnosticar y recuperar un servicio cuando falla.
>
> Mi experiencia técnica pública incluye un clúster Apache de tres máquinas virtuales creado con Vagrant y Ubuntu, pruebas de carga con Artillery, una API REST con Java/Spring Boot/MongoDB y un sistema de detección de elementos de protección personal ejecutado en Raspberry Pi con Python, OpenCV y TensorFlow Lite.
>
> Actualmente estoy convirtiendo esos fundamentos en tres proyectos cloud: endurecimiento y despliegue de una API en AWS, una API de citas médicas en Azure y una canalización edge-to-cloud con monitoreo y alertas. En cada proyecto priorizo seguridad, CI/CD, infraestructura como código, observabilidad, costos y documentación de recuperación.
>
> Mi experiencia en TaskUs fortaleció mi comunicación, análisis de problemas y desempeño en entornos de alto volumen y métricas. Tengo inglés C1 certificado con IELTS y puedo trabajar con documentación y equipos internacionales.
>
> Busco prácticas o posiciones entry/junior como Infrastructure Engineer, Cloud Support, DevOps, SRE/Platform Intern, NOC o Soporte de Infraestructura.
>
> GitHub: https://github.com/Penachoz  
> Contacto: dpenagos0912@gmail.com

### Secondary language profile — English

> I am a Computer Engineering student at Universidad Autónoma de Occidente, focused on infrastructure, cloud and DevOps. I enjoy building reproducible environments, automating operational work, and learning how to detect, diagnose and recover failing services.
>
> My public technical work includes a three-VM Apache cluster built with Vagrant and Ubuntu, repeatable Artillery load tests, a Java/Spring Boot/MongoDB REST API, and a Raspberry Pi PPE detection system using Python, OpenCV and TensorFlow Lite.
>
> I am now turning those foundations into three cloud builds: hardening and deploying an API on AWS, operating a medical appointments API on Azure, and connecting an edge detector to a monitored cloud event pipeline. Each build prioritizes security, CI/CD, infrastructure as code, observability, cost controls and recovery documentation.
>
> My experience at TaskUs strengthened my communication, troubleshooting and ability to work in fast-paced, metrics-driven environments. I hold a C1 IELTS English certification.
>
> I am open to Infrastructure, Cloud Support, DevOps, SRE/Platform, NOC and IT Infrastructure internships or junior roles.

---

## 5. Experiencia

### TaskUs — Agente de Servicio al Cliente

Reemplazar la descripción actual por:

- Atendí solicitudes y resolví problemas en tiempo real mediante chat, llamadas y correo, manteniendo comunicación clara bajo presión.
- Trabajé en un entorno de alto volumen orientado a métricas, priorizando casos y dando seguimiento hasta su resolución o escalamiento.
- Cumplí procedimientos de privacidad y manejo responsable de información durante cada interacción.
- Fortalecí habilidades transferibles a operaciones TI: troubleshooting estructurado, documentación, empatía con el usuario y comunicación de incidentes.

No cambiar el cargo contractual a “Technical Support” si ese no fue el cargo real.

### Universidad / proyectos

No registrar cada repositorio como empleo. Añadirlos en “Proyectos” y “Destacados”.

---

## 6. Proyectos — textos listos

### CineCine Cloud Platform

**Estado:** en construcción

> Modernización cloud de una API REST existente con Java, Spring Boot y MongoDB. El alcance incluye gestión segura de secretos, validación, autenticación, tests, contenedor no-root, CI/CD con GitHub Actions, despliegue en AWS mediante Terraform, métricas, logs y runbook de recuperación.

Habilidades: Java, Spring Boot, REST APIs, MongoDB, Docker, AWS, Terraform, GitHub Actions.

### Apache Load Balancer Lab

> Laboratorio reproducible de infraestructura con tres máquinas virtuales Ubuntu: dos servidores Apache y un balanceador con mod_proxy_balancer. Incluye aprovisionamiento con Vagrant, verificación de salud y pruebas de carga repetibles con Artillery.

Habilidades: Linux, Apache, Vagrant, Networking, Load Testing, Troubleshooting.

### PPE Detection on Raspberry Pi

> Sistema de detección en tiempo real de casco y chaleco de seguridad sobre Raspberry Pi 4. Utiliza YOLOv8, TensorFlow Lite, Python y OpenCV para ejecutar inferencia optimizada en un dispositivo edge.

Habilidades: Python, Raspberry Pi, OpenCV, TensorFlow Lite, Edge Computing.

### DDoS Incident Response

> Análisis de un incidente DDoS simulado usando NIST CSF. Documenta detección, contención, recuperación, controles preventivos y acciones para proteger la disponibilidad del servicio.

Habilidades: Incident Response, NIST CSF, Network Security, Technical Documentation.

---

## 7. Destacados

Orden recomendado:

1. Portafolio `davidpenagos.dev` cuando esté publicado.
2. Repositorio `modproxy-artillery`.
3. Repositorio `ApiCineCine` cuando el secreto expuesto haya sido rotado y eliminado del historial.
4. Publicación de PPE Detection ya existente.
5. Hoja de vida PDF general de infraestructura/cloud.

No destacar repositorios vacíos o que solo contienen un plan.

---

## 8. Aptitudes

Fijar como primeras tres:

1. Linux
2. Computer Networking
3. Troubleshooting

Aptitudes actuales:

- Linux
- Computer Networking
- Git
- Bash
- Java
- Python
- REST APIs
- Spring Boot
- MongoDB
- Apache HTTP Server
- Vagrant
- Technical Documentation
- Incident Response
- Customer Support
- Problem Solving

Añadir cuando exista evidencia pública:

- Docker
- Amazon Web Services (AWS)
- Terraform
- GitHub Actions
- Microsoft Azure
- Kubernetes
- Prometheus
- Grafana

Pedir validaciones solo a compañeros o docentes que hayan observado el trabajo; las validaciones masivas sin contexto aportan poco.

---

## 9. Formación, certificaciones e idiomas

### Educación

**Universidad Autónoma de Occidente**  
Ingeniería Informática  
Incluir fecha real de inicio y fecha estimada de graduación.

En actividades/proyectos:

> Cloud computing, computer networks, backend development, operating systems and applied engineering projects.

### Certificaciones

- IELTS Academic — registrar puntaje, fecha y credencial verificable.
- Google Cybersecurity — registrar únicamente módulos o certificado realmente completados.
- AWS SAA-C03 y Terraform Associate deben permanecer en “en preparación”; no añadirlos como licencias/certificaciones antes de aprobarlos.

### Idiomas

- Español — nativo.
- Inglés — competencia profesional completa / C1, con IELTS como evidencia.

---

## 10. Open to Work

Seleccionar “solo reclutadores” mientras se actualiza el perfil. Cuando el portafolio tenga el primer proyecto cloud terminado, evaluar el marco verde público.

Títulos para guardar:

- Infrastructure Engineer Intern
- IT Infrastructure Intern
- Cloud Engineer Intern
- Cloud Support Associate
- Junior Cloud Engineer
- Junior DevOps Engineer
- DevOps Intern
- SRE Intern
- Platform Engineering Intern
- NOC Analyst
- Network Support Analyst
- Infrastructure Support Analyst
- Linux Support Analyst
- IT Support Analyst

Ubicaciones:

- Cali y Valle del Cauca.
- Bogotá y Medellín, solo si existe disposición real de traslado.
- Colombia remoto.
- Latin America remoto para vacantes que acepten candidatos en Colombia.

---

## 11. Roles recomendados

### Prioridad alta — postular desde ahora

1. **Practicante de Infraestructura TI** — encaja con condición de estudiante, Linux/redes y atención al usuario.
2. **IT Support / Infrastructure Support Intern** — convierte experiencia de TaskUs en señal relevante para operación.
3. **NOC Intern / NOC Analyst Junior** — buena entrada para monitoreo, escalamiento y redes.
4. **Cloud Support Intern / Associate** — buscar vacantes que pidan fundamentos, no administración productiva previa.
5. **SRE / Platform Infrastructure Intern** — varias vacantes recientes en Colombia piden fundamentos de AWS, Linux, redes, Python, Docker/Kubernetes y documentación.

### Prioridad media — después del primer proyecto cloud

6. **Junior DevOps Engineer**
7. **Junior Cloud Engineer**
8. **Linux Support Engineer**
9. **Network Support Analyst**
10. **Junior Infrastructure Engineer**

### No priorizar todavía

- DevOps Mid/Senior.
- Site Reliability Engineer con guardias y ownership productivo sin acompañamiento.
- Cloud Architect.
- Coordinador o líder de infraestructura que exija dos o más años administrando redes corporativas.

Aplicar a una vacante junior con “1 año” puede ser razonable si los requisitos técnicos coinciden. No afirmar experiencia laboral inexistente; usar proyectos para demostrar capacidad.

---

## 12. Búsquedas y alertas

Consultas en LinkedIn:

```text
("infrastructure intern" OR "practicante infraestructura") AND Colombia
("cloud support" OR "cloud intern") AND (Colombia OR Remote)
("devops junior" OR "devops intern") AND Colombia
("SRE intern" OR "platform infrastructure intern") AND Colombia
("NOC analyst" OR "network support") AND (Cali OR Colombia)
("soporte infraestructura" OR "analista infraestructura junior") AND Cali
```

Crear alertas separadas para:

- Cali presencial/híbrido.
- Colombia remoto.
- Bogotá/Medellín híbrido si el traslado es viable.
- Publicaciones en inglés para “Latin America”.

---

## 13. Estrategia de contenido

Publicar una vez por semana. Cada publicación debe mostrar evidencia, no una lista de tecnologías.

Formato:

1. Problema.
2. Arquitectura o hipótesis.
3. Qué se construyó.
4. Una falla encontrada.
5. Medición o captura.
6. Qué cambiaría en producción.
7. Enlace al repositorio.

Primeras seis publicaciones:

1. Antes/después de retirar un secreto de `ApiCineCine` y lecciones de rotación.
2. Diagrama del clúster Apache y resultado de las pruebas con Artillery.
3. Dockerfile no-root y health check de CineCine.
4. Primer `terraform plan` del proyecto AWS, con costos y teardown.
5. Pipeline CI/CD autenticado con OIDC, sin claves permanentes.
6. Incidente provocado, alerta recibida y runbook de recuperación.

Usar entre tres y cinco hashtags específicos: `#CloudEngineering`, `#DevOps`, `#Linux`, `#AWS`, `#InfrastructureAsCode`. Evitar más de ocho.

---

## 14. Networking

Cada semana:

- Conectar con 10 personas relevantes: ingenieros de infraestructura, SRE, DevOps, alumni UAO y reclutadores técnicos.
- Personalizar la invitación en dos líneas.
- Comentar con una observación técnica útil en tres publicaciones.
- Pedir una conversación breve solo después de haber leído el perfil de la persona.

Mensaje:

> Hola, [Nombre]. Soy estudiante de Ingeniería Informática en la UAO y estoy construyendo mi portafolio en infraestructura/cloud. Vi tu trabajo en [equipo/tema] y me interesó [detalle concreto]. Me gustaría agregarte a mi red y seguir aprendiendo de lo que compartes.

Mensaje a recruiter:

> Hola, [Nombre]. Estoy buscando prácticas o roles junior en infraestructura, cloud o DevOps en Colombia. Tengo bases públicas en Linux, redes, Java/Python y troubleshooting, inglés C1, y estoy construyendo un despliegue AWS con Terraform y CI/CD. Comparto mi GitHub por si mi perfil encaja en procesos actuales o futuros: https://github.com/Penachoz

---

## 15. Checklist de implementación

- [ ] Cambiar titular.
- [ ] Reemplazar “Acerca de”.
- [ ] Actualizar banner y foto.
- [ ] Reescribir TaskUs sin cambiar el cargo real.
- [ ] Añadir cuatro proyectos.
- [ ] Ordenar aptitudes.
- [ ] Registrar IELTS con credencial.
- [ ] Configurar los 13 cargos de Open to Work.
- [ ] Añadir GitHub a información de contacto.
- [ ] Añadir portafolio solo después de publicarlo.
- [ ] Crear seis alertas de empleo.
- [ ] Publicar el primer caso técnico después de rotar el secreto de MongoDB.

