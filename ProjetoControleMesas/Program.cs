using System.ComponentModel.DataAnnotations;
//using ProjetoControleMesas.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjetoControleMesas;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<AppDbContext>();

var app = builder.Build();

//Cadastro de clierntes
app.MapPost("/api/cliente/cadastrar", () => 
{
    string Teste = "Wello word!";
});

//Visualização de clientes
app.MapGet("/api/cliente/listar", () => 
{

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
app.MapPost("/api/modalidade-mesa/cadastrar", ([FromServices] AppDbContext context) => 
{
    
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
