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
        //Endpoint com várias linhas de código
        Cliente? cliente = context.Clientes.FirstOrDefault(x => x.Id == id);

        if (cliente is null)
        {
            return Results.NotFound("Cliente não encontrado!");
        }
        return Results.Ok(cliente);
    });

//Atualização de dados do Cliente
app.MapPut("/api/cliente/atualizar/{id}", () => 
{

});

//Cadastro de mesas
app.MapPost("/api/mesas/cadastrar", () => 
{

});

//Cadastro de estabelecimento
app.MapPost("/api/estabelecimento/cadastrar", () => 
{

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


//Visualização de status das mesas
app.MapGet("/api/mesas/listar", () => 
{

});

//Atualização de status da mesa (Ocupada, Livre ou Reservada)
app.MapPut("/api/mesas/{id}/status", () => 
{

});

//Remoção de Mesa Cadastrada
app.MapDelete("/api/mesas/deletar/{id}", () => 
{

});



app.Run();
