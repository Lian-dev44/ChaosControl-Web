# ChaosControl-Web

Sitio estático multipágina de **Chaos Control**, preparado para abrirse localmente y publicarse más adelante en GitHub/Vercel.

## 1. Abrir la web localmente

La opción más simple es abrir `index.html` en el navegador.

Para trabajar desde Visual Studio Code:

1. Abre la carpeta `ChaosControl-Web`.
2. Instala la extensión **Live Server** si deseas recarga automática.
3. Haz clic derecho en `index.html` y selecciona **Open with Live Server**.

No hay dependencias, compilación ni instalación de paquetes.

## 2. Cambiar la URL de descarga

El enlace está centralizado al inicio de `script.js`:

```js
const DOWNLOAD_URL = "";
```

Cuando exista el lanzamiento oficial, reemplaza la cadena vacía por la URL completa de GitHub Releases. Por ejemplo:

```js
const DOWNLOAD_URL = "https://github.com/USUARIO/REPOSITORIO/releases/latest";
```

Mientras la constante siga vacía, todos los botones de descarga mostrarán el mensaje: **“Descarga disponible durante la feria”**.

## 3. Carpeta que debe subirse a GitHub

Sube la carpeta completa `ChaosControl-Web`, incluyendo:

- Los cuatro archivos `.html`.
- `styles.css` y `script.js`.
- La carpeta `assets` con sus imágenes e iconos.
- Este `README.md`.

No hace falta subir la aplicación de escritorio ni sus archivos fuente dentro de esta carpeta web. El instalador o paquete final se publicará por separado en **GitHub Releases**.

## 4. Pendiente para Vercel

La web ya es compatible con alojamiento estático. Más adelante solo faltará:

1. Crear o elegir un repositorio en GitHub.
2. Subir el contenido de `ChaosControl-Web`.
3. Importar ese repositorio desde Vercel.
4. Mantener el proyecto sin comando de compilación y usar esta carpeta como raíz si el repositorio contiene otros archivos.
5. Publicar y verificar las cuatro rutas.

No se incluyó `vercel.json` porque el sitio no necesita reglas especiales.

## Estructura

```text
ChaosControl-Web/
├── index.html
├── caracteristicas.html
├── guia.html
├── descarga.html
├── styles.css
├── script.js
├── README.md
└── assets/
    ├── icons/
    ├── img/
    └── screenshots/
```

La carpeta `assets/screenshots` queda disponible para añadir capturas reales en el futuro. Las composiciones actuales del sitio están identificadas como representaciones ilustrativas y no se presentan como capturas reales.
