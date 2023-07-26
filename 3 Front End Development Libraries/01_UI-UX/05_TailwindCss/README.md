### Install Using PostCSS
```
npm init -y
npm install -D tailwindcss postcss autoprefixer
```
### Initialize
```
npx tailwindcss init
```

### Config

Add Tailwind to your PostCSS configuration

Add tailwindcss and autoprefixer to your postcss.config.js file, or wherever PostCSS is configured in your project.

```
npx tailwindcss init -p
```

postcss.config.js
```
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```

Configure your template paths

Add the paths to all of your template files in your tailwind.config.js file.

tailwindcss.config.js
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add the Tailwind directives to your CSS

Add the @tailwind directives for each of Tailwind’s layers to your main CSS file.

dist/output.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```


### Build
```
npx tailwindcss -i ./src/main.css -o ./dist/styles.css --watch
```

