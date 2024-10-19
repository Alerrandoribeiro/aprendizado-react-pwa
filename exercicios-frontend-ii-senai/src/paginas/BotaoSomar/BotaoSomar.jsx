import { useState } from "react";
import Principal from "../../componentes/Principal/Principal";
import './BotaoSomar.css'


const BotaoSomar = () => {

    const [numeroUm, setNumeroUm] = useState('');
    const [numeroDois, setNumeroDois] = useState('');
    const [resultado, setResultado] = useState('');


    const calcular = () => setResultado(+numeroUm + +numeroDois); // fazendo a corversão para não concatenar 


    return <>
    
        <div><Principal titulo={'Botão Somar'} voltarPara={'/'}></Principal>

            <input type="number"
                placeholder="Digite o 1° número"
                value={numeroUm}
                onChange={(event) => setNumeroUm(event.target.value)} />
       +
            <input type="number"
                placeholder="Digite o 2° número"
                value={numeroDois}
                onChange={(event) => setNumeroDois(event.target.value)} />
         <button onClick={calcular} >Somar</button> = {resultado} 
        </div>
            
        
        
    </>
}


export default BotaoSomar