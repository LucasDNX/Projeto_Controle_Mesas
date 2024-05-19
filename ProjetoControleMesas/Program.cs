using System.ComponentModel.DataAnnotations;
//using ProjetoControleMesas.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjetoControleMesas;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<AppDbContext>();

var app = builder.Build();

//Cadastro de clientes
app.MapPost("/api/cliente/cadastrar", ([FromBody] Cliente cliente,
    [FromServices] AppDbContext context) =>
{
    //Validando os atributos do cliente
    List<ValidationResult> erros = new List<ValidationResult>();
    if (!Validator.TryValidateObject(
            cliente, new ValidationContext(cliente), erros, true))
    {
        return Results.BadRequest(erros);
    }

    Cliente? buscarCliente = context.Clientes.FirstOrDefault(x =>
        x.Id == cliente.Id);

    if (buscarCliente is null)
    {
        cliente.Nome = cliente.Nome.ToUpper();
        context.Clientes.Add(cliente);
        context.SaveChanges();
        return Results.Created($"/api/cliente/buscar/{cliente.Id}", cliente);
    }
    return Results.BadRequest("O clinte já encontra-se cadastrado");
});

//Visualização de clientes
app.MapGet("/api/cliente/listar", ([FromServices] AppDbContext context) =>
    {
        if (context.Clientes.Any())
        {
            return Results.Ok(context.Clientes.ToList());
        }
        return Results.NotFound("Cliente não encontrado");
    });

//Busca pelo Cliente pelo Id
app.MapGet("/api/cliente/buscar/{id}", ([FromRoute] string id,
        [FromServices] AppDbContext context) =>
    {
       
        Cliente? cliente = context.Clientes.FirstOrDefault(x => x.Id == id);

        if (cliente is null)
        {
            return Results.NotFound("Cliente não encontrado!");
        }
        return Results.Ok(cliente);
    });

//Atualização de dados do Cliente
app.MapPut("/api/cliente/atualizar/{Id}", ([FromRoute] String id,[FromBody] Cliente clienteAtualizado,[FromServices] AppDbContext context) => 
{
    Cliente? clienteExistente = context.Clientes.FirstOrDefault(c => c.Id == id);
    if (clienteExistente == null)
    {
        return Results.NotFound("Cliente nao encontrado");
    }

    clienteExistente.Nome = clienteAtualizado.Nome;
    clienteExistente.Endereco = clienteAtualizado.Endereco;
    clienteExistente.Telefone = clienteAtualizado.Telefone;
    
    context.Clientes.Update(clienteExistente);
    context.SaveChanges();

    return Results.Ok(clienteExistente);
});



//Cadastro de mesas
app.MapPost("/api/mesas/cadastrar", ([FromBody] Mesa mesa, [FromServices] AppDbContext context) => 
{
    List<ValidationResult> erros = new List<ValidationResult>();
    if (!Validator.TryValidateObject(mesa, new ValidationContext(mesa), erros, true))
    {
        return Results.BadRequest(erros);
    }

    Mesa? mesaBuscado = context.Mesas.FirstOrDefault(x =>
        x.Id == mesa.Id);

    if (mesaBuscado is null)
    {
        context.Mesas.Add(mesa);
        context.SaveChanges();
        return Results.Created($"/api/produto/buscar/{mesa.Id}", mesa);
    }
    return Results.BadRequest("Já existe uma mesa criada para este ID");

});

//Cadastro de estabelecimento
app.MapPost("/api/estabelecimento/cadastrar", ([FromBody] Estabelecimento estabelecimento,
    [FromServices] AppDbContext context) =>
{
    List<ValidationResult> erros = new List<ValidationResult>();
    if (!Validator.TryValidateObject(
            estabelecimento, new ValidationContext(estabelecimento), erros, true))
    {
        return Results.BadRequest(erros);
    }
    Estabelecimento? EstabelecimentoBuscado = context.Estabelecimentos.FirstOrDefault(x =>
        x.Nome == estabelecimento.Nome);

    if (EstabelecimentoBuscado is null)
    {
        estabelecimento.Nome = estabelecimento.Nome.ToUpper();
        context.Estabelecimentos.Add(estabelecimento);
        context.SaveChanges();
        return Results.Created("Estabelecimento criado com sucesso", estabelecimento);
    }
    return Results.BadRequest("Estabelecimento ja existente. ");
});

//Cadastro de modalidades de mesa

    app.MapPost("/api/modalidade-mesa/cadastrar", ([FromBody] Modalidade modalidade,
    [FromServices] AppDbContext context) =>
{
    //Validando os atributos do cliente
    List<ValidationResult> erros = new List<ValidationResult>();
    if (!Validator.TryValidateObject(
            modalidade, new ValidationContext(modalidade), erros, true))
    {
        return Results.BadRequest(erros);
    }

    Modalidade? buscarModalidade = context.Modalidades.FirstOrDefault(x =>
        x.Nome.ToUpper() == modalidade.Nome.ToUpper());

    if (buscarModalidade is null)
    {
        modalidade.Nome = modalidade.Nome.ToUpper();
        context.Modalidades.Add(modalidade);
        context.SaveChanges();
        return Results.Created($"/api/modalidade-mesa/buscar/{modalidade.Id}", modalidade);
    }
    return Results.BadRequest("A modalidade ja foi cadastrada.");
});


//Visualização das mesas registradas
app.MapGet("/api/mesas/listar", ([FromServices] AppDbContext context) => 
{
    if (context.Mesas.Any())
    {
        return Results.Ok(context.Mesas.ToList());
    }
    return Results.NotFound("Não existem mesas cadastradas!");
});


// Visualização do status da mesa selecionada
app.MapGet("/api/mesas/status/{id}", ([FromRoute] string id, [FromServices] AppDbContext context) =>
{
    Mesa? mesa = context.Mesas.FirstOrDefault(m => m.Id == id);
        
    if (mesa is null)
    {
        return Results.NotFound("Mesa não encontrada!");
    }

    var result = new { Id = mesa.Id, Status = mesa.Status };
    return Results.Ok(result);
});



//Atualização de status da mesa (Ocupada ou Livre)
app.MapPut("/api/mesas/atualiza/status/{id}", ([FromRoute] string id, [FromServices] AppDbContext context) => 
{
    Mesa? mesa = context.Mesas.FirstOrDefault(m => m.Id.ToString() == id.ToString());

    if (mesa is null)
    {
        return Results.NotFound("Mesa não encontrada!");
    }

    mesa.Status = mesa.Status == "Livre" ? "Ocupada" : "Livre";

    context.Mesas.Update(mesa);
    context.SaveChanges();

    return Results.Ok($"Status da mesa atualizado com sucesso! Status da mesa: {mesa.Status}");
});


//Remoção de Mesa Cadastrada
app.MapDelete("/api/mesa/deletar/{id}", ([FromRoute] string id,
    [FromServices] AppDbContext context) =>
{
    Mesa? mesa = context.Mesas.FirstOrDefault(x => x.Id == id);

    if (mesa is null)
    {
        return Results.NotFound("Mesa não encontrada!");
    }
    context.Mesas.Remove(mesa);
    context.SaveChanges();
    return Results.Ok("Mesa deletada");
});



app.Run();
