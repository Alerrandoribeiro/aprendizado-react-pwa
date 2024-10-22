import { useState } from "react"
import Principal from "../../componentes/Principal/Principal";

const Diminuir = () =>{
   
    const [numeroUm, setNumeroUm] = useState('');
    const [numeroDois, setNumeroDois] = useState('');
    const [resultado, setResultado] = useState('');

     const calcular = ()=>{setResultado(+numeroUm - +numeroDois)}

    return <>
    
    
    <Principal titulo={'Botão Subtrair'} voltarPara={'/'}>
    
    
    <div>
        <input className="input" type="number"
        placeholder="Digite o 1° número"
        value={numeroUm}
        onChange={(event) => { setNumeroUm(event.target.value) }} />
        <h2><p>-</p></h2>
        <input className="input" type="number"
        placeholder="Digite o 2° número"
        value={numeroDois}
        onChange={(event) => { setNumeroDois(event.target.value) }} />  <br></br>
        </div><h2>Resultado: {resultado}</h2>
        <button onClick={calcular}>Subtrair</button> 
        </Principal>
    
    
</>
}

export default Diminuir;