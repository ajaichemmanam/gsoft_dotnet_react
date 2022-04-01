import planeLogo from "../assets/plane.png";
import planeQuantity from "../assets/plane-quantity-background.png";
import planeProfit from "../assets/plane-profit-background.png";
import boatLogo from "../assets/boat.png";
import boatQuantity from "../assets/boat-quantity-background.png";
import boatProfit from "../assets/boat-profit-background.png";
import trainLogo from "../assets/train.png";
import trainQuantity from "../assets/train-quantity-background.png";
import trainProfit from "../assets/train-profit-background.png";
import truckLogo from "../assets/truck.png";
import truckQuantity from "../assets/truck-quantity-background.png";
import truckProfit from "../assets/truck-profit-background.png";
import { useState, useEffect } from "react";
import axios from "axios";

function ProductCard({ product }) {
  const [logoImg, setLogoImg] = useState(planeLogo);
  const [quantityImg, setQuantityImg] = useState(planeQuantity);
  const [profitImg, setProfitImg] = useState(planeProfit);

  const [transport, setTransport] = useState("Plane");
  const [profit, setProfit] = useState("8 534");
  const [cost, setCost] = useState("17 348.00");
  const [quantity, setQuantity] = useState("+ 78");

  const FormatNumber = (amount) => {
    var delimiter = " "; // replace comma if desired
    var a = String(amount).split(".");
    let i = a[0];
    let m = a[1];
    let j = i.length % 3;
    let l = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + delimiter);
    if (a.length > 1) {
      return l + "." + m;
    } else {
      return l;
    }
  };

  useEffect(() => {
    axios
      .get("https://localhost:7236/api/ideal_transit?product_name=" + product)
      .then((response) => {
        console.log(response);
        setTransport(response.data.type);
        setProfit(response.data.profitPercentage);
        setCost(response.data.annualCost);
        setQuantity(response.data.annualQuantity);
      });
    // Fetch Data from api here
  }, [product]);

  useEffect(() => {
    if (transport === "Plane") {
      setLogoImg(planeLogo);
      setQuantityImg(planeQuantity);
      setProfitImg(planeProfit);
    } else if (transport === "Boat") {
      setLogoImg(boatLogo);
      setQuantityImg(boatQuantity);
      setProfitImg(boatProfit);
    } else if (transport === "Train") {
      setLogoImg(trainLogo);
      setQuantityImg(trainQuantity);
      setProfitImg(trainProfit);
    } else if (transport === "Truck") {
      setLogoImg(truckLogo);
      setQuantityImg(truckQuantity);
      setProfitImg(truckProfit);
    }
    // Fetch Data from api here
  }, [transport]);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div
        className="quantityCard"
        style={{
          backgroundImage: `url(${quantityImg})`,
        }}
      >
        <div className="mainHead">{FormatNumber(quantity)}</div>
        <div className="subHead">Shipped annually</div>
      </div>
      <div className="costCard">
        <div className="mainHead">{FormatNumber(cost)}$</div>
        <div className="subHead">Annual shipping cost</div>
        <div className="divider"></div>
        <div style={{ display: "flex" }}>
          <img src={logoImg} className="transportLogo" alt="transport logo" />
          <div className="subHead" style={{ marginLeft: "32px" }}>
            {transport}
          </div>
        </div>
      </div>
      <div
        className="profitCard"
        style={{
          backgroundImage: `url(${profitImg})`,
        }}
      >
        <div className="mainHead">{profit}%</div>
        <div className="subHead">Profit percentage</div>
      </div>
    </div>
  );
}

export default ProductCard;
