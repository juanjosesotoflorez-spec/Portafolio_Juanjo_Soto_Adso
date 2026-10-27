
# 🚀 Portafolio Web Interactivo con React.js y Bootstrap

Proyecto desarrollado como parte del programa **Análisis y Desarrollo de Software (ADSO)** del SENA Pedregal. Consiste en la creación de una página web de portafolio personal moderna, modular y completamente responsiva, construida mediante la descomposición de componentes reutilizables en **React.js** y estilizada con **Bootstrap**

---

## 🔗 Enlaces y Visualización del Proyecto

- **Repositorio en GitHub:** [https://github.com/juanjosesotoflorez-spec/Portafolio_Juanjo_Soto_Adso](https://github.com/juanjosesotoflorez-spec/Portafolio_Juanjo_Soto_Adso)
- **Despliegue / Demo en Vivo:** https://juanjosesotoflorez-spec.github.io/Portafolio_Juanjo_Soto_Adso/

---

## 📋 Características y Funcionalidades

- **Diseño Responsivo:** Adaptado a dispositivos móviles, tablets y escritorio mediante el sistema de Grid (`Row`, `Col`) y componentes de Bootstrap.
- **Arquitectura Modular en React:** Dividida en componentes funcionales independientes para facilitar el mantenimiento y reutilización de código.
- **Secciones Desarrolladas:**
  * **Header / Navegación:** Barra superior interactiva estilizada con la clase o componente `Navbar`.
  * **Acerca de Mí (About Me):** Introducción personal con soporte para avatar y descripción profesional.
  * **Habilidades (SkillsSection & SkillCard):** Cuadrícula de tarjetas con experiencia en tecnologías web.
  * **Proyectos (ProjectsSection):** Exhibición de proyectos desarrollados.
  * **Recomendaciones (RecommendationsSection):** Muestra de testimonios recibidos.
  * **Formulario de Recomendaciones / Contacto (ContactForm):** Permite al usuario enviar nuevas recomendaciones.
  * **Persistencia de Datos (LocalStorage):** Las recomendaciones enviadas se guardan en el almacenamiento local del navegador para no borrarse al refrescar la página.
  * **Botón ScrollToTop:** Botón flotante para regresar rápidamente a la parte superior de la página.

---

## 🛠️ Tecnologías Utilizadas

- **React.js** (Componentes funcionales, `useState`, `useEffect`, Props)
- **Bootstrap 5** & **React-Bootstrap** (Estilizado, Grid system, Cards, Forms)
- **Bootstrap Icons**
- **JavaScript (ES6+)**
- **HTML5 / CSS3**
- **Vite / Node.js & npm**

---

## 📁 Estructura del Proyecto

```text
src/
├── componentes/
│   ├── AboutMe.jsx
│   ├── ContactForm.jsx
│   ├── Header.jsx
│   ├── ProjectsSection.jsx
│   ├── RecommendationsSection.jsx
│   ├── ScrollToTop.jsx
│   └── SkillsSection.jsx
├── App.jsx
├── main.jsx
└── index.css

```

---

## 💻 Instalación y Configuración Local

Si deseas clonar y ejecutar este proyecto en tu entorno local:

1. **Clonar el repositorio:**

```bash
git clone [https://github.com/juanjosesotoflorez-spec/Portafolio_Juanjo_Soto_Adso.git](https://github.com/juanjosesotoflorez-spec/Portafolio_Juanjo_Soto_Adso.git)

```

2. **Navegar al directorio del proyecto:**

```bash
cd Portafolio_Juanjo_Soto_Adso

```

3. **Instalar las dependencias:**

```bash
npm install

```

4. **Iniciar el servidor de desarrollo:**

```bash
npm run dev

```

5. Abrir la dirección local (por ejemplo, `http://localhost:5173`) en tu navegador.

---

## 👤 Autor

* **Juan José Soto Flórez**
* Programa: Técnico / Tecnólogo en Análisis y Desarrollo de Software (ADSO) — SENA
* Ubicación: Medellín, Colombia 🇨🇴

