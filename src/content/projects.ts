export const projectPlan = [
  {
    name: "Penachoz/Penachoz (README)",
    effort: "Hoy",
    stack: ["Markdown"],
    outcome: "La portada deja de contradecir el objetivo de carrera.",
    scope: [
      "Sustituir el README actual (emojis, toolbox roto, repos fantasma)",
      "Solo enlaces a repos que existen",
      "Contacto: LinkedIn + email, no Instagram",
    ],
  },
  {
    name: "modproxy-artillery ( pulir )",
    effort: "Hoy",
    stack: ["Vagrant", "Apache", "Artillery", "Bash"],
    outcome: "El pin más fuerte que ya tienes.",
    scope: [
      "Descripción en inglés + topics",
      "Corregir el git clone del README (apunta a tu-usuario genérico)",
      "Añadir GitHub Action que valide YAML de Artillery",
    ],
  },
  {
    name: "github-infra-profile (este kit)",
    effort: "Hoy",
    stack: ["Next.js", "GitHub Actions"],
    outcome: "CI verde y criterio visible.",
    scope: [
      "Publicar en tu cuenta",
      "Pinear cuando Actions esté verde",
    ],
  },
  {
    name: "linux-sre-homelab",
    effort: "Entry · Proyecto 1",
    stack: ["Linux", "systemd", "Ansible", "Bash"],
    outcome: "Troubleshooting, backups y recuperación con runbooks.",
    scope: [
      "Tres VMs reproducibles",
      "Fallos de CPU, memoria, disco, DNS y permisos",
      "Restore probado con RTO/RPO",
    ],
  },
  {
    name: "docker-reverse-proxy-lab",
    effort: "Entry · Proyecto 2",
    stack: ["Docker", "Compose", "Nginx", "Healthchecks"],
    outcome: "Contenedores, redes y operación reproducible.",
    scope: [
      "API + Nginx + health checks + límites",
      "Dockerfiles multi-stage, usuario no root",
      "Trivy y Hadolint en CI",
    ],
  },
  {
    name: "terraform-aws-foundation",
    effort: "Entry · Proyecto 3",
    stack: ["Terraform", "AWS", "TFLint", "Checkov"],
    outcome: "IaC, networking, IAM y control de costos.",
    scope: [
      "VPC, subredes, SG e instancia pequeña",
      "State remoto y locking",
      "CI: fmt, validate, TFLint, Checkov",
      "README: costo, seguridad y destroy",
    ],
  },
  {
    name: "azure-aks-platform",
    effort: "Entry · Proyecto 4",
    stack: ["Azure", "AKS", "Terraform", "Entra ID"],
    outcome: "Plataforma Azure con identidad administrada y observabilidad.",
    scope: [
      "VNet, ACR, Key Vault y AKS",
      "GitHub OIDC y Workload Identity",
      "Azure Monitor, costos y destroy",
    ],
  },
  {
    name: "secure-cicd-supply-chain",
    effort: "Entry · Proyecto 5",
    stack: ["GitHub Actions", "OIDC", "Trivy", "Cosign"],
    outcome: "CI/CD sin access keys de larga vida.",
    scope: [
      "Build, test, scan y publicación",
      "Federated identity y least privilege",
      "Environments y aprobación de producción",
    ],
  },
  {
    name: "kubernetes-gitops-platform",
    effort: "Entry · Proyecto 6",
    stack: ["Kubernetes", "Argo CD", "Helm", "Kyverno"],
    outcome: "Despliegue, reconciliación y rollback por GitOps.",
    scope: [
      "Deployment, Service e Ingress",
      "Probes, requests/limits, PDB y HPA",
      "kubeconform, kube-linter y Trivy en CI",
    ],
  },
  {
    name: "observability-sre-lab",
    effort: "Hacia mid · Proyecto 7",
    stack: ["OpenTelemetry", "Prometheus", "Grafana"],
    outcome: "SLIs, SLOs, alertas y runbooks accionables.",
    scope: [
      "Métricas RED, logs y trazas",
      "Error budget y dashboard",
      "Alerta enlazada a runbook probado",
    ],
  },
  {
    name: "consul-vault-service-platform",
    effort: "Hacia mid · Proyecto 8",
    stack: ["Consul", "Vault", "mTLS", "Nomad"],
    outcome: "Service discovery y secretos dinámicos bajo policy.",
    scope: [
      "Consul DNS y service mesh",
      "Vault dynamic secrets",
      "Rotación, backup y recovery",
    ],
  },
  {
    name: "chaos-incident-game-day",
    effort: "Hacia mid · Proyecto 9",
    stack: ["SRE", "Runbooks", "Postmortems"],
    outcome: "Respuesta a incidentes medible y repetible.",
    scope: [
      "Latencia, proceso caído y disco lleno",
      "Timeline, RCA, MTTD y MTTR",
      "Postmortem sin culpa y acciones preventivas",
    ],
  },
  {
    name: "platform-engineering-capstone",
    effort: "Hacia mid · Proyecto 10",
    stack: ["Platform Engineering", "Golden path"],
    outcome: "Una plantilla operable que reduce toil a otros equipos.",
    scope: [
      "CI, Docker, manifests y observabilidad incluidos",
      "Un comando crea un servicio",
      "Versionado y estrategia de upgrades",
    ],
  },
] as const;

export const talkTrack = [
  {
    q: "¿Tiro los labs de ciberseguridad?",
    a: "No. Reencuádralos: permisos Linux, respuesta a DDoS y NIST son higiene operacional. Archiva los tres audits de Coursera casi idénticos; deja uno. El headline del perfil no puede ser “cybersecurity professional”.",
  },
  {
    q: "¿Pongo “Aspiring DevOps Engineer”?",
    a: "No. “Aspiring” descuenta. Di qué operas hoy (Linux, Apache, Vagrant, load tests) y qué rol buscas (intern/junior de infra, cloud o DevOps).",
  },
  {
    q: "¿Clono un EKS + Jenkins de YouTube?",
    a: "No. Los recruiters ya vieron diez iguales. Un compose + Terraform pequeño, con decisiones escritas, gana a un cluster que no puedes explicar.",
  },
  {
    q: "¿Inglés o español?",
    a: "README de perfil en el idioma del empleo. Nombres de repos y commits en inglés. Tienes IELTS C1: úsalo. La bio en Settings puede ir en español si postulas en Colombia.",
  },
  {
    q: "¿Qué hago con CompuNube?",
    a: "Es tu curso de nube (ago 2026) y hoy es una carpeta vacía. O le pones README de laboratorio, o no es la cara del perfil. Nunca lo pines vacío.",
  },
] as const;

export const repoDescriptions = [
  {
    repo: "modproxy-artillery",
    description:
      "Three-VM Apache cluster with mod_proxy_balancer and Artillery load tests. Vagrant + Ubuntu 22.04.",
    topics: "apache, vagrant, load-balancing, artillery, linux, infrastructure",
  },
  {
    repo: "DDoS-incident-response-report",
    description:
      "Simulated DDoS incident report and recovery plan using the NIST Cybersecurity Framework. Availability / ops focus.",
    topics: "incident-response, nist, ddos, sre, runbooks",
  },
  {
    repo: "linux-file-permissions",
    description:
      "Linux permission audit and hardening with ls, chmod, and least-privilege in a simulated org.",
    topics: "linux, sysadmin, permissions, bash",
  },
] as const;
