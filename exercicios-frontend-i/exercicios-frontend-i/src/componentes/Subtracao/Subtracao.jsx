import "./Subtracao.css";

const Subtracao = ({ num1, num2 }) => {
    return (
        <>
            <div className="subtracao">{num1} - {num2} = {subtracao(num1, num2)}</div>
        </>
    );
}

function subtracao(n1, n2) {
    return Number(n1) - Number(n2);
}

export default Subtracao;