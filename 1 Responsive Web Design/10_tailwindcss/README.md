# Tailwindcss

## Instalacion

### CLI 

> Terminal 

```bash
npm init -y
npm install -D tailwindcss
npx tailwindcss init
```

> `/tailwind.config.js`

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

> `src/input.css`

```javascript
@tailwind base;
@tailwind components;
@tailwind utilities;
```

> `/package.json`

```json
"scripts": {
    "dev": "npx tailwindcss -i ./src/input.css -o ./src/output.css --watch"
  },
```

> `/src/index.html`

```html
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="./output.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```

## Intellisense

Extencion de VsCode para tener guias de tipado con las clases de Tailwincss