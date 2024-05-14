using System.ComponentModel.DataAnnotations;

namespace ProjetoControleMesas;

public class Cliente
{
    public Cliente()
    {
        CriadoEm = DateTime.Now;
        Id = Guid.NewGuid().ToString();
    }

    public Cliente(string nome, string endereco, string telefone)
    {
        Id = Guid.NewGuid().ToString();
        Nome = nome;
        Endereco = endereco;
        Telefone = telefone;
        CriadoEm = DateTime.Now;
    }

    
    public string Id { get; set; }
    
    [Required(ErrorMessage = "Este campo é obrigatório!")]
    public string Nome { get; set; }

    public string? Endereco { get; set; }

    [Required(ErrorMessage = "Este campo é obrigatório!")]
    public string Telefone { get; set; }
    
    public DateTime CriadoEm { get; set; }

}

