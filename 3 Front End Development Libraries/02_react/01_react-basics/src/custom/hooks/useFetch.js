import { useState, useEffect } from 'react';
export const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)
  
  useEffect(() => {getData()}, [url])

  const getData = async () => { // Hace la peticion al pokeAPI
    try {
      const res = await fetch(url)
      if(!res.ok) throw { err: true, status: res.status, statusText: !res.statusText ? "Ocurrio un error" : res.statusText}
      const json = await res.json()
      setIsPending(false) // set is pending(false) when request is completed
      setData(json) // set data to pending request data when request is completed
      setError({err: false, status: res.status}) // set error status to pending request data when request is completed
      
    } catch (err) {
      // console.error("Error fetching data: ", err)
      setIsPending(true) // set is pending(true) when request is not completed
      setError(err) // set error from thrown exception
    }
  }


  return({data, isPending, error})
}