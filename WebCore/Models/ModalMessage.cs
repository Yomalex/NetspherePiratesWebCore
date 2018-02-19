using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebCore.Models
{
    public class ModalMessage
    {
        public string status { get; private set; }
        public string type { get; private set; }
        public string message { get; set; }

        public ModalMessage(string Type, string Message)
        {
            this.type = $"alert alert-{Type}";
            this.message = Message;
            if(Message.Length>0)
            {
                status = "block";
            }else
            {
                status = "none";
            }
        }
    }
}
