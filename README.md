# Taxonomía de Flynn - Infografía Interactiva

Este proyecto es una **infografía web interactiva** diseñada para explicar visualmente la clasificación de las arquitecturas de computación propuesta por Michael J. Flynn en 1972, universalmente conocida como la "Taxonomía de Flynn".

## Sobre el Proyecto

La aplicación transforma la enseñanza clásica de la arquitectura de computadoras en una experiencia dinámica, moderna y adaptativa. Su objetivo principal es facilitar el aprendizaje sobre cómo los sistemas manejan la concurrencia de hardware evaluando dos dimensiones principales: el **flujo de instrucciones** (Instruction stream) y el **flujo de datos** (Data stream).

### Características Principales:
- **Diseño Responsivo (Mobile-First)**: Interfaz en cuadrícula que se adapta sin problemas desde dispositivos móviles hasta monitores de escritorio.
- **Diagramas Animados**: Representación visual de cada arquitectura (SISD, SIMD, MISD, MIMD) con animaciones CSS que simulan el flujo continuo de datos e instrucciones entre los distintos componentes.
- **Interacción Detallada**: Tarjetas expandibles (mediante modales) que revelan descripciones técnicas precisas, submodelos (como SPMD, memoria compartida y distribuida) y ejemplos comerciales del mundo real.
- **Estética "Premium"**: Interfaz construida con un sistema de diseño propio basado en CSS puro, destacando el uso de *glassmorphism*, sombras suaves, variables dinámicas y colores armónicos.

## Tecnologías Utilizadas

- **[React](https://reactjs.org/) + [Vite](https://vitejs.dev/)**: Para el manejo de componentes y un entorno de desarrollo ultrarrápido.
- **CSS3 Puro (Vanilla CSS)**: Estilización estructurada con variables (`Custom Properties`), media queries y keyframes (animaciones).
- **[Lucide React](https://lucide.dev/)**: Para la iconografía vectorial (SVG) de las Unidades de Control, Unidades de Procesamiento y la Memoria de Datos.

## Bibliografía Consultada

La información teórica, los ejemplos y las descripciones precisas presentadas a lo largo de esta infografía interactiva tienen como fundamento la siguiente literatura académica:

* **Stallings, W. (2006)**. *Organización y arquitectura de computadores*. 7ª Edición. Prentice Hall.
* **Patterson, D. A. & Hennessy, J. L. (2011)**. *Estructura y diseño de computadores*. 4ª Edición. Editorial Reverté.

## Cómo ejecutar localmente

1. Sitúate en la carpeta del proyecto desde tu terminal:
   ```bash
   cd infogra-flynn
   ```
2. Instala las dependencias necesarias:
   ```bash
   npm install
   ```
3. Inicia el servidor local de desarrollo:
   ```bash
   npm run dev
   ```
4. Abre la dirección local que arroja la consola (normalmente `http://localhost:5173`) en tu navegador web.
