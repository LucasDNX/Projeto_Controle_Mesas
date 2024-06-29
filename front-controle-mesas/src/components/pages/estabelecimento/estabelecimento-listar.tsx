import { useEffect, useState } from "react";
import { Estabelecimento } from "../../../model/Estabelecimento";

function EstabelecimentoListar() {
    const [estabelecimentos, setEstabelecimentos] = useState<Estabelecimento[]>([]);

    useEffect(() => {
        carregarEstabelecimentos();
    }, []);

    function carregarEstabelecimentos() {
        fetch("http://localhost:5270/api/estabelecimento/listar")
        .then((resposta) => resposta.json())
        .then((estabelecimentos: Estabelecimento[]) => {
            console.table(estabelecimentos);   
            setEstabelecimentos(estabelecimentos)
        })
    }
    
    return (
        <div>
            <h1>Listar Estabelecimentos</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Endereço</th>
                    </tr>
                </thead>
                <tbody>
                    {estabelecimentos.map((estabelecimento) => (
                        <tr key={estabelecimento.id}>
                            <td>{estabelecimento.id}</td>
                            <td>{estabelecimento.nome}</td>
                            <td>{estabelecimento.endereco}</td>
                            <td>
                                <button>Deletar</button>
                            </td>
                            <td>
                                <button>Editar</button>
                            </td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    );
}

export default EstabelecimentoListar;