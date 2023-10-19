function TableRow({el, setToEdit, deleteData}) {
  let {name, type, id} = el;
  return (
    <div>
      <tr>
        <td>{name}</td>
        <td>{type}</td>
        <td>
          <button onClick={e => setToEdit(el)}>Editar</button>
          <button onClick={ e => deleteData(id)}>Eliminar</button>
        </td>
      </tr>
    </div>
  );
}

export default TableRow;
