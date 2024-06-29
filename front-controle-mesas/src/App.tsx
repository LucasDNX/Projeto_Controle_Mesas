import React from 'react';
import { Estabelecimento } from './model/Estabelecimento';
import EstabelecimentoCadastrar from './components/pages/estabelecimento/estabelecimento-cadastrar';
import { BrowserRouter, Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <h1>Estrutura inicial</h1>
      <BrowserRouter>
      <nav>
        <ul>
          <li>
      
          </li>
        </ul>
      </nav>
      </BrowserRouter>
      
      
    </div>
  );
}
//<Link>to="/estabelecimento/cadastrar"></Link>
export default App;
