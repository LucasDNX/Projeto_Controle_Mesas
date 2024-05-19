using System.Collections;
using System.ComponentModel.DataAnnotations;

namespace ProjetoControleMesas;

public class Estabelecimento
{
    public int Id { get; set; }

    [Required(ErrorMessage = "Este campo é obrigatório!")]
    public string? Nome { get; set; }

    [Required(ErrorMessage = "Este campo é obrigatório!")]
    public string? Endereco { get; set; }

    public DateTime CriadoEm { get; set; } = DateTime.Now;

    //
    //public ICollection<Cliente> Clientes { get; set; }
    //public ICollection<Mesa> Mesas { get; set; }
    //public ICollection<Modalidade> Modalidades { get; set; }
}

