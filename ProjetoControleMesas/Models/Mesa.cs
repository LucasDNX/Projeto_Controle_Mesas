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
    public Mesa(int capacidade, string status)
    {
        Capacidade = capacidade ;
        Status = status;
        CriadoEm = DateTime.Now;
        Id = Guid.NewGuid().ToString();
    }

    public string Id { get; set; }
    public int Capacidade { get; set; }

    [Required(ErrorMessage = "Este campo é obrigatório!")]
    public string Status { get; set; }
    public DateTime CriadoEm { get; set; }

}

