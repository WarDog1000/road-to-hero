import { useEffect, useReducer, useState } from "react";
import { CrudReducers, crudInitialState } from "./reducers/crud.reducers";
import { TYPES } from "./actions/crud.actions";
import TableForm from "./TableForm";
import Table from "./Table";
import { helpHttp } from "./helpers/helpHttp";
import Message from "./components/Message";
import Loader from "./components/Loader";

function Crud() {
  // const [db, setDb] = useState(null);
  const [state, dispatch] = useReducer(CrudReducers, crudInitialState)
  const {db} = state;
  const [toEdit, setToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = "http://localhost:5000/santos";

  useEffect(() => {
    setLoading(true)
    api.get(url).then((res) => {
      if(!res.err) {
        // setDb(res);
        dispatch({type:TYPES.READ_ALL_DATA, payload: res})
        setError(null)
      } else {
        // setDb(null);
        dispatch({type:TYPES.NO_DATA})
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
        // setDb([...db, res])
        dispatch({type:TYPES.CREATE_DATA, payload: res})
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
        // let newData = db.map(el => el.id === data.id ? data : el);
        // setDb(newData)
        dispatch({type: TYPES.UPDATE_DATA, payload: data})
      } else {
        setError(res);
      }
    })
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
          // let newData = db.filter(el => el.id !== id)
          // setDb(newData);
          dispatch({type: TYPES.DELETE_DATA, payload: id})
        } else {
          setError(res)
        }
      }) 
    } else { return }
  };

  return (
    <div style={{textAlign: "center"}}>
      <h2>CRUD Fake API</h2>
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

    </div>
  );
}

export default Crud;
