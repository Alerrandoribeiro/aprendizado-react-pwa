import './NomesOrdenados.css'


const NomesOrdenados = () => {
    const nomes = ['Arline Allisson', 'Elnora Clarke', 'Freeman Dickson', 'Lizzie Patterson', 'Maude Stanton'];
    const ordenados = nomes.sort();

    return (
        <>
            <div className='nomesOrdenados'>
                <ol>
                    {ordenados.map((nome, index) => (
                        <li key={index}>{nome}</li>
                    ))}
                </ol>
            </div>
        </>
    );
};

export default NomesOrdenados;
