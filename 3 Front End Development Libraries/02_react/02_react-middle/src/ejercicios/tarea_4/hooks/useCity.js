import React, { useState, useEffect } from 'react';

export const useCity = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal();

    const fecthData =  async () => {
      setLoading(true);
      try {
        const res = await fecth(url);
        if(!res.ok) {
          let err = new Error("Error en la peticion 'fetch'");
          err.status = res.status || "00";
        }
      } catch (error) {
        
      }
    };

    fecthData();

    return () => abortController.abort();

  }, [url]);

  return {data, error, loading};
}
