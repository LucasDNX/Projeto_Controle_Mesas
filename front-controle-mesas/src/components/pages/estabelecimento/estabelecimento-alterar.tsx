

import { useEffect, useState } from "react";
import { Estabelecimento } from "../../../model/Estabelecimento";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

function EstabelecimentoAlterar() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");

  useEffect(() => {
    if (id) {
      axios
        .get<Estabelecimento>(
          `http://localhost:5270/api/estabelecimento/buscar/${id}`
        )
        .then((resposta) => {
          setNome(resposta.data.nome);
          setEndereco(resposta.data.endereco);
        });
    }
  }, []);

  function salvar(e: any) {
    e.preventDefault();
    const estabelecimento: Estabelecimento = {
      nome: nome,
      endereco: endereco,
    };
    axios
      .put<Estabelecimento>(
        `http://localhost:5270/api/estabelecimento/alterar/${id}`,
        estabelecimento
      )
      .then((estabelecimentoAlterado) => {
        navigate("/estabelecimento/listar");
      });
  }

  return (
    <div>
      <h1>Alterar Estabelecimento</h1>
      <form onSubmit={salvar}>
        <label>Nome:</label>
        <input
          type="text"
          value={nome}
          onChange={(e: any) => setNome(e.target.value)}
          required
        />{" "}
        <br />
        <label>Endereco:</label>
        <input
          type="text"
          value={endereco}
          onChange={(e: any) => setEndereco(e.target.value)}
        />{" "}
        <br />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default EstabelecimentoAlterar;
