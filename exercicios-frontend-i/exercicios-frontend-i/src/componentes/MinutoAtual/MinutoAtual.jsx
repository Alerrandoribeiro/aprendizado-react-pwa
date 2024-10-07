import './MinutoAtual.css'

const MinutoAtual = () => {

    const minuto_atual = new Date().getMinutes();
    return (
        <>
            <div className='minutoAtual'>{minuto_atual}</div>
        </>
    );
};
export default MinutoAtual;