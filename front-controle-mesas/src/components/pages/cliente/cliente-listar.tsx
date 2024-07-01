import { useEffect, useState } from "react";
import { Cliente } from "../../../model/Cliente";
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
            setClientes(clientes)
        })
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

export default ClienteListar;