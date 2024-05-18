using Microsoft.EntityFrameworkCore;
using ProjetoControleMesas;

public class AppDbContext : DbContext
{
    public DbSet<Cliente> Clientes { get; set; }
    public DbSet<Estabelecimento> Estabelecimentos { get; set; }
    public DbSet<Mesa> Mesas { get; set; }
    public DbSet<Modalidade> Modalidades { get; set; }
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlite("Data Source=ControleDeMesas.db");
    }
}