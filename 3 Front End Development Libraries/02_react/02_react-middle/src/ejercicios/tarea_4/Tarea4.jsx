import React, { useState } from "react";
import Selects from "./components/Selects";

const Tarea4 = () => {
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [suburb, setSuburb] = useState("");
  return (
    <>
      <h2>Selects Anidados</h2>
      <Selects title="estado" url="url" handleChange={(e) => {setState(e.target.value)}} />
      {state &&  <Selects title="town" url="url" handleChange={(e) => {setTown(e.target.value)}} />}
      {town && <Selects title="suburb" url="url" handleChange={(e) => {setSuburb(e.target.value)}} />}
      <pre>
        {suburb &&
        <code>
          {state} - {town} - {suburb}
        </code>
        }
      </pre>
    </>
  );
};

export default Tarea4;
