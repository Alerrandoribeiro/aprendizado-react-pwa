import './MesAtual.css'

const MesAtual = () => {
   const mes_atual = new Date().getMonth() + 1
    return (
      <>
        <div className='mesAtual'>{mes_atual}</div>
      </>
    );
  };
  

export default MesAtual;