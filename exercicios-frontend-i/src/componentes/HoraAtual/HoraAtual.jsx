import './HoraAtual.css'

const HoraAtual = () => {
    const hora_atual = new Date().getHours()
    return (
        <>
          <div className='horaAtual'>{hora_atual}</div>
        </>
    )
}

export default HoraAtual;