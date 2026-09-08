export const profile = {
  name: "David Penagos",
  fullName: "David Penagos",
  github: "Penachoz",
  githubUrl: "https://github.com/Penachoz",
  avatar: "https://avatars.githubusercontent.com/u/115034797?v=4",
  email: "dpenagos0912@gmail.com",
  location: "Cali, Colombia",
  linkedin: "https://www.linkedin.com/in/david-penagos-b30406246",
  university: "Universidad Autónoma de Occidente",
  currentTitle: "Estudiante de Ingeniería Informática",
  targetTitle: "Infrastructure / Cloud / DevOps Engineer",
  website: "https://www.linkedin.com/in/david-penagos-b30406246",
  hireable: true,
  bioCurrent:
    "I started with competitive programming and math olympiads, which taught me how to solve hard problems. Now, I apply that mindset to building and securing cloud ",
  bioEs:
    "Estudiante de Ingeniería Informática enfocado en infraestructura, cloud y DevOps. Linux, redes y automatización. Abierto a prácticas y roles junior.",
  bioEn:
    "Infrastructure, cloud & DevOps. Linux, networking, CI/CD. Computer Engineering · Cali. Open to intern/junior roles.",
} as const;

export const credentials = [
  {
    name: "IELTS Academic",
    detail: "Inglés C1",
  },
  {
    name: "Google Cybersecurity",
    detail: "Foundations + Networks (en curso / labs publicados)",
  },
] as const;

export const githubSettings = {
  name: profile.fullName,
  bio: profile.bioEs,
  bioEn: profile.bioEn,
  company: "Universidad Autónoma de Occidente",
  location: profile.location,
  website: profile.linkedin,
  emailPublic: profile.email,
} as const;
