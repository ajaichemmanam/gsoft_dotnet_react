using System;
using System.Collections.Generic;

namespace gsoft_dotnet.Models
{
    public class Product
    {
        public string name { get; set; }
        public string factoryLocation { get; set; }
        public string destination { get; set; }
        public float weight { get; set; }
        public float value { get; set; }
        public string type { get; set; }

    }

    public class Products
    {
        public List<Product> products { get; set; }
    }
}