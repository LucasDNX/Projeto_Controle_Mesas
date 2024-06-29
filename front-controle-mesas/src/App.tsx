import React from 'react';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import EstabelecimentoListar from './components/pages/estabelecimento/estabelecimento-listar';
import EstabelecimentoCadastrar from './components/pages/estabelecimento/estabelecimento-cadastrar';

function App() {
  return (
    <div>
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/estabelecimento/listar">Listar Produtos</Link>
          </li>
          <li>
            <Link to="/estabelecimento/cadastrar">Cadastrar Produtos</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<EstabelecimentoListar />} />
        <Route path="/estabelecimento/listar" element={<EstabelecimentoListar />} />
        <Route path="/estabelecimento/cadastrar" element={<EstabelecimentoCadastrar />} />
        <Route
          path="/estabelecimento/alterar/:id"
        />
      </Routes>
      <footer>
        <p>Desenvolvido pelos coleguinhas da UP</p>
      </footer>
    </BrowserRouter>
  </div>
  );
}
//<Link>to="/estabelecimento/cadastrar"></Link>
export default App;
