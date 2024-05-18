using System.ComponentModel.DataAnnotations;

namespace ProjetoControleMesas;

public class Mesa
{
    public Mesa()
    {
        Status = "Livre";
        CriadoEm = DateTime.Now;
    }
    public Mesa(string id, int capacidade)
    {
        Id = id;
        Capacidade = capacidade ;
        Status = "Livre";
        CriadoEm = DateTime.Now;
    }

    [Required(ErrorMessage = "Este campo é obrigatório!")]
    public string Id { get; set; }
    
    [Required(ErrorMessage = "Este campo é obrigatório!")]
    public int Capacidade { get; set; }
    public string Status { get; set; }
    public DateTime CriadoEm { get; set; }

}

