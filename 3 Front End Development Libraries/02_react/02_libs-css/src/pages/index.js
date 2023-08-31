import * as React from "react"
import Container from "../components/Container.jsx"

// Import our custom CSS
import '../scss/styles.scss'

// or, specify which plugins you need:
// import { Tooltip, Toast, Popover } from 'bootstrap';

// Fuentes web de Google para Material UI
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default () => {
  return (
    <>
      <Container>
        <h1>Hello Home</h1>
      </Container>
    </>
  )
}

export const Head = () => <title>Home</title>
