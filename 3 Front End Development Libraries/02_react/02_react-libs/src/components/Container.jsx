import React from 'react'
import Navigation from './Navigation'
import { BulmaFooter } from './Bulma'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

export default function Container({children}) {
  return(
    <>
      <Navigation />
      <div>{children}</div>
      <BulmaFooter />
    </>
  )
}
