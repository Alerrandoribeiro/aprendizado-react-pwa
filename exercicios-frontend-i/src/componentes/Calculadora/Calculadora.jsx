import "./Calculadora.css";

const Calculadora = ({ num1, num2, operacao }) => {
        operacao = operacao.toUpperCase()
    switch (true) {
        case operacao == 'SOMA' || operacao == 'ADIÇÂO':
            return (
                <>
                    <div className="calculadora">{num1} + {num2} = {soma(num1, num2)}</div>
                </>
            );
        case operacao == 'SUBTRAÇÃO':
            return (
                <>
                    <div className="calculadora">{num1} - {num2} = {subtracao(num1, num2)}</div>
                </>
            );
        case operacao == 'DIVISÃO':
            return (
                <>
                    <div className="calculadora">{num1} / {num2} = {divisao(num1, num2)}</div>
                </>
            );
        case operacao == 'MULTIPLICAÇÃO':
            return (
                <>
                    <div className="calculadora">{num1} * {num2} = {multiplicacao(num1, num2)}</div>
                </>
            );

        default:
            return (
                <>
                    <div className="calculadora">Valor inválido!</div>
                </>
            );
    };
}

function soma(n1, n2) {
    return Number(n1) + Number(n2);
}
function subtracao(n1, n2) {
    return Number(n1) - Number(n2);
}
function divisao(n1, n2) {
    return Number(n1) / Number(n2);
}
function multiplicacao(n1, n2) {
    return Number(n1) * Number(n2);
}

export default Calculadora;