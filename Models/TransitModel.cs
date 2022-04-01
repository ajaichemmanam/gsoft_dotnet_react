using System;
using System.Collections.Generic;

namespace gsoft_dotnet.Models
{

  
    public class Transit
    {
        public string type { get; set; }
        public int capacity { get; set; }
        public int cost { get; set; }
        public int speed { get; set; }
    }

      public class Transits {
        public List<Transit> transits { get; set; }
    }

  
}