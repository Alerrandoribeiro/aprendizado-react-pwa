import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cabecalho from './componentes/Cabecalho/Cabecalho';
import Rodape from './componentes/Rodape/Rodape';
import PaginaInicial from './paginas/PaginaInicial/PaginaInicial';
import BotaoIncrementar from './paginas/BotaoIncrementar/BotaoIncrementar';
import BotaoIncrementarDecrementar from './paginas/BotaoIncrementarDecrementar/BotaoImcrementarDecrementar';
import BotaoSomar from './paginas/BotaoSomar/BotaoSomar';
import Diminuir from './paginas/Diminuir/Diminuir';
import Multiplicar from './paginas/Multiplicar/Multiplicar';
import Divisao from './paginas/Dividir/Dividir';
import CambioDolar from './paginas/CambioDolar/CambioDolar';






const router = createBrowserRouter([
  {
    path: '',
    element: <PaginaInicial />,
  },
  {
    path: 'botao-incrementar',
    element: <BotaoIncrementar />,
  },
  {
    path: 'botao-incrementar-decrementar',
    element: <BotaoIncrementarDecrementar />,
  },
  {
    path: 'botao-somar',
    element: <BotaoSomar/>,
  },
  {
    path: 'botao-subtrair',
    element: <Diminuir/>,
  },
  {
    path: 'botao-multiplicar',
    element: <Multiplicar/>,
  },
  {
    path: 'botao-dividir',
    element: <Divisao/>,
  },
  {
    path: 'botao-cambio-dolar',
    element: <CambioDolar/>,
  },
]);


function App() {

  return (
    <>
      <Cabecalho />
      <RouterProvider router={router} />
      <Rodape />
    </>
  );
}

export default App;
