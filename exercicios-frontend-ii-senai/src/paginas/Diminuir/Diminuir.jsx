import { useState } from "react"
import Principal from "../../componentes/Principal/Principal";

const Diminuir = () =>{
   
    const [numeroUm, setNumeroUm] = useState('');
    const [numeroDois, setNumeroDois] = useState('');
    const [resultado, setResultado] = useState('');

     const calcular = ()=>{setResultado(+numeroUm - +numeroDois)}

    return <>
    
    <div><Principal titulo={'Botão Subtrair'} voltarPara={'/'}></Principal>

        <input type="number"
            placeholder="Digite o 1° número"
            value={numeroUm}
            onChange={(event) => setNumeroUm(event.target.value)} />
   -
        <input type="number"
            placeholder="Digite o 2° número"
            value={numeroDois}
            onChange={(event) => setNumeroDois(event.target.value)} />
     <button onClick={calcular} >Subtrair</button> = {resultado} 
    </div>
        
    
    
</>
}

export default Diminuir;