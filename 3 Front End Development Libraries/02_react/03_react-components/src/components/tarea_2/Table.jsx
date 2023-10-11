import React from 'react'
import TableRow from './TableRow'

export default function Table({data, setToEdit, deleteData}) {
  return (
    <div>
      <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Tipo</th>
          <th>Descripcion</th>
        </tr>
      </thead>
      <tbody>
        {/* ROWS */}
        {data.length > 0 
        ? data.map( el => <TableRow key={el.id} el={el} setToEdit={setToEdit} deleteData={deleteData} />)
        : <tr>
            <td colSpan="3">sin datos..</td>
          </tr>
        }
      </tbody>
    </table>
    </div>
  )
}
