using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebCore.Models
{
    public class Register
    {
        public string user { get; set; }
        [DataType(DataType.Password)]
        public string pwd { get; set; }
        [DataType(DataType.Password)]
        public string pwd2 { get; set; }
        public string name { get; set; }
        public string lastname { get; set; }
        public string country { get; set; }
        [DataType(DataType.EmailAddress)]
        public string mail { get; set; }
    }
}
