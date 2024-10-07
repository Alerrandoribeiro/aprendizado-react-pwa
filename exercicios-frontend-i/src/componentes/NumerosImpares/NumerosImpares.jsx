import './NumerosImpares.css'

const NumerosImpares = () => {
    const numeros = [1, 4, 7, 8, 11, 14, 33, 44, 24, 66, 77, 78, 99, 100];
    const numeros_impares = numeros.filter(num => num % 2 == 1);
    return (
        <>
           <div className='numerosImpares'>
                <ul>
                    {numeros_impares.map((pares, index) => (
                        <li key={index}>{pares}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default NumerosImpares;