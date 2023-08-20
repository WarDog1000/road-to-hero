import React from 'react'
import Navigation from './Navigation'
// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// or, specify which plugins you need:
// import { Tooltip, Toast, Popover } from 'bootstrap';

export default function Container({children}) {
  return(
    <>
      <Navigation></Navigation>
      <div>{children}</div>
      <footer>Footer</footer>
    </>
  )
}
