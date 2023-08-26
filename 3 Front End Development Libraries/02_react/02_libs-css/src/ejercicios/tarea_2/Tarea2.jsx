import React, { useEffect, useState } from "react";
import TableForm from "./TableForm";
import Table from "./Table";
import { helpHttp } from "./helpers/helpHttp";
import Message from "./components/Message";
import Loader from "./components/Loader";

function Tarea2() {
  const [db, setDb] = useState(null);
  const [toEdit, setToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = "http://localhost:8001/santos";

  useEffect(() => {
    setLoading(true)
    api.get(url).then((res) => {
      if(!res.err) {
        setDb(res);
        setError(null)
      } else {
        setDb(null);
        setError(res)
      }

      setLoading(false)
    });
  }, [url])
  

  const createData = (data) => {
    // agrega un id basado en la fecha para el nuevo elemento
    data.id = Date.now()
    let options = {
      body: data,
      headers: {"content-type": "application/json"}
    }

    api.post(url, options)
    .then((res) => {
      console.log(res)
      if(!res.err) {
        setDb([...db, res])
      } else {
        setError(res)
      }
    } )
    // setDb([...db, data])
  };

  const updateData = (data) => {
    let enpoint = `${url}/${data.id}`;
    let options = {
      body: data,
      headers: {"content-type": "application/json"}
    }
    api.put(enpoint, options).then( (res) => {
      if(!res.err) {
        let newData = db.map(el => el.id === data.id ? data : el);
        setDb(newData)
      } else {
        setError(res);
      }
    })

    // let newData = db.map(el => el.id === data.id ? data : el);
    // setDb(newData)
  };

  const deleteData = (id) => {
    // comfirm flag
    let isDelete = window.confirm(`??estas seguro de eliminar el id ${id}.`)
    let endpoint = `${url}/${id}`;
    let options = {
      // body: data, No requiere un cuerpo
      headers: {"content-type": "application/json"}
    }

    if(isDelete) {
      api.del(endpoint, options).then( (res) => {
        if(!res.err) {
          let newData = db.filter(el => el.id !== id)
          setDb(newData);
        } else {
          setError(res)
        }
      }) 
      // let newData = db.filter(el => el.id !== id)
      // setDb(newData);
    } else {
      return
    }
  };

  return (
    <>
      <h4>CRUD Fake API</h4>
      <br />
      {/* FORM */}
      <TableForm
        createData={createData}
        updateData={updateData}
        toEdit={toEdit}
        setToEdit={setToEdit}
      />
      <br />
      {/* estos elementos solo se renderisan si la condicion se cumple como true */}
      {loading && <Loader />}
      {error && <Message msg={`Error: ${error.status} ${error.statusText}`} bgColor="#0dc3545" />}
      {/* TABLE */}
      {db && <Table data ={db}
        setToEdit={setToEdit}
       deleteData={deleteData}
       />}

    </>
  );
}

export default Tarea2;
