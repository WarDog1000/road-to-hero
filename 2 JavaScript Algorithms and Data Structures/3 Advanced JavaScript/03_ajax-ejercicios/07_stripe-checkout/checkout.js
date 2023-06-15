import STRIPE_KEYS from "http://localhost/road-to-hero/2%20JavaScript%20Algorithms%20and%20Data%20Structures/3%20Advanced%20JavaScript/03_ajax-ejercicios/07_stripe-checkout/keys.js"

const log = arg => console.log(arg)
const 
section =  document.getElementById('section'),
template = document.getElementById('template').content,
figure = document.getElementById('figure'),
fragment = document.createDocumentFragment(),
options = {
  headers: {
    Authorization: `Bearer ${STRIPE_KEYS.secret}`
  }
}

let prices, products

Promise.all([
  fetch("https://api.stripe.com/v1/products", options),
  fetch("https://api.stripe.com/v1/prices", options)
])
.then( responses => Promise.all(responses.map( res => res.json() )))
.then( json => {
  // log(json)
  products = json[0].data
  prices = json[1].data
  prices.forEach(el => {
    let productData = products.filter(prod => prod.id === el.product)
    // log(productData)
    template.querySelector(".figure").setAttribute("data-price", el.id)
    template.querySelector("img").src = productData[0].images[0]
    template.querySelector("img").alt = productData[0].name
    template.querySelector("figcaption").innerHTML = `${productData[0].name}<br>
    ${el.unit_amount_decimal} ${el.currency}`

    let clone = document.importNode(template, true)
    fragment.appendChild(clone)
  })
  section.appendChild(fragment)
  })
.catch( err => {
  log(err)
  let message = err.statusText || "Ocurrio un error al conectarse con la API de Stripe"
  section.innerHTML = `<p>Error ${err.status}: ${message}</p>`
})

// fetch("https://api.stripe.com/v1/products", {
//   headers: { Authorization: `Bearer ${STRIPE_KEYS.secret}` }
// })
// .then( res => res.json() )
// .then( json => log(json) )