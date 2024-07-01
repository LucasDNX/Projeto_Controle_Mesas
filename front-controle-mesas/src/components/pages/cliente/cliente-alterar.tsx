import { useEffect, useState } from "react";
import { Cliente } from "../../../model/Cliente";
import { useNavigate, useParams } from "react-router-dom";

function ProdutoAlterar() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:5270/api/cliente/buscar/${id}`)
        .then((resposta) => resposta.json())
        .then((cliente: Cliente) => {
          setNome(cliente.nome);
          setEndereco(cliente.endereco);
          setTelefone(cliente.telefone.toString());
        });
    }
  }, []);

  function alterarCliente(e: any) {
    const cliente: Cliente = {
      nome: nome,
      endereco: endereco,
      telefone: telefone,
    };

    fetch(`http://localhost:5270/api/cliente/alterar/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cliente),
    })
      .then((resposta) => resposta.json())
      .then((cliente: Cliente) => {
        navigate("/pages/cliente/listar");
      });
    e.preventDefault();
  }
  return (
    <div>
      <h1>Alterar Cliente</h1>
      <form onSubmit={alterarCliente}>
        <label>Nome:</label>
        <input
          type="text"
          value={nome}
          placeholder="Digite o nome"
          onChange={(e: any) => setNome(e.target.value)}
          required
        />
        <br />
        <label>Endereco:</label>
        <input
          type="text"
          value={endereco}
          placeholder="Digite o descrição"
          onChange={(e: any) => setEndereco(e.target.value)}
        />
        <br />
        <label>Telefone:</label>
        <input
          type="text"
          value={telefone}
          placeholder="Digite o quantidade"
          onChange={(e: any) => setTelefone(e.target.value)}
        />
        <br />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default ProdutoAlterar;