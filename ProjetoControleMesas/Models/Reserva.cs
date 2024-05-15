using System.ComponentModel.DataAnnotations;

namespace ProjetoControleMesas;

public class Reserva
{
    public Reserva()
    {
        CriadoEm = DateTime.Now;
        Id = Guid.NewGuid().ToString();
    }

    public Reserva(Estabelecimento estabelecimento, DateTime datahora, int ocupantes, Mesa mesa, Cliente cliente)
    {
        Estabelecimento = estabelecimento;
        DataHora = datahora;
        Ocupantes = ocupantes;
        Mesa = mesa;  
        Cliente = cliente;
        Id = Guid.NewGuid().ToString();
    }

    
    public string? Id { get; set; }
    
    public Estabelecimento Estabelecimento { get; set; }

    public DateTime DataHora { get; set;}

    public int Ocupantes { get; set; }

    public Mesa Mesa { get; set; }

    public Cliente Cliente { get; set; }
    
    public DateTime CriadoEm { get; set; }

}

