using System.Collections;
using System.ComponentModel.DataAnnotations;

namespace ProjetoControleMesas;

public class Estabelecimento
{
    public Estabelecimento()
    {
        Id = Guid.NewGuid().ToString();
        CriadoEm = DateTime.Now;
    }

    public Estabelecimento(string nome, string endereco)
    {
        Id = Guid.NewGuid().ToString();
        Nome = nome;
        Endereco = endereco;
        CriadoEm = DateTime.Now;
    }

    
    public string? Id { get; set; }
    
    [Required(ErrorMessage = "Este campo é obrigatório!")]
    public string Nome { get; set; }
    [Required(ErrorMessage = "Este campo é obrigatório!")]
    public string Endereco { get; set; }
    
    public DateTime CriadoEm { get; set; }

}

