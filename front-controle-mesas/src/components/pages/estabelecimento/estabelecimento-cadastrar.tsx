import { useState } from "react";
import { Estabelecimento } from "../../../model/Estabelecimento";

function EstabelecimentoCadastrar() {
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
 
  function cadastrar(e: any) {
    e.preventDefault();
    const estabelecimento: Estabelecimento = {
      nome: nome,
      endereco: endereco,
    };
    fetch("http://localhost:3001/api/estabelecimento/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(estabelecimento),
    })
      .then((resposta) => resposta.json())
      .then((estabelecimentoCadastrado: Estabelecimento) => {
        console.log(estabelecimentoCadastrado);
      });
  }

  return (
    <div>
      <h1>Cadastrar Estabelecimento</h1>
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
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default EstabelecimentoCadastrar;
