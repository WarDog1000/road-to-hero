import React, { useState, useEffect } from 'react';

export function useForm(iniForm, validateForm) {
  const [form, setForm] = useState(iniForm);
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState(null);

  // donde ocuurre un cambio en el elemento
  const handleChange = (e) => {
    const {name, value} = e.target
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
  const handleSubmit = (e) => {}

  return {form, error, loading, res, handleBlur, handleChange, handleSubmit};
}