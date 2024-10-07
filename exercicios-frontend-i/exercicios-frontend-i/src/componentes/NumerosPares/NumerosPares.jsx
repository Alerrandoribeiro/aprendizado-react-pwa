import './NumerosPares.css'

const NumerosPares = () => {
    const numeros = [1, 4, 7, 8, 11, 14, 33, 44, 24, 77, 78, 99];
    const numeros_pares = numeros.filter(numero => numero % 2 == 0);

    return (
        <>
            <div className='numerosPares'>
                <ul>
                    {numeros_pares.map((pares, index) => (
                        <li key={index}>{pares}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default NumerosPares;