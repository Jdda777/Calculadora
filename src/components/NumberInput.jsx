import React, { useState } from "react";
import PropTypes from "prop-types";
import { operaciones } from "./operaciones";
import Resultado from "./Resultado";

const NumberInput = () => {
  const [numeros, setNumeros] = useState({
    numero1: 0,
    numero2: 0,
  });
  const data = operaciones(numeros, setNumeros);
  console.log(data);
  return (
    <>
      NumberInput
      <label htmlFor="">numero1</label>
      <input
        name="numero1"
        value={numeros}
        onChange={handleChange}
        type="number"
      />
      <label htmlFor="">numero2</label>
      <input
        name="numero2"
        value={numeros}
        onChange={handleChange}
        type="number"
      />
      <Resultado operacion="suma" calculo={suma()} />
    </>
  );
};

NumberInput.propTypes = {
  name: PropTypes.string,
};

export default NumberInput;
