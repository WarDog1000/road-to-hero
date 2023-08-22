import React from "react";

function TableRow({el}) {
  return (
    <div>
      <tr>
        <td>{el.name}</td>
        <td>{el.type}</td>
        <td>
          <button>Editar</button>
          <button>Eliminar</button>
        </td>
      </tr>
    </div>
  );
}

export default TableRow;
