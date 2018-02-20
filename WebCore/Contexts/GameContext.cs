using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MySql.Data.EntityFrameworkCore;

namespace WebCore.Contexts
{
    public class GameContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySQL(Program.Configuration["ConnectionStrings:Game"]);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Player>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.AP)
                .IsRequired();
                entity.Property(e => e.Coins1)
                .IsRequired();
                entity.Property(e => e.Coins2)
                .IsRequired();
                entity.Property(e => e.CurrentCharacterSlot)
                .IsRequired();
                entity.Property(e => e.Level)
                .IsRequired();
                entity.Property(e => e.PEN)
                .IsRequired();
                entity.Property(e => e.TotalExperience)
                .IsRequired();
                entity.Property(e => e.TutorialState)
                .IsRequired();
            });
        }

        public DbSet<Player> Players { get; set; }
    }

    public class Player
    {
        public int Id { get; set; }

        public int TutorialState { get; set; }

        public int Level { get; set; }

        public int TotalExperience { get; set; }

        public int PEN { get; set; }

        public int AP { get; set; }

        public int Coins1 { get; set; }

        public int Coins2 { get; set; }

        public int CurrentCharacterSlot { get; set; }
    }
}
