# ChaosControl-Web

Sitio estático multipágina de **Chaos Control**, publicado en GitHub y preparado para desplegarse en Vercel.

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
const DOWNLOAD_URL = "https://github.com/Lian-dev44/ChaosControl/releases/download/v1.0.0/ChaosControl-Setup-v1.0.exe";
```

La URL actual apunta a la Release académica v1.0.0 publicada en GitHub:

`https://github.com/Lian-dev44/ChaosControl/releases/download/v1.0.0/ChaosControl-Setup-v1.0.exe`

Si se publica una versión futura, basta con reemplazar esta constante por la nueva URL.

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

La web ya incluye capturas reales de las cuatro vistas principales de Chaos Control dentro de `assets/img/screenshots/`.
