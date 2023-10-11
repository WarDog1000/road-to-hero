import React from 'react'
import { useForm } from '../hooks/useForm';
const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: ""
}; // valor inicial del formulario

const validateForm = (form) => {
  let errors = {}; // crea un objeto de errores
  let regexName = /^[A-Za-z\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  // si no se escribe nada en el input de "nombre"
  if(!form.name.trim()) {
    errors.name = "Name is required"; // crea un error { name: "Name is required"}
  } else if(!regexName.test(form.name.trim())) {
    errors.name = "Name only letters required";
  }
  // si no se escribe nada en el input de "email"
  if(!form.email.trim()) {
    errors.email = "Email is required"; // crea un error { email: "Email is required"}
  } else if(!regexEmail.test(form.email.trim())) {
    errors.email = "Valid email is required";
  }
  // si no se escribe nada en el input de "subject"
  if(!form.subject.trim()) {
    errors.subject = "Subject is required"; // crea un error { subject: "Subject is required"}
  }
  // si no se escribe nada en el input de "email"
  if(!form.comments.trim()) {
    errors.comments = "Comments is required"; // crea un error { comments: "Comments is required"}
  } else if(!regexComments.test(form.comments.trim())) {
    errors.comments = "Comments should be no more than 255 letters";
  }

  return errors;           
}; // funcion para validar el formulario

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

const errorStyles = {
  fontWeight: "bold",
  color: "dc3545"
}

function ContactForm() {
  // guarda la des-tructuracion del objeto de datos proveniente de hooks/useForm
  const {form, error, loading, res, handleChange, handleBlur, handleSubmit} = useForm(initialForm, validateForm);
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
          {error.name && <p style={errorStyles}>{error.name}</p>}
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
          {error.email && <p style={errorStyles}>{error.email}</p>}
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
          {error.subject && <p style={errorStyles}>{error.subject}</p>}
        <textarea 
          style={inputStyles}
          name="comments"
          value={form.comments}
          cols="50"
          rows="5" 
          placeholder="escribe tu comentario" 
          onChange={handleChange} onBlur={handleBlur} >
        </textarea>
            {error.comments && <p style={errorStyles}>{error.comments}</p>}
        <input type="submit" value="Enviar" />
      </form>
      {loading && <p>Enviando...</p>}
      {res && (<p>E-mail was sent</p>)}
    </>
  );
}

export default ContactForm;