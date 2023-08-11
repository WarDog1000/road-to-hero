import { useState, useEffect } from 'react';
import {useFetch} from './hooks/useFetch';

export default function CustomHooks() {
  const url = "https://pokeapi.co/api/v2/pokemon/"
  const { data, isPending, error } = useFetch(url)
  // En React, cada vez que un componente se renderiza, todas las expresiones en el cuerpo del componente se vuelven a evaluar, y en este caso, estás llamando a useFetch(url) directamente en el cuerpo del componente, lo que lleva a múltiples invocaciones del hook.
  // Para solucionar este problema, debes llamar a tu hook personalizado dentro de la función de renderizado condicionalmente (por ejemplo, dentro de un efecto) para asegurarte de que solo se ejecute una vez cuando el componente se monta
  return(
    <>
      <h2>Hooks Personalizados</h2>
      <h3>Pending: <mark>{JSON.stringify(isPending)}</mark></h3>
      <h3>Status: <mark>{JSON.stringify(error.status)}</mark></h3>
      <h3>Data: {JSON.stringify(data.results[0])}</h3>
    </>
  )
}