import { useState } from "react";
import Principal from "../../componentes/Principal/Principal";
import './BotaoSomar.css'


const BotaoSomar = () => {

    const [numeroUm, setNumeroUm] = useState('');
    const [numeroDois, setNumeroDois] = useState('');
    const [resultado, setResultado] = useState('');


    const calcular = () => setResultado(+numeroUm + +numeroDois); // fazendo a corversão para não concatenar 


    return <>
    
        
    <Principal titulo={'Botão Somar'} voltarPara={'/'}>
    
    
    <div>
        <input className="input" type="number"
        placeholder="Digite o 1° número"
        value={numeroUm}
        onChange={(event) => { setNumeroUm(event.target.value) }} />
        <h2><p>+</p></h2>
        <input className="input" type="number"
        placeholder="Digite o 2° número"
        value={numeroDois}
        onChange={(event) => { setNumeroDois(event.target.value) }} />  <br></br>
        </div><h2>Resultado: {resultado}</h2>
        <button onClick={calcular}>Somar</button> 
        </Principal>
            
        
        
    </>
}


export default BotaoSomar;