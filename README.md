## App Shell PWA Music App

Esta es una aplicación web progresiva (PWA) construida con **React** y **Vite**, diseñada siguiendo el patrón **App Shell**.

---

### Configuración PWA 

La configuración de la PWA se gestiona a través del plugin `vite-plugin-pwa` en el archivo `vite.config.js`. Los aspectos clave incluyen:

* **Manifiesto Web**: Define metadatos como el nombre de la app (`React PWA Music App`), nombre corto (`MusicApp`), colores de tema, iconos y comportamiento de visualización (`standalone`).
* **Service Worker**: Utiliza Workbox para generar automáticamente un service worker (`dev-sw.js` en desarrollo).
    * **Estrategia de Caché**: Se emplea la estrategia `precacheAndRoute` para cachear los assets estáticos definidos en `globPatterns` (`'**/*.{js,css,html,ico,png,svg,woff,woff2}'`). Esto asegura que el App Shell (HTML, CSS, JS básicos, iconos) esté disponible sin conexión.
    * **Actualización Automática**: `registerType: 'autoUpdate'` asegura que el service worker se actualice automáticamente cuando hay una nueva versión disponible.
* **Modo Desarrollo**: La PWA está habilitada en modo de desarrollo (`devOptions: { enabled: true }`) para facilitar las pruebas.

---

### Arquitectura App Shell 

La arquitectura App Shell se centra en cargar una interfaz de usuario mínima (el "shell") lo más rápido posible y cachearla.

1.  **index.html**: Es el punto de entrada principal. Carga el `main.jsx`.
2.  **main.jsx**: Renderiza el componente principal `App` en el DOM.
3.  **App.jsx**: Contiene la estructura básica de la interfaz de usuario (encabezado, navegación, área de contenido principal, pie de página). Este es el "shell" que se cachea.
4.  **CSS**: Los estilos básicos del shell (`App.css`, `index.css`) también se cachean para asegurar una apariencia consistente sin conexión.
5.  **Service Worker (`dev-dist/sw.js`)**: Intercepta las solicitudes de red. Sirve los assets cacheados del App Shell cuando está sin conexión y gestiona la estrategia de caché. La precaché incluye específicamente `index.html` y `registerSW.js`.

---

### Pruebas sin Conexión 

Para probar la funcionalidad sin conexión:

1.  **Construye la aplicación**: Ejecuta `npm run build` o usa el modo de desarrollo (`npm run dev`) ya que la PWA está habilitada.
2.  **Inicia un servidor local**: Sirve el directorio `dist` (para build) o usa el servidor de desarrollo de Vite.
3.  **Abre las Herramientas de Desarrollador** en tu navegador (usualmente F12).
4.  **Ve a la pestaña "Application"** (Chrome/Edge) o "Almacenamiento" (Firefox).
5.  **Service Workers**: Verifica que el service worker esté activado y en ejecución.
6.  **Simula Offline**:
    * En la pestaña "Network" (Red), marca la casilla "Offline".
    * O, en la pestaña "Application" -> "Service Workers", marca la casilla "Offline".
7.  **Recarga la página**: La aplicación debería cargarse utilizando los assets cacheados por el service worker, mostrando el App Shell incluso sin conexión a internet.