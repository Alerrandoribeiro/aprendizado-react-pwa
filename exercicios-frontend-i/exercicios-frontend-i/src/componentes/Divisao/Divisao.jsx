import "./Divisao.css";

const Divisao = ({ num1, num2 }) => {
    return (
        <>
            <div className="divisao">{num1} / {num2} = {divisao(num1, num2)}</div>
        </>
    );
}

function divisao(n1, n2) {
    return Number(n1) / Number(n2);
}

export default Divisao;