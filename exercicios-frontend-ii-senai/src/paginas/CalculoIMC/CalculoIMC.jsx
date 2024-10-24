import { useState } from "react";
import Principal from "../../componentes/Principal/Principal";

const CalculoImc = () => {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState("");

  const calculaImc = () => setImc((peso / (altura * altura)).toFixed(2));

  const statusImc = () => {
      let status;


      switch (true) {
        case !imc:
          status = '';
          break
        case imc < 18.5:
          status = "Abaixo do peso";
          break;
        case imc < 25:
          status = "Peso normal";
          break;
        case imc <= 30:
          status = "Sobrepeso";
          break;
        case imc < 30:
          status = "Sobrepeso";
          break;
        default:
          status = "Obeso";
          break;
      }

      return status;
  };
  return (
    <>
      <Principal titulo={"Calcular Imc"} voltarPara={"/"}>
        <div>
          <label>
            <strong>Peso:</strong>
          </label>
          <input
            type="number"
            placeholder="peso"
            value={peso}
            onChange={(e) => {
              setPeso(e.target.value);
            }}
          />
          <br></br>
          <label>
            <strong>Altura:</strong>
          </label>
          <input
            type="number"
            placeholder="Altura"
            value={altura}
            onChange={(e) => {
              setAltura(e.target.value);
            }}
          />
          <br />
          <br />
          <button onClick={calculaImc}>Calcular</button>
        </div>
        <h2>Resultado: {imc}</h2>
        <h2>Status: {statusImc()}</h2>
      </Principal>
    </>
  );
};

export default CalculoImc;
