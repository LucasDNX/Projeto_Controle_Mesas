using System.ComponentModel.DataAnnotations;

namespace ProjetoControleMesas;

public class Mesa
{
    public Mesa()
    {
        CriadoEm = DateTime.Now;
        Id = Guid.NewGuid().ToString();
    }
    // Mesa mesa1 = new Mesa(buscarEstabelecimento(), 3, BuscarModalidade(), livre)
    public Mesa(Estabelecimento estabelecimento, int capacidade, Modalidade modalidade, string status)
    {
        Estabelecimento = estabelecimento;
        Capacidade = capacidade ;
        Modalidade = modalidade;
        Status = status;
        CriadoEm = DateTime.Now;
        Id = Guid.NewGuid().ToString();
    }

    public string Id { get; set; }
    
    [Required(ErrorMessage = "Este campo é obrigatório!")]

    public Estabelecimento Estabelecimento { get; set; }

    public int Capacidade { get; set; }

    [Required(ErrorMessage = "Este campo é obrigatório!")]
    public Modalidade Modalidade { get; set; }

    [Required(ErrorMessage = "Este campo é obrigatório!")]
    public string Status { get; set; }

    public DateTime CriadoEm { get; set; }

}

