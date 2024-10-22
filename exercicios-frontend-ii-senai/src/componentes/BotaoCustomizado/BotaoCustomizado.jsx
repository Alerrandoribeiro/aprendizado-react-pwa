import './BotaoCustomizado.css'

const BotaoCustomizado = ({ cor, onClick, children }) => {

    const estilos = ['botao-customizado_root'];

    switch (cor) {
        case 'primaria':
            estilos.push('botao-customizado_primario');
            break;
        case 'secundaria':
            estilos.push('botao-customizado_secundario');
            break;
        case 'terciario':
            estilos.push('botao-customizado_terciario');
            break;
        case 'quaternario':
            estilos.push('botao-customizado_quaternario');
            break;
        case 'quinternario':
            estilos.push('botao-customizado_quinternario');
            break;
        case 'sexternario':
            estilos.push('botao-customizado_sexternario');
            break;
        case 'seternario':
            estilos.push('botao-customizado_seternario');
            break;

        default:
            estilos.push('botao-customizado_padrao');
            break;
    }

    return <button className={estilos.join(" ")} onClick={onClick}>{children}</button>
}


export default BotaoCustomizado;