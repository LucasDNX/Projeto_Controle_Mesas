using System.ComponentModel.DataAnnotations;

namespace ProjetoControleMesas;

public class Mesa
{

    [Required(ErrorMessage = "Este campo é obrigatório!")]
    public int Id { get; set; }

    [Required(ErrorMessage = "Este campo é obrigatório!")]
    public int Capacidade { get; set; }

    public string Status { get; set; } = "Livre";

    public DateTime CriadoEm { get; set; } = DateTime.Now;

    // Foreign Key estabelecimento
    public int EstabelecimentoId { get; set; }
    public Estabelecimento? Estabelecimento { get; set; }

    // Foreign Key modalidade
    public int ModalidadeId { get; set; }
    public Modalidade? Modalidade { get; set; }

}

