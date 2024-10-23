import { useNavigate } from "react-router-dom";

import "./PaginaInicial.css";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../componentes/Principal/Principal";

const PaginaInicial = () => {
  const navigate = useNavigate();

  return (
    <Principal titulo="Página Inicial">
      <div>
        <h4>
          1. Crie um componente chamado BotaoContador que contém um botão com a
          descrição "Contador é: xx", ao clicar no botão o número deve ser
          incrementado em 1, conforme exemplo:
        </h4>
      </div>

      <BotaoCustomizado
        cor={"secundaria"}
        onClick={() => navigate("/botao-incrementar")}
      >
        Questão 1
      </BotaoCustomizado>

      <div>
        <h4>
          2. Crie um componente chamado Contador que contém dois botões, um para
          somar 1 ao ser clicado e outro para diminuir 1 ao ser clicado, e
          mostre o valor atual no meio entre os dois botões, conforme exemplo:
        </h4>
      </div>

      <BotaoCustomizado
        cor={"terciario"}
        onClick={() => navigate("/botao-incrementar-decrementar")}
      >
        Questão 2
      </BotaoCustomizado>

      <div>
        <h4>
          3. Crie um componente chamado Somar que contém dois campos tipo
          numérico, e um botão "Somar" que ao ser clicado deve somar os dois
          valores e mostrar o resultado, conforme exemplo:
        </h4>
      </div>

      <BotaoCustomizado
        cor={"primaria"}
        onClick={() => navigate("/botao-somar")}
      >
        Questão 3
      </BotaoCustomizado>

      <div>
        <h4>
          4. Crie um componente chamado Diminuir que contém dois campos tipo
          numérico, e um botão "Diminuir" que ao ser clicado deve diminuir os
          dois valores e mostrar o resultado, conforme exemplo:
        </h4>
      </div>
      <BotaoCustomizado
        cor={"quaternario"}
        onClick={() => navigate("/botao-subtrair")}
      >
        Questão 4
      </BotaoCustomizado>

      <div>
        <h4>
          5. Crie um componente chamado Multiplicar que contém dois campos tipo
          numérico, e um botão "Multiplicar" que ao ser clicado deve multiplicar
          os dois valores e mostrar o resultado, conforme exemplo:
        </h4>
      </div>
      <BotaoCustomizado
        cor={"quinternario"}
        onClick={() => navigate("/botao-multiplicar")}
      >
        Questão 5
      </BotaoCustomizado>

      <div>
        <h4>
          6. Crie um componente chamado Dividir que contém dois campos tipo
          numérico, e um botão "Dividir" que ao ser clicado deve multiplicar os
          dois valores e mostrar o resultado, conforme exemplo:
        </h4>
      </div>
      <BotaoCustomizado
        cor={"sexternario"}
        onClick={() => navigate("/botao-dividir")}
      >
        Questão 6
      </BotaoCustomizado>

      <div>
        <h4>
          7. Considere o valor do dólar igual a R$5,00. Crie um componente
          chamado CambioDolar que contém dois campos tipo numérico, ao ser
          digitado a valor em real deve ser calculado o valor em dólar e o
          contrário também deve ocorrer, conforme exemplo:
        </h4>
      </div>
      <BotaoCustomizado
        cor={"seternario"}
        onClick={() => navigate("/botao-cambio-dolar")}
      >
        Questão 7
      </BotaoCustomizado>
      <div>
        <h4>
          8. Considere o valor do euro igual a R$5,50. Crie um componente
          chamado CambioEuro que contém dois campos tipo numérico, ao ser
          digitado a valor em real deve ser calculado o valor em euro e o
          contrário também deve ocorre, conforme exemplo: 9.
        </h4>
      </div>
      <BotaoCustomizado
        cor={"octernario"}
        onClick={() => navigate("/botao-cambio-euro")}
      >
        Questão 8
      </BotaoCustomizado>
      <div>
        <h4>
          9. Considere a fórmula do IMC = peso / (altura * altura) e status:
          18.5 = "Abaixo do peso", 25 = "Peso normal", 30 = "Sobrepeso" e acima
          de 30 = "Obeso" . Crie um componente chamado CalculoIMC que contém
          dois campos tipo numérico, e um botão "Calcular IMC" que ao ser
          clicado deve fazer o cálculo e mostrar o resultado, conforme exemplo:
        </h4>
      </div>
      <BotaoCustomizado
        cor={"nonoternario"}
        onClick={() => navigate("/botao-calculo-imc")}
      >
        Questão 9
      </BotaoCustomizado>
    </Principal>
  );
};

export default PaginaInicial;
