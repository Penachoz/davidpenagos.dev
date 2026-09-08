# Montar `davidpenagos.dev` en GitHub Pages

Esta guía publica el portafolio como un sitio estático de Next.js usando:

- Repositorio: `Penachoz/davidpenagos.dev`
- Rama de código: `main`
- Hosting: GitHub Pages
- Despliegue: GitHub Actions
- URL actual: `https://penachoz.github.io/davidpenagos.dev/`
- Dominio futuro: `https://davidpenagos.cloud`

El proyecto ya incluye:

- `output: "export"` para generar el sitio en `out/`.
- `.github/workflows/deploy-pages.yml`.
- `public/.nojekyll` para servir correctamente los archivos `_next`.
- Sin `CNAME` hasta que exista un dominio propio.

## 1. Estado actual

El repositorio ya existe y el sitio se publica en:

```text
https://penachoz.github.io/davidpenagos.dev/
```

No hace falta un dominio propio para que la web funcione. Cuando compres `davidpenagos.cloud`, sigue las secciones 5 a 7. No uses un comodín `*.davidpenagos.cloud`.

## 2. Crear el repositorio

En [github.com/new](https://github.com/new):

1. Owner: `Penachoz`.
2. Repository name: `davidpenagos.dev`.
3. Visibility: `Public`.
4. Description:

   ```text
   Animated cloud and infrastructure engineering portfolio built with Next.js
   ```

5. No añadir README, `.gitignore` ni licencia desde el formulario; ya existen en el proyecto.
6. Crear el repositorio.

Topics recomendados:

```text
portfolio nextjs typescript devops cloud infrastructure github-pages
```

## 3. Subir el código

Desde la raíz del proyecto:

```bash
git remote add github git@github.com:Penachoz/davidpenagos.dev.git
git push -u github main
```

Si ya existe un remote llamado `github`:

```bash
git remote set-url github git@github.com:Penachoz/davidpenagos.dev.git
git push -u github main
```

Usa autenticación SSH o la integración oficial de GitHub. No pegues un Personal Access Token en un chat, un archivo o la URL del remote.

## 4. Habilitar GitHub Pages

En el repositorio:

1. Abrir `Settings → Pages`.
2. En `Build and deployment`, elegir `Source: GitHub Actions`.
3. Abrir la pestaña `Actions`.
4. Seleccionar `Deploy portfolio to GitHub Pages`.
5. Si no se ejecutó al subir `main`, pulsar `Run workflow`.

El workflow:

1. Instala dependencias con `npm ci`.
2. Ejecuta lint.
3. Verifica TypeScript.
4. Genera el export estático en `out/`.
5. Publica el artifact con las acciones oficiales de GitHub Pages.

No es necesario crear una rama `gh-pages`.

## 5. Verificar el dominio en GitHub

Antes de apuntar el DNS:

1. Ir a GitHub `Settings → Pages`.
2. En la sección de dominio verificado, añadir `davidpenagos.cloud`.
3. GitHub mostrará un registro TXT parecido a:

   ```text
   Tipo: TXT
   Nombre: _github-pages-challenge-Penachoz.davidpenagos.cloud
   Valor: [valor entregado por GitHub]
   ```

4. Crear ese TXT en el proveedor DNS.
5. Esperar propagación y pulsar `Verify`.
6. Conservar el TXT después de verificar.

El valor TXT es único; copiar exactamente el que muestre GitHub.

## 6. Configurar DNS

Crear estos cuatro registros para el dominio raíz:

| Tipo | Nombre | Valor |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

Para que `www.davidpenagos.cloud` también funcione:

| Tipo | Nombre | Valor |
| --- | --- | --- |
| CNAME | `www` | `Penachoz.github.io` |

Los cuatro registros IPv6 son opcionales:

| Tipo | Nombre | Valor |
| --- | --- | --- |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |

Si el proveedor ofrece proxy DNS, dejar inicialmente los registros en modo “DNS only” hasta que GitHub emita el certificado.

## 7. Activar el dominio y HTTPS

En `Penachoz/davidpenagos.dev → Settings → Pages`:

1. Crear `public/CNAME` con una sola línea: `davidpenagos.cloud`.
2. En `Custom domain`, escribir `davidpenagos.cloud`.
3. Guardar.
4. Esperar a que GitHub valide DNS.
5. Activar `Enforce HTTPS` cuando la opción esté disponible.

La emisión del certificado y la propagación DNS pueden tardar.

## 8. Verificaciones

DNS:

```bash
dig +short davidpenagos.cloud A
dig +short www.davidpenagos.cloud CNAME
```

HTTP y certificado:

```bash
curl -I https://davidpenagos.cloud
curl -I https://www.davidpenagos.cloud
```

Comprobar:

- `https://davidpenagos.cloud` devuelve `200`.
- `www` redirige o resuelve al mismo sitio.
- El navegador muestra HTTPS válido.
- Animaciones, iconos y enlaces funcionan.
- No hay errores 404 bajo `/_next/`.

## 9. Actualizar GitHub y LinkedIn

Solo después de validar HTTPS:

1. GitHub `Settings → Public profile → Website`: `https://penachoz.github.io/davidpenagos.dev/` (o `https://davidpenagos.cloud` cuando exista).
2. Repositorio `davidpenagos.dev → About → Website`: la misma URL.
3. LinkedIn `Información de contacto → Sitio web`: la misma URL.
4. Añadir el sitio a la sección “Destacados” de LinkedIn.

## 10. Actualizaciones futuras

Cada cambio enviado a `main` se despliega automáticamente:

```bash
git add .
git commit -m "Update portfolio"
git push github main
```

Revisar el resultado en `Actions → Deploy portfolio to GitHub Pages`.

## Problemas comunes

### La página abre, pero no carga estilos

- Confirmar que `public/.nojekyll` existe.
- Confirmar que no hay un `CNAME` apuntando a un dominio que todavía no existe.
- Volver a ejecutar el workflow.

### El workflow no puede desplegar

- Verificar `Settings → Pages → Source: GitHub Actions`.
- Revisar que Actions esté permitido en `Settings → Actions → General`.
- Confirmar que el workflow conserva permisos `pages: write` e `id-token: write`.

### El dominio no valida

- Eliminar registros A antiguos o conflictivos.
- No usar un CNAME en el apex `@` si el proveedor no soporta CNAME flattening.
- Verificar que el TXT de GitHub siga presente.
- Esperar propagación antes de cambiar registros repetidamente.

### HTTPS no se habilita

- Desactivar temporalmente el proxy del proveedor DNS.
- Confirmar los cuatro registros A.
- Esperar a que GitHub termine de emitir el certificado.

