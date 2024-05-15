using System.Collections;
using System.ComponentModel.DataAnnotations;

namespace ProjetoControleMesas;

public class Estabelecimento
{
    public Estabelecimento()
    {
        Id = Guid.NewGuid().ToString();
        Mesas = new List<Mesa>();
        Modalidades = new List<Modalidade>();
        Clientes = new List<Cliente>();
        Reservas = new List<Reserva>();
        CriadoEm = DateTime.Now;
    }

    public Estabelecimento(string nome, string endereco)
    {
        Id = Guid.NewGuid().ToString();
        Nome = nome;
        Endereco = endereco;
        Mesas = new List<Mesa>();
        Modalidades = new List<Modalidade>();
        Clientes = new List<Cliente>();
        Reservas = new List<Reserva>();
        CriadoEm = DateTime.Now;
    }

    
    public string? Id { get; set; }
    
    

    [Required(ErrorMessage = "Este campo é obrigatório!")]
    public string Nome { get; set; }

    
    public string? Endereco { get; set; }

    [Required(ErrorMessage = "Este campo é obrigatório!")]
    public List<Mesa> Mesas  { get; set; }

    public List<Modalidade> Modalidades  { get; set; }

    public List<Cliente> Clientes  { get; set; }

    public List<Reserva> Reservas  { get; set; }
    
    public DateTime CriadoEm { get; set; }

}

