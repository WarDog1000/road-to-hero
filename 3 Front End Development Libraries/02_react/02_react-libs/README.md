<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby Minimal Starter
</h1>

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the minimal starter.

    ```shell
    # create a new Gatsby site using the minimal starter
    npm init gatsby
    # or
    npx create-gatsby my-gatsby-app
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-gatsby-site/
    npm run dev
    ```

    **Solucion de errores**
    
    A la hora de compilar, Gatsby puede presentar errores debido a la memoria cache cuando se eliminan componentes, una buena salucion es limpiar la cache.

    ```
    "scripts": {
    "cdev": "gatsby clean && gatsby develop",
    "cbuild": "gatsby clean && gatsby build",
    },
    ```


3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.js` to see your site update in real-time!

## Frameworks Css para React

- `Material UI` [MUI](https://mui.com/material-ui/getting-started/installation/)
- React-Bootstrap
- Boostrap
- Bulma
- Sass
- Tailwindcss


### Plugins

### JSX

```
npm i gatsby-plugin-provide-react
```

### Sass

```
npm install sass gatsby-plugin-sass
```


## Cómo utilizar
Agregue el complemento a su archivo `gatsby-config.js.`

```
module.exports = {
  plugins: [
    `gatsby-plugin-provide-react`,
    `gatsby-plugin-provide-react`
  ]
}
```

- `placeimg.com` dejo de funcionar el 30/07/23
puede usar en su lugar [loremipsum.io](https://loremipsum.io/)

- Convertir `html` a `jsx` [HTML to JSX](https://transform.tools/html-to-jsx)

- Loaders gratis para descargar y utilizar [loading.io](https://loading.io/)


1.  **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    - [Tutorials](https://www.gatsbyjs.com/docs/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    - [Guides](https://www.gatsbyjs.com/docs/how-to/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

## 🚀 Quick start (Netlify)

Deploy this starter with one click on [Netlify](https://app.netlify.com/signup):

[<img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify" />](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-minimal)
