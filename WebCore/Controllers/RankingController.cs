using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using WebCore.Contexts;
using WebCore.Models;

namespace WebCore.Controllers
{
    public class RankingController : Controller
    {
        public IActionResult Index()
        {
            ViewData["Account"] = HttpContext.Session.GetString("Account");

            List<RankPlayer> top;

            using (GameContext game = new GameContext())
            {
                var player = (from p in game.Players
                              orderby p.TotalExperience descending
                              select p).Take(50);

                top = new List<RankPlayer>();

                int rank = 1;
                foreach (var p in player)
                {
                    string rLevel = "Benginer";
                    if (p.Level == 0)
                    {
                        rLevel = "Benginer";
                    }
                    else if (p.Level <= 20)
                    {
                        rLevel = "Rookie";
                    }
                    else if (p.Level <= 40)
                    {
                        rLevel = "Semi-Pro";
                    }
                    else if (p.Level <= 80)
                    {
                        rLevel = "Pro";
                    }
                    else if (p.Level <= 120)
                    {
                        rLevel = "S1";
                    }
                    else if (p.Level <= 160)
                    {
                        rLevel = "S2";
                    }
                    else if (p.Level <= 200)
                    {
                        rLevel = "S3";
                    }
                    else if (p.Level <= 240)
                    {
                        rLevel = "S4";
                    }
                    var pp = new RankPlayer()
                    {
                        Id = p.Id,
                        Rank = rank,
                        Name = "",
                        Level = rLevel,
                        Exp = p.TotalExperience
                    };
                    top.Add(pp);
                }

            }
            using (AuthContext auth = new AuthContext())
            {
                var player = from a in auth.Accounts
                             join p in top on a.Id equals p.Id
                             select new RankPlayer()
                             {
                                 Id = p.Id,
                                 Rank = p.Rank,
                                 Name = a.Nickname,
                                 Level = p.Level,
                                 Exp = p.Exp
                             };
                ViewData["Rank"] = player.ToList();
            }

            return View();
        }
    }
}