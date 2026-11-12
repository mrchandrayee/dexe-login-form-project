# DEXE Login Form

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/dexe-login-form-project/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

Responsive HTML/CSS/JavaScript recreation of the login screen shown in the supplied video.

## Run locally

No dependencies or build step are required.

```bash
cd dexe-login-form
python -m http.server 8000
```

Open http://localhost:8000 in your browser. You can also open `index.html` directly.

## Project files

- `index.html` — semantic login form markup and inline SVG icons
- `style.css` — responsive glassmorphism styling, background orbs, shadows and layout
- `script.js` — password visibility, client-side validation and demo interactions

## Functionality note

This is a front-end recreation. Login validation is client-side only; it does not authenticate users or store credentials. Forgot password, account creation and social sign-in buttons provide demo feedback. Connect a secure backend and OAuth providers before production use.

## Source extraction note

The video shows the rendered page and interaction, not a legible source-code editor. The implementation is reconstructed from the visible UI and behavior, not claimed to be the original creator's exact source.
