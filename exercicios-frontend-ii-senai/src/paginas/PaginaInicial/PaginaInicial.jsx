import { useNavigate } from 'react-router-dom';

import './PaginaInicial.css'
import BotaoCustomizado from '../../componentes/BotaoCustomizado/BotaoCustomizado';
import Principal from '../../componentes/Principal/Principal';


const PaginaInicial = () => {

    const navigate = useNavigate();

    return <Principal titulo="Página Inicial">

        <div><h4>
            1. Crie um componente chamado BotaoContador que contém um botão com a
            descrição "Contador é: xx", ao clicar no botão o número deve ser incrementado
            em 1, conforme exemplo:
        </h4></div>

        <BotaoCustomizado cor={'secundaria'} onClick={() => navigate('/botao-incrementar')}>
            Questão 1
        </BotaoCustomizado>

        <div><h4>
            2. Crie um componente chamado Contador que contém dois botões, um para
            somar 1 ao ser clicado e outro para diminuir 1 ao ser clicado, e mostre o valor
            atual no meio entre os dois botões, conforme exemplo:
        </h4></div>

        <BotaoCustomizado cor={'terciario'} onClick={() => navigate('/botao-incrementar-decrementar')}>
            Questão 2
        </BotaoCustomizado>

        <div><h4>
            3. Crie um componente chamado Somar que contém dois campos tipo numérico, e
            um botão "Somar" que ao ser clicado deve somar os dois valores e mostrar o
            resultado, conforme exemplo:
        </h4></div>

        <BotaoCustomizado cor={'primaria'} onClick={() => navigate('/botao-somar')}>
            Questão 3
        </BotaoCustomizado>

        <div><h4>
            4. Crie um componente chamado Diminuir que contém dois campos tipo numérico,
            e um botão "Diminuir" que ao ser clicado deve diminuir os dois valores e mostrar
            o resultado, conforme exemplo:

        </h4></div>
        <BotaoCustomizado cor={'quaternario'} onClick={() => navigate('/botao-subtrair')}>
            Questão 4
        </BotaoCustomizado>

        <div><h4>
            <div><h4>
                5. Crie um componente chamado Multiplicar que contém dois campos tipo
                numérico, e um botão "Multiplicar" que ao ser clicado deve multiplicar os dois
                valores e mostrar o resultado, conforme exemplo:

            </h4></div>

        </h4></div>

    </Principal>

}

export default PaginaInicial;