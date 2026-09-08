export const proofPoints = [
  {
    value: "3 VM",
    label: "Apache cluster reproducible with Vagrant",
  },
  {
    value: "C1",
    label: "English certified with IELTS",
  },
  {
    value: "24/7",
    label: "Reliability mindset: observe, recover, document",
  },
] as const;

export const tools = {
  current: [
    { name: "Linux", icon: "linux/FCC624" },
    { name: "Bash", icon: "gnubash/4EAA25" },
    { name: "Git", icon: "git/F05032" },
    { name: "Apache", icon: "apache/D22128" },
    { name: "Java", icon: "openjdk/FFFFFF" },
    { name: "Python", icon: "python/3776AB" },
    { name: "MongoDB", icon: "mongodb/47A248" },
  ],
  developing: [
    { name: "Docker", icon: "docker/2496ED" },
    { name: "Terraform", icon: "terraform/844FBA" },
    { name: "AWS", icon: "amazonwebservices/FF9900" },
    { name: "Azure", icon: "microsoftazure/0078D4" },
    { name: "Kubernetes", icon: "kubernetes/326CE5" },
    { name: "GitHub Actions", icon: "githubactions/2088FF" },
    { name: "Prometheus", icon: "prometheus/E6522C" },
    { name: "Grafana", icon: "grafana/F46800" },
  ],
} as const;

export const featuredWork = [
  {
    eyebrow: "Infrastructure lab",
    title: "Apache load balancer",
    description:
      "Three Ubuntu virtual machines, two Apache backends, mod_proxy_balancer and repeatable load tests with Artillery.",
    href: "https://github.com/Penachoz/modproxy-artillery",
    tags: ["Linux", "Vagrant", "Apache", "Load testing"],
  },
  {
    eyebrow: "Edge computing",
    title: "PPE detection at the edge",
    description:
      "Real-time safety equipment detection on Raspberry Pi with YOLOv8, TensorFlow Lite and OpenCV.",
    href: "https://github.com/Penachoz/PPE-Detection-Raspberrypi",
    tags: ["Python", "Raspberry Pi", "TFLite", "OpenCV"],
  },
  {
    eyebrow: "REST API · hardening next",
    title: "CineCine API",
    description:
      "Spring Boot and MongoDB API selected for a cloud-hardening rebuild: security, tests, containers, CI/CD and infrastructure as code.",
    href: "https://github.com/Penachoz/ApiCineCine",
    tags: ["Java", "Spring Boot", "MongoDB", "REST"],
  },
] as const;

export const cloudBuilds = [
  {
    number: "01",
    state: "BUILDING NOW",
    title: "CineCine Cloud Platform",
    description:
      "Turn the existing Java REST API into a secure, observable workload deployed to AWS with Terraform and GitHub Actions.",
    outcome:
      "Docker · ECS Fargate · ALB · MongoDB Atlas · OIDC · CloudWatch",
  },
  {
    number: "02",
    state: "NEXT",
    title: "MediSync Cloud API",
    description:
      "Rebuild the appointments backend around tested API contracts, secret management, backups and an Azure deployment.",
    outcome:
      "Node.js · Azure Container Apps · Key Vault · IaC · Azure Monitor",
  },
  {
    number: "03",
    state: "PLANNED",
    title: "Edge Safety Cloud",
    description:
      "Connect the Raspberry Pi detector to a cloud event pipeline and operate it with dashboards, alerts and a recovery runbook.",
    outcome:
      "Raspberry Pi · AWS IoT · Lambda · S3 · Grafana · Terraform",
  },
] as const;

