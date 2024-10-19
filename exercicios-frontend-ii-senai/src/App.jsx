import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cabecalho from './componentes/Cabecalho/Cabecalho';
import Rodape from './componentes/Rodape/Rodape';
import PaginaInicial from './paginas/PaginaInicial/PaginaInicial';
import BotaoIncrementar from './paginas/BotaoIncrementar/BotaoIncrementar';
import BotaoIncrementarDecrementar from './paginas/BotaoIncrementarDecrementar/BotaoImcrementarDecrementar';
import BotaoSomar from './paginas/BotaoSomar/BotaoSomar';
import Diminuir from './paginas/Diminuir/Diminuir';






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
