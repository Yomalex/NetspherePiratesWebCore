using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebCore.Models;
using WebCore.Contexts;
using MySql.Data.MySqlClient;
using System.Security.Cryptography;

namespace WebCore.Controllers
{
    public class RegisterController : Controller
    {
        public IActionResult Index()
        {
            ViewData["AlertShow"] = "none";
            ViewData["AlertMsg"] = "";
            return View();
        }

        [HttpPost]
        public IActionResult Index(Register registro)
        {
            ViewData["AlertShow"] = "none";
            ViewData["AlertMsg"] = "";
            if (registro.pwd!=registro.pwd2)
            {
                ViewData["AlertShow"] = "block";
                ViewData["AlertMsg"] = "Las claves no coinciden";
                return View();
            }

            
            using (AuthContext auth = new AuthContext())
            {
                var AccountsQueryable = from a in auth.Accounts
                                        where a.Username.ToLower() == registro.user.ToLower()
                                        select true;

                var MembersQueryable = from a in auth.Members
                                       where a.Email.ToLower() == registro.mail.ToLower()
                                       select true;
                if(AccountsQueryable.Count()>0)
                {
                    ViewData["AlertShow"] = "block";
                    ViewData["AlertMsg"] = $"El Usuario '{registro.user}' ya existe";
                    return View();
                }
                if(MembersQueryable.Count()>0)
                {
                    ViewData["AlertShow"] = "block";
                    ViewData["AlertMsg"] = $"El Correo electronico '{registro.mail}' ya esta en uso";
                    return View();
                }
                

                var newSalt = new byte[24];
                using (var csprng = new RNGCryptoServiceProvider())
                    csprng.GetBytes(newSalt);

                var hash = new byte[24];
                using (var pbkdf2 = new Rfc2898DeriveBytes(registro.pwd, newSalt, 24000))
                    hash = pbkdf2.GetBytes(24);

                var account = new Account();
                var member = new Member();

                account.Username = registro.user;
                account.Password = Convert.ToBase64String(hash);
                account.Salt = Convert.ToBase64String(newSalt);
                member.Name = registro.name;
                member.LastName = registro.lastname;
                member.Country = registro.country;
                member.EmailVerified = 0;
                member.Email = registro.mail;

                auth.Accounts.Add(account);
                auth.SaveChanges();
                member.Id = account.Id;
                auth.Members.Add(member);
                auth.SaveChanges();
            }

            return Redirect("~/");
        }
    }
}