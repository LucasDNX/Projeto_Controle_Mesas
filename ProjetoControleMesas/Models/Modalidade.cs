using System.ComponentModel.DataAnnotations;

namespace ProjetoControleMesas;

public class Modalidade
{
    public Modalidade()
    {
        CriadoEm = DateTime.Now;
        Id = Guid.NewGuid().ToString();
    }

    public Modalidade(string nome)
    {
        Nome = nome;
        CriadoEm = DateTime.Now;
        Id = Guid.NewGuid().ToString();
    }

    
    public string? Id { get; set; }
    
    

    [Required(ErrorMessage = "Este campo é obrigatório!")]
    public string Nome { get; set; }

    
    public DateTime CriadoEm { get; set; }

}

