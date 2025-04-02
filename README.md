# 🗂️ Overview to https://hunterstevenshaw.com/

[![My Skills](https://skillicons.dev/icons?i=vscode,windows,apple)](https://skillicons.dev)

## 🌐 **Portfolio Website**

This repository contains the source code for the development of [hunterstevenshaw.com](https://hunterstevenshaw.com/); my portfolio, built using _npm create vite@latest_ which is the last method for developing within the _ReactJS_ eco-system. My choosen tech stack is designed for simplicity, performance, and ease of content management for future development and maintenance.

## 🛠️ **Tech Stack Overview**

[![My Skills](https://skillicons.dev/icons?i=html,css,js,typescript)](https://skillicons.dev)

[![My Skills](https://skillicons.dev/icons?i=react,sass,vite,mongodb)](https://skillicons.dev)

[![My Skills](https://skillicons.dev/icons?i=netlify)](https://skillicons.dev)

### 📘 **Frontend**

- **ReactJS w/ TypeScript**: For building a dynamic, responsive, and component-based UI.

- **SASS/SCSS**: For custom styling with ease, maintaining a consistent and clean design throughout the website.

### 📖 **Backend & Content Management**

- **Google Firebase**: Storing images, email addresses, and other critical data as structured records.

## ❓ **Why This Tech Stack?**

### ** ReactJS w/ TS & SASS**

- Ensures modular and reusable code components for easy future updates.

- Tailwind CSS integrates seamlessly into React components, reducing the need for external CSS files and ensuring a unified design.

- No more routing/linking errors for stylesheets; simply a code all-in-one solution for maintaining and updating codebase.

<!-- ### **4. Simplified CSR Workflow**

- Combines Client-Side Rendering (CSR) with Firebase for a fast and lightweight website.

- Avoids the complexity of Server-Side Rendering (SSR), keeping costs and management overhead low, suitable for my portfolio.

- Avoids high upkeep/costs for Server-Side Rending (SSR), which is over-kill for a portfolio. -->

# 📁 Overview to Project Setup

### **Prerequisites**

- Node.js and npm installed.

- Create a React App _with_ Vite.

- Using this article, [freecodecamp.org](https://www.freecodecamp.org/news/how-to-create-a-react-app-in-2024/#:~:text=Create%20React%20App%20has%20been,new%20React%20project%20in%202024.).

### Node Packages Installed (npm)

- `npm i react-simple-typewriter` (https://www.npmjs.com/package/react-simple-typewriter)
- `npm i -D sass-embedded` (https://www.npmjs.com/package/sass-embedded)

### References

- https://meyerweb.com/eric/tools/css/reset/

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```

### 🐛 **Issues/Bugs**
