import "./Soma.css";

const Soma = ({ num1, num2 }) => {
    return (
        <>
            <div className="soma">{num1} + {num2} = {soma(num1, num2)}</div>
        </>
    );
}

function soma(n1, n2) {
    return Number(n1) + Number(n2);
}

export default Soma;


