import React, { useState } from "react";
import TableForm from "./TableForm";
import Table from "./Table";

function Tarea2() {
    const [db, setDb] = useState([]);

  const [toEdit, setToEdit] = useState(null);

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
      {/* TABLE */}
      <Table data ={db}
        setToEdit={setToEdit}
       deleteData={deleteData}
       />
    </>
  );
}

export default Tarea2;
