import "./Multiplicacao.css";

const Multiplicacao = ({ num1, num2 }) => {
    return (
        <>
            <div className="multiplicacao">{num1} * {num2} = {multiplicacao(num1, num2)}</div>
        </>
    );
}

function multiplicacao(n1, n2) {
    return Number(n1) * Number(n2);
}

export default Multiplicacao;