import React from 'react'
import TableRow from './TableRow'

export default function Table({db}) {
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
        {db.length === 0 ? <tr><td colSpan="3">sin datos..</td></tr> : db.map( el => <TableRow key={el.id} el={el} />)}
      </tbody>
    </table>
    </div>
  )
}
