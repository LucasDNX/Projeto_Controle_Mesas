

import { useEffect, useState } from "react";
import { Cliente } from "../../../model/Cliente";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

function ClienteAlterar() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");


  useEffect(() => {
    if (id) {
      axios
        .get<Cliente>(
          `http://localhost:5270/api/cliente/buscar/${id}`
        )
        .then((resposta) => {
          setNome(resposta.data.nome);
          setEndereco(resposta.data.endereco);
          setTelefone(resposta.data.telefone);
        });
    }
  }, []);

  function salvar(e: any) {
    e.preventDefault();
    const cliente: Cliente = {
      nome: nome,
      endereco: endereco,
      telefone: telefone
    };
    axios
      .put<Cliente>(
        `http://localhost:5270/api/cliente/alterar/${id}`,
        cliente
      )
      .then((clienteAlterado) => {
        navigate("/cliente/listar");
      });
  }

  return (
    <div>
      <h1>Alterar Cliente</h1>
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
        <label>Telefone:</label>
        <input
          type="text"
          value={telefone}
          onChange={(e: any) => setTelefone(e.target.value)}
        />{" "}
        <br />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default ClienteAlterar;
