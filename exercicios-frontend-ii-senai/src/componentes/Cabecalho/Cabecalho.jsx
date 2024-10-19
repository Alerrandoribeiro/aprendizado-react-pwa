import Avatar from '../Avatar/Avatar'
import './Cabecalho.css'


function Cabecalho(){
    return <header className="cabecalho_root"> 
    <img src ="logo-azul-senai.png" height={40} />
    <Avatar nome = "Glauberty Ribeiro" />

     </header>
}

export default Cabecalho;