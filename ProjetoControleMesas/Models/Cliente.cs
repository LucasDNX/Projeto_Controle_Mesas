using System.ComponentModel.DataAnnotations;

namespace ProjetoControleMesas;

public class Cliente
{
    public int Id { get; set; }

    [Required(ErrorMessage = "Este campo é obrigatório!")]
    public string? Nome { get; set; }

    public string? Endereco { get; set; }

    [Required(ErrorMessage = "Este campo é obrigatório!")]
    public string? Telefone { get; set; }

    public DateTime CriadoEm { get; set; } = DateTime.Now;

    // Foreign Key
    public int EstabelecimentoId { get; set; }
    public Estabelecimento? Estabelecimento { get; set; }

}

