import React from 'react'
import { useForm } from '../hooks/useForm';
const initialForm = {
  name: "",
  email: "",
  subject: "",
  comment: ""
}; // valor inicial del formulario

const validateForm = (form) => {
  let errors = {};
  if(!form.name. trim()) {
    errors.name = "Name is required";
  }
}; // funcion para validar el formulario

function ContactForm() {
  // guarda la des-tructuracion del objeto de datos proveniente de hooks/useForm
  const {form, errloading, res, handleChange, handleBlur, handleSubmit} = useForm(initialForm, validateForm);

  const inputStyles = {
    border: "thin solid #dedede",
    borderRadius: "0.25rem",
    padding: "0.75rem",
    marginBottom: "1rem",
    outline: "none",
    display: "block",
    width: "100%",
    fontSize: "1rem",
    lineHeight: 1,
    backgroundColor: "transpartent",
    fontFamily: "inherit", resize: "none" 
  }
  
  return (
    <>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          style={inputStyles}
          name="name"
          value={form.name}
          placeholder = "escribe tu nombre"
          onChange={handleChange}
          onBlur={handleBlur}
          required
          />
        <input
          type="email"
          style={inputStyles}
          name="email"
          value={form.email}
          placeholder = "escribe tu email"
          onChange={handleChange}
          onBlur={handleBlur}
          required
          />
        <input
          type="text"
          style={inputStyles}
          name="subject"
          value={form.subject}
          placeholder = "asunto a tratar"
          onChange={handleChange}
          onBlur={handleBlur}
          required
            />
        <textarea 
          style={inputStyles}
          name="comments"
          value={form.comments}
          cols="50"
          rows="5" 
          placeholder="escribe tu comentario" 
          onChange={handleChange} onBlur={handleBlur} >
        </textarea>
        <input type="submit" value="Enviar" />
      </form>
    </>
  );
}

export default ContactForm;