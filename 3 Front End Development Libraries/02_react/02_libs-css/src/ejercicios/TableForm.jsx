import React, {useState} from 'react'
const initialForm = {
  "id": null,
  "name": "",
  "type": "",
  "desc": "",
};
export default function TableForm({createData, updateData, toEdit, setToEdit}) {
  const [form, setForm] = useState(initialForm);
    // Handlers
    const handleChange = (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      })
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      if(!form.name || !form.type) {
        alert("datos incompletos")
        return
      }

      if(form.id === null) {
        createData(form)
      } else {
        updateData(form)
      }
      // Tambien se ejecuta al mandar y al limpiar el formulario
      handleReset()
    }

    const handleReset = (e) => {
      setForm(initialForm)
      setToEdit(null)
    }

  return (
    <div>
      <form onSubmit={handleSubmit} >
      <input type="text" name="name" placeholder="Agregar Nombre" onChange={handleChange} value={form.name}/>
      <input type="text" name="type" placeholder="Agregar Tipo" onChange={handleChange} value={form.type}/>
      <input type="submit" value="Enviar" />
      <input type="reset" value="Limpiar" onClick={handleReset} />
    </form>
    </div>
  )
}
