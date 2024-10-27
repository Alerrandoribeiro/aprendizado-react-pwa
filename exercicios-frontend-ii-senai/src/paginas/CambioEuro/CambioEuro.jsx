import { useState } from "react";
import Principal from "../../componentes/Principal/Principal";

const CambioEuro = () => {
    const [valor, setValor] = useState('');
    const [cotacao, setCotacao] = useState('');
    const [resultado, setResultado] = useState('');
    const [modo, setModo] = useState('euroParaReal'); // 'dolarParaReal' ou 'realParaDolar'

    const calcular = () => {
        let resultadoCalculo;
        if (modo === 'euroParaReal') {
            resultadoCalculo = +valor * +cotacao;
        } else {
            resultadoCalculo = +valor / +cotacao;
        }
        setResultado(resultadoCalculo.toFixed(2)); // Limitar a duas casas decimais
    };

    return (
        <>
            <Principal titulo={'Conversor de Real/Euro'} voltarPara={'/'}>
                <div>
                    <label>
                        <input 
                            type="radio" 
                            name="modo" 
                            value="euroParaReal" 
                            checked={modo === 'euroParaReal'} 
                            onChange={() => setModo('euroParaReal')} 
                        /> Euro para Real<br></br>
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            name="modo" 
                            value="realParaEuro" 
                            checked={modo === 'realParaEuro'} 
                            onChange={() => setModo('realParaEuro')} 
                        /> Real para Euro
                    </label>
                </div>

                <div>
                    <input 
                        type="number" 
                        placeholder={modo === 'euroParaReal' ? "Euro" : "Real"}
                        value={valor}
                        onChange={(e) => setValor(e.target.value)} 
                    />
                    <input 
                        type="number" 
                        placeholder="Cotação"
                        value={cotacao}
                        onChange={(e) => setCotacao(e.target.value)} 
                    />
                </div>

                <h2>Resultado: {resultado} {modo === 'euroParaReal' ? 'R$' : '€'}</h2>
                <button onClick={calcular}>Converter</button>
            </Principal>
        </>
    );
}

export default CambioEuro;
