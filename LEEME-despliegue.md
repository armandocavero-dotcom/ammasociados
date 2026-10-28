# AMM Asociados — cómo publicar el sitio

Sitio estático (HTML + CSS) publicado con GitHub Pages en el dominio ammasociados.com.

## 1. GitHub Pages

- Repositorio: `armandocavero-dotcom/ammasociados`, rama `main`, carpeta `/ (root)`.
- Dominio personalizado: `ammasociados.com` (definido en el archivo `CNAME`).
- Cuando GitHub verifique el dominio, activar **Enforce HTTPS** en Settings → Pages.

## 2. DNS de ammasociados.com (Spaceship → Advanced DNS)

Borrar primero los registros que Spaceship crea por defecto para `@` y `www`, y luego crear:

| Tipo  | Host | Valor                            |
|-------|------|----------------------------------|
| A     | @    | 185.199.108.153                  |
| A     | @    | 185.199.109.153                  |
| A     | @    | 185.199.110.153                  |
| A     | @    | 185.199.111.153                  |
| CNAME | www  | armandocavero-dotcom.github.io   |

## 3. Correo info@ammasociados.com

Crear el buzón o alias en el proveedor de correo y agregar sus registros MX y SPF en Advanced DNS.

## 4. Google Search Console

1. Agregar la propiedad `https://ammasociados.com/` y verificarla (registro TXT en Advanced DNS).
2. Enviar `https://ammasociados.com/sitemap.xml`.

## 5. Actualizar el sitio

Para cambiar textos o imágenes, editar los archivos en GitHub (o pedírselo a Claude) y confirmar el cambio en la rama `main`; GitHub Pages publica la nueva versión en uno o dos minutos.
