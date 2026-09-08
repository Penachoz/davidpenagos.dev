# Roadmap de portafolio DevOps — Penachoz

La meta no es acumular repositorios. Cada proyecto debe demostrar una competencia distinta y quedar reproducible desde un equipo limpio.

Prioridad de mercado: **Linux y redes → Git/Docker/CI → Terraform y cloud → Kubernetes/GitOps → observabilidad → seguridad y plataforma**. AWS será la nube principal; Azure demuestra que puedes trasladar los mismos fundamentos. Consul y Vault aparecen después de dominar redes, identidad y contenedores.

## Nivel 1 — Listo para postular a entry / junior

### 1. [`linux-sre-homelab`](https://github.com/Penachoz/linux-sre-homelab)

**Demuestra:** Linux, systemd, redes, Bash, Ansible y troubleshooting.

- Tres VMs Ubuntu aprovisionadas con Vagrant y Ansible.
- Fallos reproducibles de CPU, memoria, disco, DNS, puertos y permisos.
- Backups con restore probado, runbooks y objetivos RTO/RPO.
- Validación de Ansible en GitHub Actions.

**Terminado cuando:** otra persona puede provocar un fallo, diagnosticarlo y recuperar el servicio siguiendo tu runbook.

### 2. [`docker-reverse-proxy-lab`](https://github.com/Penachoz/docker-reverse-proxy-lab)

**Demuestra:** contenedores, redes, health checks y operación local.

- API pequeña + Nginx como reverse proxy.
- Dockerfiles multi-stage y usuario no root.
- `docker compose up` levanta todo.
- Health checks y límites de CPU/memoria.
- Trivy y Hadolint en GitHub Actions.
- README con diagrama, troubleshooting y `make clean`.

**Terminado cuando:** un tercero clona el repo, ejecuta un comando y obtiene una respuesta pasando por Nginx.

### 3. [`terraform-aws-foundation`](https://github.com/Penachoz/terraform-aws-foundation)

**Demuestra:** infraestructura como código, red, IAM y control de costos.

- VPC, subred pública/privada, security groups y una instancia pequeña.
- Módulos, variables, outputs y `terraform.tfvars.example`.
- `fmt`, `validate`, TFLint y Checkov en CI.
- Estado remoto en S3 con locking.
- Presupuesto/alerta de costo y sección `terraform destroy`.

**Terminado cuando:** `plan` corre en CI sin secretos permanentes y el README explica costo y destrucción.

> Si AWS tiene costo, empieza con LocalStack o un módulo que solo valide en CI. No publiques claves.

### 4. [`azure-aks-platform`](https://github.com/Penachoz/azure-aks-platform)

**Demuestra:** Azure, AKS, Entra ID, redes, Key Vault y Azure Monitor.

- AKS y servicios base aprovisionados con Terraform.
- Workload Identity y GitHub OIDC; sin secretos estáticos.
- ACR, Key Vault, ingress y observabilidad.
- Costos, teardown y diferencias AWS ↔ Azure documentadas.

**Terminado cuando:** una PR validada despliega una app en AKS con identidad administrada y una alerta detecta un fallo.

### 5. [`secure-cicd-supply-chain`](https://github.com/Penachoz/secure-cicd-supply-chain)

**Demuestra:** CI/CD seguro y gestión de identidad.

- Autenticación GitHub → AWS mediante OIDC.
- Build, test, scan y publicación de una imagen en GHCR o ECR.
- Environments con aprobación para producción.
- Permisos mínimos y explicación del threat model.

**Terminado cuando:** no existe ningún access key de larga vida en GitHub Secrets.

### 6. [`kubernetes-gitops-platform`](https://github.com/Penachoz/kubernetes-gitops-platform)

**Demuestra:** Kubernetes, despliegues y confiabilidad.

- Cluster local con kind y Argo CD.
- Deployment, Service, Ingress, ConfigMap y Secret de ejemplo.
- Requests/limits, probes, PodDisruptionBudget y HPA.
- Helm o Kustomize para `dev` y `prod`.
- kubeconform, kube-linter, Kyverno y Trivy en CI.

**Terminado cuando:** puedes provocar una caída, observar recuperación, detectar drift y ejecutar un rollback documentado.

## Nivel 2 — Señal para crecer hacia mid

Completar estos proyectos ayuda, pero **no convierte por sí solo un perfil en mid**. Ese nivel también exige decisiones de producción, ownership, incidentes reales y trabajo con otros equipos.

### 7. [`observability-sre-lab`](https://github.com/Penachoz/observability-sre-lab)

**Demuestra:** métricas, logs, trazas, SLOs y alertas útiles.

- OpenTelemetry en la aplicación.
- Prometheus + Grafana + Loki o equivalente.
- Dashboard RED: rate, errors, duration.
- SLI/SLO y error budget.
- Alertas enlazadas a runbooks.

**Terminado cuando:** una degradación genera una alerta accionable y el runbook guía el diagnóstico.

### 8. [`consul-vault-service-platform`](https://github.com/Penachoz/consul-vault-service-platform)

**Demuestra:** service discovery, mTLS, health routing y secretos de corta duración.

- Consul DNS/HTTP discovery y service mesh.
- Vault policies, autenticación de workloads y credenciales dinámicas.
- Telemetría, rotación, backup y recovery.
- Nomad opcional para comparar con Kubernetes.

**Terminado cuando:** dos servicios se descubren sin IPs fijas y consumen credenciales temporales bajo una política explícita.

### 9. `chaos-incident-game-day`

**Demuestra:** respuesta a incidentes y aprendizaje operativo.

- Tres fallos reproducibles: latencia, proceso caído y disco lleno.
- Timeline, impacto, detección, mitigación y RCA.
- Postmortem sin culpa con acciones preventivas.
- Métricas MTTD y MTTR.

**Terminado cuando:** otra persona puede ejecutar el game day con tu runbook.

### 10. `platform-engineering-capstone`

**Demuestra:** pensamiento de plataforma y experiencia de desarrollador.

- Plantilla de servicio con CI, Docker, manifests y observabilidad incluidos.
- Comando único para crear un servicio nuevo.
- Golden path documentado.
- Versionado y estrategia de upgrades.

**Terminado cuando:** crear un servicio nuevo toma minutos y hereda controles automáticamente.

## Reglas para todos los repos

1. README en inglés si apuntas a empleos internacionales.
2. Diagrama de arquitectura y decisiones, no solo comandos.
3. Quick start reproducible.
4. CI verde con lint, tests y escaneo.
5. Sin secretos, archivos `.env`, claves ni datos reales.
6. `LICENSE`, topics y descripción.
7. Sección de costo y `destroy` para recursos cloud.
8. Sección “Trade-offs / What I would change in production”.
9. Issues o Project board para mostrar planificación.
10. Un postmortem o troubleshooting real vale más que diez badges.

## Orden recomendado

1. Pulir `modproxy-artillery`.
2. Linux SRE homelab.
3. Docker + secure CI/CD.
4. Terraform AWS foundation.
5. Azure AKS.
6. Kubernetes + GitOps.
7. Observabilidad.
8. Consul + Vault.
9. Chaos game day.
10. Capstone de plataforma.
