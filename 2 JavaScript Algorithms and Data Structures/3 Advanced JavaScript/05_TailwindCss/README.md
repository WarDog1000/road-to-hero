### Install
```
npm init -y
npm i tailwindcss
```

### Calls
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Initialize
```
npx tailwindcss init
```

### Build
```
npx tailwindcss build src/tailwind.css -o css/estyles.css
```

### Production
```
npm i win-node-env
NODE_ENV=production postcss .src/tailwind.css -o css/styles.css
```