# davidpenagos.dev — Cloud & Infrastructure Portfolio

Portafolio animado de David Penagos, orientado a prácticas y roles junior en **Infrastructure, Cloud y DevOps**. La experiencia visual representa un flujo `source → pipeline → cloud → compute → data` y respeta la preferencia de movimiento reducido del sistema.

## Qué hay aquí

| Ruta | Para qué |
| --- | --- |
| `/` | Portafolio público responsive |
| `docs/linkedin_profile_refresh.md` | Cambios exactos para LinkedIn y roles objetivo |
| `docs/api_cloud_modernization.md` | Remediación de APIs y tres proyectos estrella |
| `docs/MONTAR_DAVIDPENAGOS_DEV_EN_GITHUB.md` | Guía de GitHub Pages, DNS y HTTPS |
| `github-profile/README.md` | Nuevo README de perfil con iconos |
| `github-profile/PORTFOLIO_ROADMAP.md` | Roadmap técnico completo |

## Correr en local

```bash
npm install
npm run dev
```

Abre `http://127.0.0.1:43127`.

```bash
npm run lint
npm run build
```

## Publicar en GitHub Pages

El proyecto genera un export estático y se despliega automáticamente desde `main`.

- Sitio actual: [https://penachoz.github.io/davidpenagos.dev/](https://penachoz.github.io/davidpenagos.dev/)
- Repositorio: [github.com/Penachoz/davidpenagos.dev](https://github.com/Penachoz/davidpenagos.dev)
- Dominio propio: más adelante se puede conectar `davidpenagos.cloud` sin cambiar de hosting.

Guía DNS: [`docs/MONTAR_DAVIDPENAGOS_DEV_EN_GITHUB.md`](docs/MONTAR_DAVIDPENAGOS_DEV_EN_GITHUB.md).

## Seguridad prioritaria

La auditoría detectó una credencial de MongoDB expuesta en `ApiCineCine`. Rotarla antes de destacar o desplegar el repositorio. La guía de remediación está en `docs/api_cloud_modernization.md`.

## Stack

Next.js 16, React 19, TypeScript, Tailwind CSS 4 y shadcn/ui.
