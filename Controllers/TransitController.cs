using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace gsoft_dotnet.Controllers
{
    [ApiController]
    public class TransitController : ControllerBase
    {
        public static Models.Transits transitList = new Models.Transits();

        public static Models.Products productList = new Models.Products();

        // Read json data from the file
        public static float CalculateDistance(Models.Product product)
        {
            // split source by comma
            string[] sourceArray = product.factoryLocation.Split(',');
            string[] destinationArray = product.destination.Split(',');

            // convert string to float
            float sourceX = float.Parse(sourceArray[0]);
            float sourceY = float.Parse(sourceArray[1]);
            float destinationX = float.Parse(destinationArray[0]);
            float destinationY = float.Parse(destinationArray[1]);

            // calculate distance
            float distance =
                (float)
                Math
                    .Sqrt(Math.Pow(destinationX - sourceX, 2) +
                    Math.Pow(destinationY - sourceY, 2));
            return distance;
        }

        public static void ReadData()
        {
            var transit_path = @"./Data/Transits.json";
            string json = System.IO.File.ReadAllText(transit_path);
            transitList =
                Newtonsoft
                    .Json
                    .JsonConvert
                    .DeserializeObject<Models.Transits>(json);
            var product_path = @"./Data/Products.json";
            json = System.IO.File.ReadAllText(product_path);
            productList =
                Newtonsoft
                    .Json
                    .JsonConvert
                    .DeserializeObject<Models.Products>(json);
        }

        [HttpGet]
        [Route("api/products")]
        public Models.Products GetAllProducts()
        {
            ReadData();
            return productList;
        }

        [HttpGet]
        [Route("api/transits")]
        public Models.Transits GetAllTransits()
        {
            ReadData();

            return transitList;
        }

        [HttpGet]
        [Route("api/ideal_transit")]
        public Models.IdealTransit GetIdealTransit(string product_name)
        {
            ReadData();
            var ideal_transit = new Models.IdealTransit();
            foreach (Models.Product product in productList.products.ToList())
            {
                if (
                    String
                        .Equals(product.name.ToLower(), product_name.ToLower())
                )
                {
                    float distance = CalculateDistance(product);

                    float maxProfit = -99999999999999;

                    var possible_transits = transitList.transits.ToList();
                    if (String.Equals(product.type, "Perishable"))
                    {
                        // remove train and boat from possible_transits
                        possible_transits =
                            possible_transits
                                .Where(x =>
                                    !(
                                    x.type.ToLower().Equals("train") ||
                                    x.type.ToLower().Equals("boat")
                                    ))
                                .ToList();
                    }

                    foreach (Models.Transit transit in possible_transits)
                    {
                        var time = (distance / transit.speed);
                        int totalHoursInyear = 24 * 365;

                        var numTransits =
                            (int) Math.Floor(totalHoursInyear / time);
                        var quantityDelivered =
                            (int)(transit.capacity / product.weight) *
                            numTransits;

                        var totalweight_ton =
                            quantityDelivered * product.weight / 1000;

                        var valueDelivered =
                            (float) quantityDelivered * product.value;
                        var transportCost =
                            (float) transit.cost * totalweight_ton;
                        var profit = valueDelivered - transportCost;
                        var profitPercentage = (profit / valueDelivered) * 100;
                        if (maxProfit < profit)
                        {
                            maxProfit = profit;
                            ideal_transit.profitPercentage =
                                (int) profitPercentage;
                            ideal_transit.annualCost = (int) transportCost;
                            ideal_transit.annualQuantity =
                                (int) quantityDelivered;
                            ideal_transit.type = transit.type;
                        }
                    }
                    return ideal_transit;
                }
            }
            ideal_transit.type = "Not Found";
            return ideal_transit;
        }
    }
}
