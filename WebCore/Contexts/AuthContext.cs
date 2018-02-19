using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.Common;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;
using MySql.Data.EntityFrameworkCore;

namespace WebCore.Contexts
{
    public class AuthContext : DbContext
    {
        public AuthContext()
            : base()
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySQL(Program.Configuration["ConnectionStrings:Auth"]);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Account>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Username).IsRequired();
                entity.Property(e => e.SecurityLevel).IsRequired();
            });
            modelBuilder.Entity<Member>(entity =>
            {
                entity.HasKey(e => e.Id);
            });
        }

        public DbSet<Account> Accounts { get; set; }
        public DbSet<Member> Members { get; set; }
    }

    public class Account
    {
        public int Id { get; set; }

        [MaxLength(40)]
        public string Username { get; set; }

        [MaxLength(40)]
        public string Nickname { get; set; }

        [MaxLength(40)]
        public string Password { get; set; }

        [MaxLength(40)]
        public string Salt { get; set; }

        public int SecurityLevel { get; set; }
    }
    public class Member
    {
        public int Id { get; set; }

        [MaxLength(40)]
        public string Name { get; set; }

        [MaxLength(40)]
        public string LastName { get; set; }

        [MaxLength(40)]
        public string Country { get; set; }

        [MaxLength(40)]
        public string Email { get; set; }

        public int EmailVerified { get; set; }
    }
}
