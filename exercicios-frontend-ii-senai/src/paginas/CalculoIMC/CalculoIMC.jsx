import { useState } from "react";
import Principal from "../../componentes/Principal/Principal";

const CalculoImc = () => {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState("");

  const calculaImc = () => {

    // fazer operação aqui

    setImc(peso / (altura * altura));
  };
  return (
    <>
      <Principal titulo={"Calcular Imc"} voltarPara={"/"}>
        <div>
            <label><strong>Peso:</strong></label>
          <input type="number" placeholder="peso" 
          value={peso}
          onChange={(e)=>{setPeso(e.target.value)}} />
        <br></br>
        <label><strong>Altura:</strong></label>
          <input
            type="number"
            placeholder="Altura"
            value={altura}
            onChange={(e) =>{setAltura(e.target.value)}}
          /><br/><br/>
        <button onClick={calculaImc}>Calcular</button>
        </div>
        <h2>Resultado: {imc}</h2>
      </Principal>
    </>
  );
};

export default CalculoImc;
