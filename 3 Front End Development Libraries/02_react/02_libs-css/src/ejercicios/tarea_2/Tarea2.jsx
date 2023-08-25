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
    data.id = Date.now()
    setDb([...db, data])
  };

  const updateData = (data) => {
    let newData = db.map(el => el.id === data.id ? data : el);
    setDb(newData)
  };

  const deleteData = (id) => {
    // comfirm flag
    let isDelete = window.confirm(`??estas seguro de eliminar el id ${id}.`)

    if(isDelete) {
      let newData = db.filter(el => el.id !== id)
      setDb(newData);
    } else {
      return;
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
