import { useState } from "react";
import Principal from "../../componentes/Principal/Principal";

const CambioDolar = () => {
    const [valor, setValor] = useState('');
    const [cotacao, setCotacao] = useState('');
    const [resultado, setResultado] = useState('');
    const [modo, setModo] = useState('dolarParaReal'); // 'dolarParaReal' ou 'realParaDolar'

    const calcular = () => {
        let resultadoCalculo;
        if (modo === 'dolarParaReal') {
            resultadoCalculo = +valor * +cotacao;
        } else {
            resultadoCalculo = +valor / +cotacao;
        }
        setResultado(resultadoCalculo.toFixed(2)); // Limitar a duas casas decimais
    };

    return (
        <>
            <Principal titulo={'Conversor de Real/Dólar'} voltarPara={'/'}>
                <div>
                    <label>
                        <input 
                            type="radio" 
                            name="modo" 
                            value="dolarParaReal" 
                            checked={modo === 'dolarParaReal'} 
                            onChange={() => setModo('dolarParaReal')} 
                        /> Dólar para Real<br></br>
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            name="modo" 
                            value="realParaDolar" 
                            checked={modo === 'realParaDolar'} 
                            onChange={() => setModo('realParaDolar')} 
                        /> Real para Dólar
                    </label>
                </div>

                <div>
                    <input 
                        type="number" 
                        placeholder={modo === 'dolarParaReal' ? "Dólar" : "Real"}
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

                <h2>Resultado: {resultado} {modo === 'dolarParaReal' ? 'R$' : 'US$'}</h2>
                <button onClick={calcular}>Converter</button>
            </Principal>
        </>
    );
}

export default CambioDolar;
