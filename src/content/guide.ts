export const guideSteps = [
  {
    id: "settings",
    title: "Reescribir Settings (bio, LinkedIn, hireable)",
    time: "5 min",
    detail:
      "github.com/settings/profile. Pega la bio nueva (no se corta). URL = LinkedIn. Company = UAO. Email público. Available for hire. Quita cualquier rastro de “aspiring cybersecurity” del sidebar.",
    href: "https://github.com/settings/profile",
    hrefLabel: "Abrir Settings",
  },
  {
    id: "readme",
    title: "Reemplazar el README de Penachoz/Penachoz",
    time: "5 min",
    detail:
      "El repo especial ya existe. Abre Penachoz/Penachoz, edita README.md y pega github-profile/README.md (o la versión EN). Eso actualiza la portada de github.com/Penachoz al instante.",
    href: "https://github.com/Penachoz/Penachoz/edit/main/README.md",
    hrefLabel: "Editar README de perfil",
  },
  {
    id: "pins",
    title: "Pinear los cuatro repos de infra",
    time: "3 min",
    detail:
      "Profile → Customize your pins. Quita CineCine, audits y CompuNube vacío. Deja: Penachoz, modproxy-artillery, DDoS-incident-response-report, linux-file-permissions.",
    href: "https://github.com/Penachoz",
    hrefLabel: "Ir al perfil",
  },
  {
    id: "descriptions",
    title: "Poner descripción y topics a los pines",
    time: "10 min",
    detail:
      "En cada repo pineado: Settings → descripcion corta + topics (linux, apache, vagrant, load-balancing, incident-response, nist). Los textos están en /legacy-repos y en esta guía.",
    href: "https://github.com/Penachoz?tab=repositories",
    hrefLabel: "Repositorios",
  },
  {
    id: "archive",
    title: "Archivar ruido",
    time: "5 min",
    detail:
      "MiniWebApp, robot-voice-dog, FintexCorp-Audit, MedCare360-Audit. Archivar no borra; saca el chiste y los duplicados de Coursera de la primera página.",
    href: "https://github.com/Penachoz?tab=repositories",
    hrefLabel: "Repositorios",
  },
  {
    id: "linkedin",
    title: "Alinear LinkedIn con GitHub",
    time: "15 min",
    detail:
      "Headline: “Computer Engineering student | Infrastructure · Cloud · DevOps”. El About no puede pedir solo ciberseguridad si GitHub pide infra. Un solo target.",
    href: "https://www.linkedin.com/in/david-penagos-b30406246",
    hrefLabel: "LinkedIn",
  },
  {
    id: "publish-kit",
    title: "Subir este kit a tu cuenta",
    time: "10 min",
    detail:
      "Repo público p.ej. github-infra-profile. Push. El workflow de Actions debe quedar verde. Pínealo cuando el badge exista.",
    href: "https://github.com/new",
    hrefLabel: "Crear repo",
  },
  {
    id: "next-lab",
    title: "Publicar un lab Docker + Terraform este mes",
    time: "Un fin de semana",
    detail:
      "Vagrant demuestra redes. El mercado junior pide contenedores e IaC. Un repo pequeño, tuyo, con destroy y costos, gana a clonar un EKS de YouTube.",
    href: "/proyectos",
    hrefLabel: "Ver el plan",
  },
] as const;

export const recruiterSeconds = [
  {
    t: "0–3 s",
    before: "Bio cortada de olimpiadas. Instagram. Sin LinkedIn en el sidebar.",
    after: "Headline infra/nube/DevOps. UAO. LinkedIn. Available for hire.",
  },
  {
    t: "3–8 s",
    before: "README con imágenes rotas y tres repos inventados.",
    after: "Tres labs reales: balancer, IR, Linux. Nada fantasma.",
  },
  {
    t: "8–20 s",
    before: "CineCine, Botium-Toys, “pal patron”. Cierra.",
    after: "Pines de plataforma. Escribe por la práctica.",
  },
] as const;
