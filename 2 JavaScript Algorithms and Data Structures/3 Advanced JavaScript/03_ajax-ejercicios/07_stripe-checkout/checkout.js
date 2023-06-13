import STRIPE_KEYS from "http://localhost/road-to-hero/2%20JavaScript%20Algorithms%20and%20Data%20Structures/3%20Advanced%20JavaScript/03_ajax-ejercicios/07_stripe-checkout/keys.js"

const log = arg => {
  console.log(arg)
}

// log(STRIPE_KEYS)

const products =  document.getElementById('productos'),
description = document.getElementById('description').content,
fragment = document.createDocumentFragment(),
product = document.getElementById('product')

fetch("https://api.stripe.com/v1/products", {
  headers: {
    Authorization: `Bearer ${STRIPE_KEYS.secret}`
  }
})
.then( res => res.json() )
.then( json => log(json) )