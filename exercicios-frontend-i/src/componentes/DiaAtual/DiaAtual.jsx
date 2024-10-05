import './DiaAtual.css'

const DiaAtual = () => {
   
    const dia_atual = new Date().getDate();
       
    return (
      <>
        <div className='diaAtual'>{dia_atual}</div>
      </>
    );
  };
  export default DiaAtual;