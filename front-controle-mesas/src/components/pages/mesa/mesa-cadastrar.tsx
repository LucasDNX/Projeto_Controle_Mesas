import { useEffect, useState } from "react";
import { Estabelecimento } from "../../../model/Estabelecimento";
import { Modalidade } from "../../../model/Modalida";
import { Mesa } from "../../../model/Mesa";

function MesaCadastrar() {
  const [capacidade, setCapacidade] = useState("");
  const [status, setStatus] = useState("");
  const [modalidadeId, setModalidadeId] = useState("");
  const [modalidades, setModalidades] = useState<Modalidade[]>([]);
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
  useEffect(() => {
    carregarModalidades();
  }, []);

  function carregarModalidades(){
    //FETCH ou AXIOS
    fetch("http://localhost:5270/api/modalidade/listar")
      .then((resposta) => resposta.json())
      .then((modalidades: Modalidade[]) => {
        setModalidades(modalidades);
      });
  }


  function cadastrar(e: any) {
    e.preventDefault();
    const mesa: Mesa = {
      capacidade: parseInt(capacidade),
      status : status,
      estabelecimentoId: estabelecimentoId,
      modalidadeId : modalidadeId,

      
    };
    fetch("http://localhost:5270/api/mesa/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mesa),
    })
      .then((resposta) => resposta.json())
      .then((mesaCadastrado: Mesa) => {
        console.log(mesaCadastrado);
      });
  }

  return (
    <div>
      <h1>Cadastrar mesa</h1>
      <form onSubmit={cadastrar}>
      <label>Capacidade:</label>
        <input
          type="text"
          placeholder="Digite a capacidade"
          onChange={(e: any) => setCapacidade(e.target.value)}
        />
        <br />
        <label>Status:</label>
        <input
          type="text"
          onChange={(e: any) => setStatus(e.target.value)}
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
        <label>Modalidades:</label>
        <select onChange={(e: any) => setModalidadeId(e.target.value)}>
          {modalidades.map((modalidades) => (
            <option value={modalidades.id} key={modalidades.id}>
              {modalidades.nome}
            </option>
          ))}
        </select>
        <br />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default MesaCadastrar;
