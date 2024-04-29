# Test Práctico Meli - Frontend

## Setup
Node v21.7.1

Express, Vite, Typescript, React, SASS


## Introducción

En la carpeta src encontraras la aplicación del cliente y la del servidor. La carpeta dist se generará para ambientes productivos.


## Instalación
Para instalar el proyecto asegurate de tener actualizado node v21.7.1

```bash
npm i
```


## Development

Para correr el proyecto en desarrollo deberás ejecutar el siguiente script:

```bash
npm run dev
```

## Production

Para crear el proyecto para producción deberás primero construir el proyecto y luego correrlo en modo de producción.

NODE_ENV=production tsx src/server/main.ts

```bash
npm run build
npm run start
```