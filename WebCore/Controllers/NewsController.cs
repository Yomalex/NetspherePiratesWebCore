using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace WebCore.Controllers
{
    public class NewsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult top(string format = "html")
        {
            List<NewItem> News = new List<NewItem>() {
                new NewItem("Prueba1","Pruebas","/dist/img/noticia_0.jpg"),
                new NewItem("Prueba1","Pruebas","/dist/img/noticia_1.jpg"),
                new NewItem("Prueba1","Pruebas","/dist/img/noticia_2.jpg"),
            };

            return Json(News.ToArray());
        }
        public IActionResult all(string format = "html")
        {
            List<NewItem> News = new List<NewItem>() {
                new NewItem("Prueba1","Pruebas","/dist/img/noticia_0.jpg"),
                new NewItem("Prueba1","Pruebas","/dist/img/noticia_1.jpg"),
                new NewItem("Prueba1","Pruebas","/dist/img/noticia_2.jpg"),
            };

            List<NewItem> Events = new List<NewItem>() {
                new NewItem("Events1","Pruebas","/dist/img/noticia_0.jpg"),
                new NewItem("Events2","Pruebas","/dist/img/noticia_1.jpg"),
                new NewItem("Events3","Pruebas","/dist/img/noticia_2.jpg"),
            };

            var Obj = new { news = News.ToArray(), events = Events.ToArray() };

            return Json(Obj);
        }
    }
    public class NewItem
    {
        public string Title { get; private set; }
        public string Text { get; private set; }
        public string Src { get; private set; }

        public NewItem(string sTitle, string sText, string image)
        {
            Title = sTitle;
            Text = sText;
            Src = image;
        }
    }
}