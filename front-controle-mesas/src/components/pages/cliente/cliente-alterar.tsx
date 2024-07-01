import React, { useEffect, useState } from "react";
import { Cliente } from "../../../model/Cliente";
import { useNavigate, useParams } from "react-router-dom";

function ClienteAlterar() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");

  useEffect(() => {
    const clienteId = Number(id);
    if (id) {
      fetch(`http://localhost:5270/api/cliente/buscar/${clienteId}`)
        .then((resposta) => {
          if (!resposta.ok) {
            throw new Error("Cliente não encontrado");
          }
          return resposta.json();
        })
        .then((cliente: Cliente) => {
          setNome(cliente.nome);
          setEndereco(cliente.endereco);
          setTelefone(cliente.telefone);
        })
        .catch((error) => {
          console.error("Erro ao carregar cliente:", error);
        });
    }
  }, [id]); 

  function atualizarCliente(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const cliente: Cliente = {
      nome: nome,
      endereco: endereco,
      telefone: telefone,
    };

    fetch(`http://localhost:5270/api/cliente/atualizar/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cliente),
    })
      .then((resposta) => {
        if (!resposta.ok) {
          throw new Error("Erro ao atualizar cliente");
        }
        return resposta.json();
      })
      .then((clienteAtualizado: Cliente) => {
        navigate("/cliente/listar"); // Redireciona para a lista de clientes após a alteração
      })
      .catch((error) => {
        console.error("Erro ao alterar cliente:", error);
        // Tratar erro, redirecionar ou exibir mensagem ao usuário, por exemplo
      });
  }

  return (
    <div>
      <h1>Alterar Cliente</h1>
      <form onSubmit={atualizarCliente}>
        <label>Nome:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <br />
        <label>Endereço:</label>
        <input
          type="text"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
        />
        <br />
        <label>Telefone:</label>
        <input
          type="text"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
        <br />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default ClienteAlterar;
