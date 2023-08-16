import { useState } from 'react';
export default function Formulario() {
  // const [nombre, setNombre] = useState("")
  // const [sabor, setSabor] = useState("")
  // const [lenguaje, setLenguaje] = useState("")
  // const [terminos, setTerminos] = useState(false)
  // const handleSubmit = e => {
  //   e.preventDefault()
  //   alert("El formulario se ha enviado")
  // }
  // return(
  //   <>
  //   <h2>Formulario</h2>
  //   <form onSubmit={handleSubmit} >
  //     <label htmlFor="nombre">Nombre</label>
  //     <input type="text" id="nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
  //     <p>Elije tu sabor js favorito</p>
  //     <input defaultChecked type="radio" id="vanilla" name="sabor" value="vanilla" onChange={ e => setSabor(e.target.value)} />
  //     <label htmlFor="vanilla">Vanilla</label>
  //     <input type="radio" id="react" name="sabor" value="react" onChange={(e) => setSabor(e.target.value)} />
  //     <label htmlFor="react">React</label>
  //     <input type="radio" id="angular" name="sabor" value="angular" onChange={(e) => setSabor(e.target.value)} />
  //     <label htmlFor="angular">Angular</label>
  //     <input type="radio" id="vue" name="sabor" value="vue" onChange={(e)=> setSabor(e.target.value)} />
  //     <label htmlFor="vue">Vue</label>
  //     <input type="radio" id="svelte" name="sabor" value="svelte" onChange={(e) => setSabor(e.target.value)} />
  //     <label htmlFor="svelte">Svelte</label>

  //     <p>Elije tu lenguaje de programacion favorito</p>
  //     <select defaultValue="" name="lenguaje" onChange={e => setLenguaje(e.target.value)}>
  //       <option value="">---</option>
  //       <option value="js">JavaScript</option>
  //       <option value="php">PHP</option>
  //       <option value="py">Python</option>
  //       <option value="rb">Ruby</option>
  //       <option value="go">GO</option>
  //     </select>
  //     <br />
  //     <label htmlFor="terminos">Acepto terminos y condiciones</label>
  //     <input type="checkbox" name="terminos" id="terminos" onChange={(e) => setTerminos(e.target.checked)} />
  //   </form>
  //   </>
  // )

  const [form, setForm] = useState({})
  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const handleChecked = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked
    })
  }
  const handleSubmit = e => {
      e.preventDefault()
      alert("El formulario se ha enviado")
  }
  return(
    <>
    <h2>Formulario</h2>
    <form onSubmit={handleSubmit} >
      <label htmlFor="nombre">Nombre</label>
      <input type="text" id="nombre" name="nombre" value={form.nombre} onChange={handleChange} />
      <p>Elije tu sabor js favorito</p>
       <input defaultChecked type="radio" id="vanilla" name="sabor" value="vanilla" onChange={handleChange} />
       <label htmlFor="vanilla">Vanilla</label>
       <input type="radio" id="react" name="sabor" value="react" onChange={handleChange} />
       <label htmlFor="react">React</label>
       <input type="radio" id="angular" name="sabor" value="angular" onChange={handleChange} />
       <label htmlFor="angular">Angular</label>
       <input type="radio" id="vue" name="sabor" value="vue" onChange={handleChange} />
       <label htmlFor="vue">Vue</label>
       <input type="radio" id="svelte" name="sabor" value="svelte" onChange={handleChange} />
       <label htmlFor="svelte">Svelte</label>
       <p>Elije tu lenguaje de programacion favorito</p>
       <select defaultValue="" name="lenguaje" onChange={handleChange}>
         <option value="">---</option>
         <option value="js">JavaScript</option>
         <option value="php">PHP</option>
         <option value="py">Python</option>
         <option value="rb">Ruby</option>
         <option value="go">GO</option>
       </select>
       <br />
       <label htmlFor="terminos">Acepto terminos y condiciones</label>
       <input type="checkbox" name="terminos" id="terminos" onChange={handleChecked} />
     </form>
    </>
  )
}
