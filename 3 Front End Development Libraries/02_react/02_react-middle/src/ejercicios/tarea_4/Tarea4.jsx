import React, { useState } from "react";
import Selects from "./components/Selects";

const Tarea4 = () => {
  const [country, setCountry] = useState("");
  // const [state, setState] = useState("");
  const [capital, setCapital] = useState("");
  let url = "https://countryapi.io/api";
  return (
    <>
      <h2>Selects Anidados</h2>
      <Selects title="country" url={`${url}/all`} handleChange={(e) => {setCountry(e.target.value)}} />
      {/* {country &&  <Selects title="state" url={`${url}/name/${country}`} handleChange={(e) => {setState(e.target.value)}} />} */}
      {country && <Selects title="capital" url={`${url}/name/${country}`} handleChange={(e) => {setCapital(e.target.value)}} />}
      <pre>
        {capital &&
        <code>
          {country} - {capital}
        </code>
        }
      </pre>
    </>
  );
};

export default Tarea4;
