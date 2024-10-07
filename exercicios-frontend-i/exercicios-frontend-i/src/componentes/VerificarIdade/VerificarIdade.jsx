import './VerificarIdade.css'

const VerificarIdade =({idade}) => {
  const maior_idade = 18
    if(idade >= maior_idade){

        return(
            <>
               <div className='verificarIdadeMaior'>{idade} anos, é maior de idade</div>
            </>
         );

    }else{
        return(
            <>
               <div className='verificarIdadeMenor'>{idade} anos, é menor de idade</div>
        </>
        );
    }
  
    
}


export default VerificarIdade;

