using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebCore.Models;
using WebCore.Contexts;
using System.Security.Cryptography;
using Microsoft.AspNetCore.Http;
using System.Web;

namespace WebCore.Controllers
{
    public class AccountController : Controller
    {
        public IActionResult Index()
        {
            ViewData["Account"] = HttpContext.Session.GetString("Account");
            if (ViewData["Account"] == null)
                return Redirect("~/");

            return View();
        }

        [HttpPost]
        public IActionResult Login(Login info)
        {
            using (AuthContext auth = new AuthContext())
            {
                var account = from a in auth.Accounts
                              where a.Username.ToLower() == info.user.ToLower()
                              select a;
                bool pwdOk = false;
                if(account.Count()>0)
                {
                    var acc = account.ToArray()[0];

                    var hash = new byte[24];
                    using (var pbkdf2 = new Rfc2898DeriveBytes(info.pwd, Convert.FromBase64String(acc.Salt), 24000))
                        hash = pbkdf2.GetBytes(24);

                    if(acc.Password==Convert.ToBase64String(hash))
                    {
                        pwdOk = true;
                        HttpContext.Session.SetInt32("Id", acc.Id);
                        HttpContext.Session.SetString("Account", acc.Username);
                    }
                }

                if(!pwdOk)
                {
                    ViewData["message"] = new ModalMessage("danger","Usuario o Contraseña incorrecto");
                    return View();
                }
            }
                return Redirect(Request.Headers["Referer"].ToString());
        }
        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return Redirect("~/");
        }
    }
}