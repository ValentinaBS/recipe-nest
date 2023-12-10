# Green Plates - MERN Group Project

## Description

This project aims to develop a recipe website with a focus on vegan and vegetarian options, similar to Cookpad, where users can create and save their favorite recipes. It was created for the Full Stack Web Development Course from [SomosCoders](https://somoscoders.org/es).

## Table of Contents

- [Overview](#overview)
    - [Installation](#installation)
    - [User Stories](#user-stories)
    - [Screenshots & Figma](#screenshots-figma)
    - [Links](#links)
- [Built with](#built-with)
    - [Backend](#backend)
    - [Frontend](#frontend)
- [Contributing](#contributing)
- [Authors](#authors)

## Overview

### Installation

1. Clone the repository:
```
git clone https://github.com/ValentinaBS/recipe-nest.git
``` 

2. Navigate to the project directory:
```
cd front
``` 

3. Install dependencies:
```
npm i
``` 

4. Start the app:
```
npm run dev
``` 

5. Repeat the previous instructions but with the backend folder:
```
cd back
npm i
npm start
``` 

### User Stories

- As a user, I want to share photos of my culinary creations along with the recipe to share them with others.
- As a user, I want to create an account to share my own recipes and connect with other cooking enthusiasts.
- As a user, I want to be able to search for recipes by name, occasion or type, to find inspiration and new ideas for my meals.
- As a user, I want to be able to save my favorite recipes in a personalized list, so that I can easily access them in the future.
- As a user, I want to rate and leave comments on other users' recipes, to share my experience and help the community decide which recipes to try.

### Screenshots & Figma

![Desktop View](https://i.imgur.com/YBiYaYS.png)
![Mobile View](https://i.imgur.com/xI5Gdlf.png)

[Figma File](https://www.figma.com/file/p6pMpUzXB2OsJU54T65BHr/Nido-de-recetas?type=design&node-id=0%3A1&mode=design&t=LJuEct4ckYGd762R-1)

## Built with

### Backend Technologies:

### Express (`express@4.18.2`):
Express is a fast, unopinionated, minimalist web framework for Node.js. It is widely used and well-documented, making it an excellent choice for building robust and scalable web applications.

### MySQL2 (`mysql2@3.6.2`):

MySQL2 is a Node.js-based MySQL library, providing a straightforward and efficient way to interact with MySQL databases. Its asynchronous nature aligns well with Node.js, making it suitable for handling database operations.

### bcryptjs (`bcryptjs@2.4.3`):

bcryptjs is a library for hashing passwords, adding a layer of security to user authentication. Hashing passwords with bcrypt helps protect against common security vulnerabilities, such as password leaks.

### jsonwebtoken (`jsonwebtoken@9.0.2`):

JSON Web Tokens (JWTs) are a secure way to transmit information between parties. In a web application, JWTs are commonly used for authentication and authorization purposes.

### Cors (`cors@2.8.5`):

CORS (Cross-Origin Resource Sharing) is essential for allowing or restricting access to resources on a web server from different domains. It enhances security by preventing unauthorized access to resources.

### dotenv (`dotenv@16.3.1`):

dotenv is used to load environment variables from a `.env` file into the Node.js environment. This is useful for configuring sensitive information like database credentials or API keys without exposing them in the code.

### TypeScript (`typescript@5.2.2`) and `@types` (Dev Dependencies):

TypeScript adds static typing to JavaScript, catching errors during development and providing better code completion. The inclusion of TypeScript and corresponding type definitions enhances code quality and developer productivity.

### Frontend Technologies:

### React (`react@18.2.0`):

React is a popular JavaScript library for building user interfaces. Its component-based architecture and virtual DOM make it efficient for creating dynamic and responsive web applications.

### Bootstrap (`bootstrap@5.3.2`) and `react-bootstrap` (`react-bootstrap@2.9.1`):

Bootstrap provides a responsive design and UI components that can be easily integrated into React applications using the `react-bootstrap` library. This accelerates the frontend development process and ensures a consistent look and feel.

### formik (`formik@2.4.5`) and yup (`yup@1.3.2`):

Formik simplifies form management in React applications, and yup is a schema validation library. Together, they provide a powerful and declarative way to handle form data and validation.

### axios (`axios@1.6.2`):

Axios is a popular HTTP client library for making asynchronous requests. It simplifies data fetching and interaction with APIs, providing a clean and concise syntax.

### React Router (`react-router-dom@6.17.0`):

React Router enables navigation and routing in React applications. It ensures a seamless user experience by allowing developers to define different views based on the application's URL.

### Cloudinary (`cloudinary/react@1.11.2` and `cloudinary/url-gen@1.13.0`):

Cloudinary provides a platform for managing and delivering images and videos. The React and URL generation libraries enhance integration and optimization of media assets in the application, specifically the recipe images storage.

### animate.css (`animate.css@4.1.1`):

animate.css is a library for adding CSS animations to elements. It enhances the visual appeal of the application by providing pre-built animations that can be easily applied to components.

### Testing Libraries and Tools (Dev Dependencies):

Testing is crucial for ensuring the reliability of the application. Jest, `@react-testing-library`, and other testing tools enable us to write and execute unit and integration tests, ensuring that the application behaves as expected.

### TypeScript (`typescript@5.2.2`) and `@types` (Dev Dependencies):

Similar to the backend, TypeScript and corresponding type definitions enhance code quality and developer productivity on the frontend by adding static typing to JavaScript.

### Vite (`vite@4.4.5`):

Vite is a fast build tool for modern web development. It accelerates the development process by providing a streamlined development server, efficient hot module replacement, and quick build times.

## Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature/new-feature`
3. Make your changes and commit them: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## Authors

- Linkedin - [Valentina Belén Sánchez](https://www.linkedin.com/in/valentina-belen-sanchez/)
- Github - [ValentinaBS](https://github.com/ValentinaBS)

- Linkedin - [Ana Laura Zanardi](https://www.linkedin.com/in/analaurazanardi/)
- Github - [ZanardiAnA](https://github.com/ZanardiAnA)

- Linkedin - [Lourdes Camila Godoy Lotta](https://www.linkedin.com/in/lourdes-camila-godoy-lotta-0330621bb/)
- Github - [LoulyGodoyLotta](https://github.com/LoulyGodoyLotta)

- Linkedin - [Zoe Carida](https://www.linkedin.com/in/zoe-n-carida/)
- Github - [ZoeC21](https://github.com/ZoeC21)

- Linkedin - [Belén Delgadillo Arias](https://www.linkedin.com/in/belen-delgadillo-arias-349043251)
- Github - [BelenDelgadilloArias](https://github.com/BelenDelgadilloArias)

---

# Green Plates - Proyecto Grupal MERN

## Descripción

Este proyecto tiene como objetivo desarrollar un sitio web de recetas con enfoque en tener opciones veganas y vegetarianas, similar a Cookpad, donde los usuarios pueden crear y guardar sus recetas favoritas. Fue creado para el Curso de Desarrollo Web Full Stack de [SomosCoders](https://somoscoders.org/es).

## Table of Contents

- [Visión General](#overview)
    - [Instalación](#installation)
    - [Historias de Usuario](#user-stories)
    - [Capturas de Pantalla y Figma](#screenshots-figma)
    - [Enlaces](#links)
- [Hecho con](#built-with)
    - [Tecnologías del Backend](#tecnologías-del-backend)
    - [Tecnologías del Frontend](#tecnologías-del-frontend)
- [Contribuir](#contribuir)
- [Autoras](#autoras)

## Visión General

### Instalación

1. Clona el repositorio:
```
git clone https://github.com/ValentinaBS/recipe-nest.git
``` 

2. Navega al directorio del proyecto:
```
cd front
``` 

3. Instala dependencias:
```
npm i
``` 

4. Inicia la aplicación:
```
npm run dev
``` 

5. Repite las instrucciones anteriores pero con la carpeta del backend:
```
cd back
npm i
npm start
``` 

### Historias de Usuario

- Como usuario, quiero compartir fotos de mis creaciones culinarias junto con la receta para compartirlas con otros.
- Como usuario, quiero crear una cuenta para compartir mis propias recetas y conectarme con otros entusiastas de la cocina.
- Como usuario, quiero poder buscar recetas por nombre, ocasión o tipo, para encontrar inspiración y nuevas ideas para mis comidas.
- Como usuario, quiero poder guardar mis recetas favoritas en una lista personalizada, para poder acceder fácilmente a ellas en el futuro.
- Como usuario, quiero calificar y dejar comentarios en las recetas de otros usuarios, para compartir mi experiencia y ayudar a la comunidad a decidir qué recetas probar.

### Capturas de Pantalla y Figma

![Desktop View](https://i.imgur.com/YBiYaYS.png)
![Mobile View](https://i.imgur.com/xI5Gdlf.png)

[Figma File](https://www.figma.com/file/p6pMpUzXB2OsJU54T65BHr/Nido-de-recetas?type=design&node-id=0%3A1&mode=design&t=LJuEct4ckYGd762R-1)

## Hecho con

### Tecnologías del Backend:

### Express (`express@4.18.2`):
Express es un framework web rápido y minimalista para Node.js. Es ampliamente utilizado y está bien documentado, lo que lo convierte en una excelente opción para construir aplicaciones web sólidas y escalables.

### MySQL2 (`mysql2@3.6.2`):
MySQL2 es una biblioteca MySQL basada en Node.js que proporciona una forma sencilla y eficiente de interactuar con bases de datos MySQL. Su naturaleza asíncrona se alinea bien con Node.js, lo que lo hace adecuado para manejar operaciones de bases de datos.

### bcryptjs (`bcryptjs@2.4.3`):
bcryptjs es una biblioteca para hashear contraseñas, añadiendo una capa de seguridad a la autenticación del usuario. Hashear contraseñas con bcrypt ayuda a proteger contra vulnerabilidades comunes de seguridad, como las filtraciones de contraseñas.

### jsonwebtoken (`jsonwebtoken@9.0.2`):
Los JSON Web Tokens (JWT) son una forma segura de transmitir información entre partes. En una aplicación web, los JWT se utilizan comúnmente para autenticación y autorización.

### Cors (`cors@2.8.5`):
CORS es esencial para permitir o restringir el acceso a recursos en un servidor web desde diferentes dominios. Mejora la seguridad al prevenir el acceso no autorizado a recursos.

### dotenv (`dotenv@16.3.1`):
dotenv se utiliza para cargar variables de entorno desde un archivo .env en el entorno de Node.js. Esto es útil para configurar información sensible como credenciales de bases de datos o claves de API sin exponerlas en el código.

### TypeScript (`typescript@5.2.2`) and `@types` (Dev Dependencies):
TypeScript añade tipado estático a JavaScript, detectando errores durante el desarrollo y proporcionando una mejor finalización de código. La inclusión de TypeScript y las definiciones de tipo correspondientes mejoran la calidad del código y la productividad del desarrollador.

### Tecnologías del Frontend:

### React (`react@18.2.0`):
React es una popular biblioteca de JavaScript para construir interfaces de usuario. Su arquitectura basada en componentes y DOM virtual lo hace eficiente para crear aplicaciones web dinámicas y receptivas.

### Bootstrap (`bootstrap@5.3.2`) and `react-bootstrap` (`react-bootstrap@2.9.1`):
Bootstrap proporciona un diseño responsive y componentes de interfaz de usuario que se pueden integrar fácilmente en aplicaciones React mediante la biblioteca react-bootstrap. Esto acelera el proceso de desarrollo del frontend y garantiza una apariencia y sensación consistentes.

### formik (`formik@2.4.5`) and yup (`yup@1.3.2`):
Formik simplifica la gestión de formularios en aplicaciones React, y yup es una biblioteca de validación de esquemas. Juntos, proporcionan una forma potente y declarativa de manejar datos y validación de formularios.

### axios (`axios@1.6.2`):
Axios es una biblioteca HTTP para realizar solicitudes asíncronas. Simplifica la obtención de datos e interacción con APIs, proporcionando una sintaxis limpia y concisa.

### React Router (`react-router-dom@6.17.0`):
React Router permite la navegación y el enrutamiento en aplicaciones React. Asegura una experiencia de usuario sin problemas al permitir que los desarrolladores definan diferentes vistas según la URL de la aplicación.

### Cloudinary (`cloudinary/react@1.11.2` and `cloudinary/url-gen@1.13.0`):
Cloudinary proporciona una plataforma para gestionar y entregar imágenes y videos. Las bibliotecas de React y generación de URL mejoran la integración y optimización de activos multimedia en la aplicación, específicamente el almacenamiento de imágenes de recetas.

### animate.css (`animate.css@4.1.1`):
animate.css es una biblioteca para agregar animaciones CSS a elementos. Mejora el atractivo visual de la aplicación al proporcionar animaciones preconstruidas que se pueden aplicar fácilmente a componentes.

### Testing Libraries and Tools (Dev Dependencies):
Las pruebas son cruciales para garantizar la confiabilidad de la aplicación. Jest, @react-testing-library, y otras herramientas de prueba nos permiten escribir y ejecutar pruebas unitarias e de integración, asegurando que la aplicación se comporte según lo esperado.

### TypeScript (`typescript@5.2.2`) and `@types` (Dev Dependencies):
De manera similar al backend, TypeScript y las definiciones de tipo correspondientes mejoran la calidad del código y la productividad del desarrollador en el frontend al agregar tipado estático a JavaScript.

### Vite (`vite@4.4.5`):
Vite es una herramienta de construcción rápida para el desarrollo web moderno. Acelera el proceso de desarrollo al proporcionar un servidor de desarrollo optimizado, reemplazo eficiente de módulos en caliente y tiempos de compilación rápidos.

## Contribuir

1. Haz un fork del repositorio.
2. Crea una nueva rama: git checkout -b feature/nueva-caracteristica.
3. Realiza tus cambios y hazles commit: git commit -m 'Agregar nueva característica'.
4. Haz push a la rama: git push origin feature/nueva-caracteristica.
5. Crea un pull request.

## Autoras

- Linkedin - [Valentina Belén Sánchez](https://www.linkedin.com/in/valentina-belen-sanchez/)
- Github - [ValentinaBS](https://github.com/ValentinaBS)

- Linkedin - [Ana Laura Zanardi](https://www.linkedin.com/in/analaurazanardi/)
- Github - [ZanardiAnA](https://github.com/ZanardiAnA)

- Linkedin - [Lourdes Camila Godoy Lotta](https://www.linkedin.com/in/lourdes-camila-godoy-lotta-0330621bb/)
- Github - [LoulyGodoyLotta](https://github.com/LoulyGodoyLotta)

- Linkedin - [Zoe Carida](https://www.linkedin.com/in/zoe-n-carida/)
- Github - [ZoeC21](https://github.com/ZoeC21)

- Linkedin - [Belén Delgadillo Arias](https://www.linkedin.com/in/belen-delgadillo-arias-349043251)
- Github - [BelenDelgadilloArias](https://github.com/BelenDelgadilloArias)