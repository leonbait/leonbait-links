# Leonbait — Links

Página de enlaces estilo "link in bio" para streamer / creador de contenido.

## Archivos
- `index.html` → estructura
- `styles.css` → diseño responsive
- `script.js` → links y año automático
- `assets/background.png` → fondo enviado por el usuario
- `assets/profile-placeholder.svg` → avatar provisional

## Cómo poner tus links
Abre `script.js` y cambia los valores del objeto `LINKS`.

Ejemplo:
```js
const LINKS = {
  twitch: "https://www.twitch.tv/leonbait",
  youtube: "https://www.youtube.com/@leonbait",
  instagram: "https://www.instagram.com/byleonbait",
  facebook: "https://www.facebook.com/TU_USUARIO",
  tiktok: "https://www.tiktok.com/@TU_USUARIO",
  x: "https://x.com/TU_USUARIO"
};
```

## Cómo poner tu foto
Cambia en `index.html`:
```html
src="assets/profile-placeholder.svg"
```
por:
```html
src="assets/profile.jpg"
```

Luego coloca tu foto en `assets/profile.jpg`.

La página funciona como sitio estático: se puede alojar en GitHub Pages, Netlify, Vercel, Firebase Hosting, etc.
