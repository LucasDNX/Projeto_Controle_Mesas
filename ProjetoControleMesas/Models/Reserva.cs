using System.ComponentModel.DataAnnotations;

namespace ProjetoControleMesas;

public class Reserva
{
    public Reserva()
    {
        CriadoEm = DateTime.Now;
        Id = Guid.NewGuid().ToString();
    }

    public Reserva( DateTime datahora, int ocupantes)
    {
        DataHora = datahora;
        Ocupantes = ocupantes;
        Id = Guid.NewGuid().ToString();
    }

    
    public string? Id { get; set; }

    public DateTime DataHora { get; set;}

    public int Ocupantes { get; set; }

    public DateTime CriadoEm { get; set; }

}

