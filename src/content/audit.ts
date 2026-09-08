export const SCORE_BEFORE = 41;
export const SCORE_AFTER = 84;

export type Severity = "critico" | "alto" | "medio";

export type Finding = {
  id: string;
  severity: Severity;
  area: string;
  title: string;
  current: string;
  fix: string;
};

export const findings: Finding[] = [
  {
    id: "bio-cortada",
    severity: "critico",
    area: "Settings",
    title: "La bio está cortada y habla de otra carrera",
    current:
      "“I started with competitive programming… building and securing cloud ” — se corta en el límite de 160 caracteres. Un recruiter de infra lee olimpiadas, no Linux ni CI/CD.",
    fix: "Pega la bio de este kit (cabe entera). Headline: infraestructura, nube, DevOps.",
  },
  {
    id: "readme-fantasma",
    severity: "critico",
    area: "README de perfil",
    title: "El README promete repos que no existen",
    current:
      "Lista platform-sre-lab, incident-playground y terraform-cloud-foundation. Ninguno está en github.com/Penachoz. Las imágenes del toolbox están rotas.",
    fix: "Reemplaza Penachoz/Penachoz/README.md con el de este kit. Solo enlaza repos reales.",
  },
  {
    id: "ruido",
    severity: "critico",
    area: "Señal",
    title: "23 repos: el de infra se pierde entre auditorías de Coursera",
    current:
      "Botium-Toys, FintexCorp, MedCare360, sql-filters, Incident-Handler… se ven iguales. El cluster Apache (modproxy-artillery) no está pineado.",
    fix: "Pinea 4 repos de infra/ops. Archiva forks y duplicados de la certificación. El resto, sin pin.",
  },
  {
    id: "linkedin-vs-github",
    severity: "alto",
    area: "Narrativa",
    title: "LinkedIn dice ciberseguridad; GitHub dice DevOps a medias",
    current:
      "Settings no tiene URL. El README pone Instagram. LinkedIn pide roles de cyber. Un hiring manager no sabe a qué postulaste.",
    fix: "URL = LinkedIn. Quita Instagram del README. Una sola meta: Infrastructure / Cloud / DevOps.",
  },
  {
    id: "sin-descripcion",
    severity: "alto",
    area: "Repos",
    title: "19 de 23 repos no tienen descripción",
    current:
      "Sin topics, casi sin LICENSE. robot-voice-dog dice “Esto es pal patron :)”. MiniWebApp es un fork mudo.",
    fix: "Descripción + topics en cada repo que dejes público. Archiva el fork y el chiste.",
  },
  {
    id: "compunube",
    severity: "alto",
    area: "Repos",
    title: "CompuNube es el repo más reciente y está vacío",
    current:
      "Último push (ago 2026): una carpeta Practica_1, size 1, sin README. Es lo primero que GitHub muestra como “popular”.",
    fix: "README de curso de nube (incluido aquí) o no lo dejes como cara del perfil hasta que tenga un lab.",
  },
  {
    id: "settings-vacios",
    severity: "medio",
    area: "Settings",
    title: "Sin empresa, email público ni Available for hire",
    current:
      "Solo Cali, Colombia. 1 follower, 1 following. Blog vacío.",
    fix: "Company UAO, email, LinkedIn, hireable. Sigue orgs de Kubernetes/CNCF/HashiCorp.",
  },
  {
    id: "emojis",
    severity: "medio",
    area: "README",
    title: "Demasiado template de “aspiring DevOps”",
    current:
      "Badges for-the-badge, fun fact, toolbox vacío. Se lee como plantilla de 2022, no como ingeniero de infra.",
    fix: "README sobrio, en una pantalla: rol, labs reales, stack que sí usaste, contacto.",
  },
];

export const currentRepos = [
  {
    name: "modproxy-artillery",
    language: "Shell",
    updated: "nov 2025",
    pin: true,
    issues: [
      "Buena señal de infra (Vagrant, Apache balancer, Artillery)",
      "Falta CI y topics",
    ],
    action: "Pinear. Completar descripción en inglés + topics.",
    url: "https://github.com/Penachoz/modproxy-artillery",
  },
  {
    name: "DDoS-incident-response-report",
    language: "Markdown",
    updated: "may 2025",
    pin: true,
    issues: ["Único repo con descripción seria", "Se lee 100% cyber, no ops"],
    action: "Pinear. Reencuadrar README: disponibilidad, runbook, NIST.",
    url: "https://github.com/Penachoz/DDoS-incident-response-report",
  },
  {
    name: "linux-file-permissions",
    language: "—",
    updated: "may 2025",
    pin: true,
    issues: ["Sin descripción", "Tono de “security professional” de Coursera"],
    action: "Pinear como lab de Linux. README de sysadmin, no de SOC.",
    url: "https://github.com/Penachoz/linux-file-permissions",
  },
  {
    name: "CompuNube",
    language: "—",
    updated: "ago 2026",
    pin: false,
    issues: ["Sin README", "Una carpeta vacía de práctica"],
    action: "Documentar o no mostrar. No pinear hasta que haya un lab.",
    url: "https://github.com/Penachoz/CompuNube",
  },
  {
    name: "Botium-Toys-Audit",
    language: "—",
    updated: "may 2025",
    pin: false,
    issues: ["Duplicado de FintexCorp y MedCare360", "Coursera genérico"],
    action: "Deja uno público. Archiva los otros dos audits.",
    url: "https://github.com/Penachoz/Botium-Toys-Audit",
  },
  {
    name: "CineCine / ApiCineCine",
    language: "JS / Java",
    updated: "nov 2024",
    pin: false,
    issues: ["Sin descripción", "No es infra"],
    action: "Descripción de coursework. Sin pin.",
    url: "https://github.com/Penachoz/CineCine",
  },
  {
    name: "MiniWebApp",
    language: "HTML",
    updated: "nov 2025",
    pin: false,
    issues: ["Fork sin contexto"],
    action: "Archivar o eliminar.",
    url: "https://github.com/Penachoz/MiniWebApp",
  },
  {
    name: "robot-voice-dog",
    language: "C++",
    updated: "nov 2025",
    pin: false,
    issues: ["Descripción: “Esto es pal patron :)”"],
    action: "Archivar. No vive en un perfil de infra.",
    url: "https://github.com/Penachoz/robot-voice-dog",
  },
] as const;

export const pinPlan = [
  {
    order: 1,
    name: "Penachoz/Penachoz",
    why: "README de perfil. Primera pantalla.",
    status: "Reemplazar hoy",
  },
  {
    order: 2,
    name: "modproxy-artillery",
    why: "Cluster, balanceo, load test. Lo más cerca de un ingeniero de infra.",
    status: "Pinear",
  },
  {
    order: 3,
    name: "DDoS-incident-response-report",
    why: "Disponibilidad y respuesta a incidentes — ángulo ops, no pentest.",
    status: "Pinear + reescribir README",
  },
  {
    order: 4,
    name: "linux-file-permissions",
    why: "Fundamentos Linux que un junior de infra sí usa.",
    status: "Pinear + descripción",
  },
  {
    order: 5,
    name: "Este kit (cuando lo subas)",
    why: "CI verde y criterio. Mejor que un tutorial clonado de EKS.",
    status: "Publicar",
  },
  {
    order: 6,
    name: "Próximo: terraform-docker-lab",
    why: "El hueco: IaC + contenedores. Sin esto el perfil se queda en Vagrant 2025.",
    status: "Este mes",
  },
] as const;

export const archiveList = [
  "MiniWebApp (fork)",
  "robot-voice-dog",
  "FintexCorp-Audit (deja Botium-Toys-Audit)",
  "MedCare360-Audit",
  "ServiciosTelematicos si está vacío (el trabajo real está en modproxy-artillery)",
] as const;
