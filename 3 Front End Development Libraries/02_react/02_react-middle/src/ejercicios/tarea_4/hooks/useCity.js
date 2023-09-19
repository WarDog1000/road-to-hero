import React, { useState, useEffect } from 'react';

export const useCity = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController(); // para manejar los tiempos de respuestas del servidor
    const signal = abortController.signal;

    const fecthData =  async () => {
      setLoading(true);
      try {

        const res = await fetch(url);

        if(!res.ok) { // si la res falla, crea y lansa un "error"
          let err = new Error("Error en la peticion 'fetch'");
          err.status = res.status || "00";
          err.statusText =  res.statusText || "Ocurrio un error";
          throw err;
        }

        const json = await res.json();

        if(!signal.aborted) { // si no se ah abortado la peticion
          setData(json);
          setError(null);
        }
      } catch (error) {
        if(!signal.aborted) { // si no se ah abortado la peticion
          setData(null);
          setError(error);
        }
      } finally { // esta seccion se ejecutara independientemente de try/catch
        if(!signal.aborted) { // si no se ah abortado la peticion
          setLoading(false); // finalmente se quita el loading
          
        }
      }
    };

    fecthData();

    return () => abortController.abort();

  }, [url]);

  return {data, error, loading};
}
