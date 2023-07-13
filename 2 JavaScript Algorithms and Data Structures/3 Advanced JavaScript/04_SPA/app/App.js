import { Header } from './components/Header.js';
import { Loader } from './components/Loader.js';
import { Main } from './components/Main.js';
import { Router } from './components/Router.js';

export function App() {
  // document.getElementById("root").innerHTML = `<h1>Bienvenido a mi primer componente con vanilla Js</h1>`
  // ajax({
  //   url: api.POSTS,
  //   cbSuccess: (posts) => {
  //     console.log(posts)
  //   }
  // })
  // ajax({
  //   url: api.CATEGORIES,
  //   cbSuccess: (categories) => console.log(categories)
  // })
  const $root = document.getElementById("root")

  $root.innerHTML = null
  $root.appendChild(Header())
  $root.appendChild(Main())
  $root.appendChild(Loader())

  Router()

  // ERRROR DE URL 404 NOT FOUND TEST
  // ajax({
  //   url: 'no-valida',
  //   cbSuccess: () => {}
  // })
}
