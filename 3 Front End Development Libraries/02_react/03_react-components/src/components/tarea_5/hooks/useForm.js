import React, { useState, useEffect } from 'react';
import { helpHttp } from '../helpers/helpHttp';

export function useForm(iniForm, validateForm) {
  const [form, setForm] = useState(iniForm);
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState(null);

  // donde ocuurre un cambio en el elemento
  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({
      ...form,
      [name]: value
    })
  }
  
  // donde se pierde el foco de un elemento
  const handleBlur = (e) => {
     handleChange(e);
     setError(validateForm(form)) // recibe las propriedades del form y actualiza la variable de "error"
  }

  // cuando se envia un formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validateForm(form));

    // valida que el objeto de errro viene vacio
    if(Object.keys(error).length === 0) {
      alert("Enviando Formulario");
      setLoading(true);
      helpHttp()
      .post(`https://formsubmit.co/ajax/jhonatansouzameza100@gmail.com`, {
        body: form,
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      })
      .then((res) => {
        setLoading(false);
        setRes(true);
        setForm(iniForm);
        setTimeout(() => {
          setRes(false);
        }, 3000);
      });
    } else { return; }
  }

  return {form, error, loading, res, handleBlur, handleChange, handleSubmit};
}