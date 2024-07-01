import { useEffect, useState } from "react";
import { Cliente } from "../../../model/Cliente";
import axios from "axios";
import { Link } from "react-router-dom";

function ClienteListar() {
    const [clientes, setClientes] = useState<Cliente[]>([]);

    useEffect(() => {
        carregarClientes();
    }, []);

    function carregarClientes() {
        fetch("http://localhost:5270/api/Cliente/listar")
            .then((resposta) => resposta.json())
            .then((clientes: Cliente[]) => {
                console.table(clientes);
                setClientes(clientes);
            });
    }

    function deletar(id: number) {
        console.log(`Id: ${id}`);
        axios
            .delete(`http://localhost:5270/api/cliente/deletar/${id}`)
            .then((resposta) => {
                console.log(resposta.data);
                carregarClientes();
            })
            .catch((error) => {
                console.error("Erro ao deletar cliente:", error);
            });
    }

    return (
        <div>
            <h1>Listar Clientes</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Endereço</th>
                        <th>Telefone</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map((cliente) => (
                        <tr key={cliente.id}>
                            <td>{cliente.id}</td>
                            <td>{cliente.nome}</td>
                            <td>{cliente.endereco}</td>
                            <td>{cliente.telefone}</td>
                            <td>
                                <button onClick={() => deletar(cliente.id!)}>Deletar</button>
                            </td>
                            <td>
                            <Link to={`http://localhost:3000/cliente/atualizar/${cliente.id}`}>
                                <button>Editar</button>
                            </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ClienteListar;
