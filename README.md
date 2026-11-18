# Sancte Ioseph Scriptorium 0.7

Editor de partituras en notación ABC. Funciona en el navegador y se puede instalar como app.

## Subir a GitHub Pages
1. Creá un repositorio nuevo y subí **todo el contenido de esta carpeta** a la raíz (`index.html`, `sw.js`, `manifest.webmanifest`, carpeta `icons/`).
2. En el repositorio: Settings → Pages → Source: *Deploy from a branch* → rama `main`, carpeta `/ (root)`.
3. Abrí `https://TU-USUARIO.github.io/TU-REPOSITORIO/`.

## Instalar como app
- Chrome / Edge (computadora): ícono de instalar en la barra de direcciones.
- Android (Chrome): menú ⋮ → *Instalar aplicación*.
- iPhone / iPad (Safari): Compartir → *Agregar a pantalla de inicio*.

## Notas
- Necesita HTTPS (GitHub Pages ya lo da). Abierto como archivo local (`file://`) funciona, pero sin instalación.
- Las librerías abcjs y jsPDF se cargan desde CDN y quedan guardadas en el caché la primera vez, así que después anda sin conexión.
- Las partituras se guardan en el almacenamiento del navegador; usá Archivo → copia de seguridad para respaldarlas.
- Para publicar una versión nueva, cambiá `V` en `sw.js` (por ejemplo `sis-0.7.1`) además de reemplazar `index.html`.
