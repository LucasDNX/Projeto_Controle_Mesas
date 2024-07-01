import { useEffect, useState } from "react";
import { Cliente } from "../../../model/Cliente";
import { Estabelecimento } from "../../../model/Estabelecimento";

function ClienteCadastrar() {
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");
  const [estabelecimentoId, setEstabelecimentoId] = useState("");
  const [estabelecimentos, setEstabelecimentos] = useState<Estabelecimento[]>([]);
  
  useEffect(() => {
    carregarEstabelecicmentos();
  }, []);

  function carregarEstabelecicmentos(){
    //FETCH ou AXIOS
    fetch("http://localhost:5270/api/estabelecimento/listar")
      .then((resposta) => resposta.json())
      .then((estabelecimentos: Estabelecimento[]) => {
        setEstabelecimentos(estabelecimentos);
      });
  }

  function cadastrar(e: any) {
    e.preventDefault();
    const cliente: Cliente = {
      nome: nome,
      endereco: endereco,
      telefone: telefone,
      estabelecimentoId: estabelecimentoId,

      
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
        window.location.href = "http://localhost:3000/cliente/listar";
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
        <label>Estabelecimentos:</label>
        <select onChange={(e: any) => setEstabelecimentoId(e.target.value)}>
          {estabelecimentos.map((estabelecimento) => (
            <option value={estabelecimento.id} key={estabelecimento.id}>
              {estabelecimento.nome}
            </option>
          ))}
        </select>
        <br />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default ClienteCadastrar;
