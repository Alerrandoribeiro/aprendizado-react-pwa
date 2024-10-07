import './TamanhoTexto.css'

const TamanhoTexto = ({texto}) =>{
    
    const tamanho = texto.length
    
    return(
        <>
        <div className='tamanhoTexto'>O texto possui {tamanho} caracteres.</div>
        </>
    )
}

export default TamanhoTexto;