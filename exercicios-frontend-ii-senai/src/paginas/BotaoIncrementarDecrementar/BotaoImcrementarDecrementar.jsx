import { useState } from "react"
import { GrCaretUp } from "react-icons/gr";
import { GrCaretDown } from "react-icons/gr";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../componentes/Principal/Principal";

const BotaoIncrementarDecrementar = () => {

    const [numero, setNumero] = useState(0);

    const incrementar = () => {
        setNumero(numero + 1)
    }
    const decrementar = () => {
        setNumero(numero - 1)
    }

    return <Principal titulo={'Botão incrementar e decrementar'} voltarPara={'/'}>
        <BotaoCustomizado onClick={incrementar} cor={'primaria'}>
            <GrCaretUp />
        </BotaoCustomizado>
        <h1>{numero}</h1>
        <BotaoCustomizado onClick={decrementar} cor={'secundaria'}>
            <GrCaretDown />
        </BotaoCustomizado>
    </Principal>


}

export default BotaoIncrementarDecrementar;