import './AnoAtual.css'

const AnoAtual = () => {
        
    return (
      <>
        <div className='anoAtual'>{anoAtual()}</div>
      </>
    );
  };
  export default AnoAtual;

  const anoAtual = () => {
    const date = new Date();
    return date.getFullYear().toString(); // Retorna o ano como string
}

