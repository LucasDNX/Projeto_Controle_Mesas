import { useState } from "react";
import { Cliente } from "../../../model/Cliente";

function ClienteCadastrar() {
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");
 
  function cadastrar(e: any) {
    e.preventDefault();
    const cliente: Cliente = {
      nome: nome,
      endereco: endereco,
      telefone: telefone
    };
    fetch("http://localhost:5270/api/cliente/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cliente),
    })
      .then((resposta) => resposta.json())
      .then((clienteCadastrado: Cliente) => {
        console.log(clienteCadastrado);
      });
  }

  return (
    <div>
      <h1>Cadastrar Cliente</h1>
      <form onSubmit={cadastrar}>
        <label>Nome:</label>
        <input
          type="text"
          onChange={(e: any) => setNome(e.target.value)}
          required
        />{" "}
        <br />
        <label>Endereco:</label>
        <input
          type="text"
          onChange={(e: any) => setEndereco(e.target.value)}
        />{" "}
        <br />
        <label>Telefone:</label>
        <input
          type="text"
          onChange={(e: any) => setTelefone(e.target.value)}
        />{" "}
        <br />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default ClienteCadastrar;
