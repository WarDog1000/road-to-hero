import api from './helpers/wp_api.js';
import { ajax }  from './helpers/ajax.js';
import { Title } from './components/Title.js';
import { Loader } from './components/Loader.js';

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

  const d =document,
        $root = d.getElementById("root")

  $root.appendChild(Title())
  $root.appendChild(Loader())

  // ERRROR DE URL 404 NOT FOUND TEST
  ajax({
    url: 'no-valida',
    cbSuccess: () => {}
  })
}
