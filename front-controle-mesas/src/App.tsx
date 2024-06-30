import React from 'react';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import EstabelecimentoListar from './components/pages/estabelecimento/estabelecimento-listar';
import EstabelecimentoCadastrar from './components/pages/estabelecimento/estabelecimento-cadastrar';
import EstabelecimentoAlterar from './components/pages/estabelecimento/estabelecimento-alterar';
import ClienteCadastrar from './components/pages/cliente/cliente-cadastrar';
import ClienteListar from './components/pages/cliente/cliente-listar';
import ClienteAlterar from './components/pages/cliente/cliente-alterar';
import ModalidadeCadastrar from './components/pages/modalidade/modalidade-cadastrar';
import MesaCadastrar from './components/pages/mesa/mesa-cadastrar';

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
            <Link to="/estabelecimento/listar">Listar Estabelecimento</Link>
          </li>
          <li>
            <Link to="/estabelecimento/cadastrar">Cadastrar Estabelecimento</Link>
          </li>
          <li>
            <Link to="/cliente/cadastrar">Cadastrar Cliente</Link>
          </li>
          <li>
            <Link to="/cliente/listar">Listar Cliente</Link>
          </li>
          <li>
            <Link to="/modalidade/cadastrar">cadastrar modalidade</Link>
          </li>
          <li>
            <Link to="/mesa/cadastrar">cadastrar mesa</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<EstabelecimentoListar />} />
        <Route path="/estabelecimento/listar" element={<EstabelecimentoListar />} />
        <Route path="/estabelecimento/cadastrar" element={<EstabelecimentoCadastrar />} />
        <Route path="/estabelecimento/alterar" element={<EstabelecimentoAlterar />} />
        <Route path="/cliente/cadastrar" element={<ClienteCadastrar />} />
        <Route path="/cliente/listar" element={<ClienteListar />} />
        <Route path="/cliente/alterar" element={<ClienteAlterar />} />
        <Route path="/modalidade/cadastrar" element={<ModalidadeCadastrar />} />
        <Route path="/mesa/cadastrar" element={<MesaCadastrar />} />
        
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
export default App;
