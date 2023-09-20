import React from 'react'
import { useForm } from '../hooks/useForm';
const initialForm = {}; // valor inicial del formulario
const validateForm = (form) => {}; // funcion para validar el formulario

function ContactForm() {
  // guarda la des-tructuracion del objeto de datos proveniente de hooks/useForm
  const {form, errloading, res, handleChange, handleBlur, handleSubmit} = useForm(initialForm, validateForm);
  return (
    <>
      <h2>contact Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          placeholder = "escribe tu nombre"
          onChange={handleChange}
          onBlur={handleBlur}
          required
            />
        <input
          type="email"
          name="email"
          value={form.email}
          placeholder = "escribe tu email"
          onChange={handleChange}
          onBlur={handleBlur}
          required
            />
        <input
          type="text"
          name="subject"
          value={form.subject}
          placeholder = "asunto a tratar"
          onChange={handleChange}
          onBlur={handleBlur}
          required
            />
        <textarea name="comments" cols="50" rows="5" placeholder="escribe tu comentario" onChange={handleChange} onBlur={handleBlur} value={form.comments} ></textarea>
        <input type="submit" value="Enviar" />
      </form>
    </>
  );
}

export default ContactForm;