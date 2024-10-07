import './DataCompletaAtual.css'

const DataCompletaAtual = () => {
    
    const mes = new Date().getMonth();
    const dia = new Date().getDay();
    const ano = new Date().getFullYear();
    const hora = new Date().getHours();
    const minutos = new Date().getMinutes()

    const data_formatada  = `${dia}/${mes}/${ano}  ${hora}:${minutos}` 
    return (
      <>
      <div className='dataCompletaAtual'>{data_formatada}</div>
      </>
    );
}

export default DataCompletaAtual;