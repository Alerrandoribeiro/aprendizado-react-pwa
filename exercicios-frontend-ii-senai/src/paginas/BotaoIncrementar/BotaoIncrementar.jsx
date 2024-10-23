import { useState } from "react"



import Principal from "../../componentes/Principal/Principal";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";


const BotaoIncrementar = () => {

    const [numero, setNumero] = useState(0);

    const incrementar = () => {
        setNumero(numero + 1)
    }

    return <Principal titulo={'Botão Contador'} voltarPara={'/'}>

        Botão Contador
        <br>
        </br>
        <BotaoCustomizado onClick={incrementar} cor={'primaria'}>
            {numero}
        </BotaoCustomizado>
    </Principal>


}

export default BotaoIncrementar;