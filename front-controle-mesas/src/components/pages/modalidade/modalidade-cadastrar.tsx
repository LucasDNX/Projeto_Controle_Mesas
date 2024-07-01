import { useEffect, useState } from "react";
import { Estabelecimento } from "../../../model/Estabelecimento";
import { Modalidade } from "../../../model/Modalida";

function ModalidadeCadastrar() {
  const [nome, setNome] = useState("");
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
    const modalidade : Modalidade = {
      nome: nome,
      estabelecimentoId: estabelecimentoId,

      
    };
    fetch("http://localhost:5270/api/modalidade-mesa/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(modalidade),
    })
      .then((resposta) => resposta.json())
      .then((modalidadeCadastrado: Modalidade) => {
        console.log(modalidadeCadastrado);
      });
  }

  return (
    <div>
      <h1>Cadastrar modalidade</h1>
      <form onSubmit={cadastrar}>
        <label>Nome:</label>
        <input
          type="text"
          onChange={(e: any) => setNome(e.target.value)}
          required
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

export default ModalidadeCadastrar;
