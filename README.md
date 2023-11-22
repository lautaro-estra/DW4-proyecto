# DW4-proyecto: Solución Digital para Aumentar Ventas

Este proyecto es un proyecto grupal destinado a proporcionar una solución digital para José Alvarez, un comerciante en Saavedra, CABA. El objetivo es atraer a una clientela más joven y aumentar sus ventas en línea. Utilizamos Node.js y Express para crear una aplicación web que aborde esta necesidad.

## Estructura del Proyecto

La estructura de directorio del proyecto se organiza de la siguiente manera:

```
solucion-digital-ventas/
├── controllers/
│   └── mainController.js
├── public/
│   ├── e-commerce/
│   │   ├── public/
│   │   │   ├── favicon.ico
│   │   │   ├── index.html
│   │   │   ├── logo192.png
│   │   │   ├── logo512.png
│   │   │   ├── manifest.json
│   │   │   └── robots.txt
│   │   ├── .gitignore
│   │   ├── tailwind.config.js
│   │   ├── index.html
│   │   └── style.css
├── routes/
│   └── index.js
├── src/
│   ├── components/
│   │   ├── Home/
│   │   │   ├── Home.css
│   │   │   └── Home.js
│   │   ├── MainSection/
│   │   │   ├── MainSection.css
│   │   │   └── MainSection.js
│   │   ├── Navbar/
│   │   │   ├── Navbar.css
│   │   │   └── Navbar.js
│   │   └── Carousel.js
│   ├── img/
│   │   ├── background.png
│   │   ├── bt_add_to_caart.svg
│   │   ├── icon_close.png
│   │   ├── icon_transparent.png
│   │   └── logo.png
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTest.js
├── views/
│   └── home.ejs
├── .gitignore
├── app.js
├── index.html
├── package-lock.json
└── package.json

```


### Descripción de los Archivos

- `app.js`: El punto de entrada de la aplicación, donde se configura Express y se inicia la aplicación.

- `package.json`: Archivo de configuración de Node.js que lista las dependencias necesarias para el proyecto.

- `package-lock.json`: Archivo que detalla la información exacta de las versiones de las dependencias.

- `public/`: Carpeta que almacena archivos estáticos, como la página principal `index.html` y hojas de estilo `styles.css`.

- `views/`: Carpeta que contiene las vistas de la aplicación. La vista `home.ejs` es la página principal.

- `routes/`: Carpeta que define las rutas de la aplicación. El archivo `index.js` maneja la definición de rutas.

- `controllers/`: Carpeta que alberga los controladores de la aplicación. El archivo `mainController.js` contiene la lógica de manejo de solicitudes y respuestas.

## Instrucciones de Instalación

A continuación, se detallan los pasos para instalar y ejecutar la aplicación:

1. Asegúrate de tener Node.js instalado en tu sistema.

2. Clona este repositorio o descárgalo como ZIP.

3. Abre una terminal en la carpeta raíz del proyecto.

4. Ejecuta el siguiente comando para instalar las dependencias:

npm install

## Ejecución de la Aplicación

Para ejecutar la aplicación, sigue estos pasos:

1. Una vez que las dependencias estén instaladas, ejecuta la aplicación con el siguiente comando:

npm start


2. La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

## Contribución

Si deseas contribuir a este proyecto, siéntete libre de enviar solicitudes de extracción (pull requests) o informar sobre problemas (issues).

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para obtener más información.

---
