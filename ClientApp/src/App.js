import logo from "./assets/logo.png";
import "./App.css";
import { useState, useEffect } from "react";
import ProductCard from "./components/productCard";
function App() {
  const [selectedProduct, setSelectedProduct] = useState("Twenty-sided Die");

  useEffect(() => {
    console.log(selectedProduct);
  }, [selectedProduct]);

  return (
    <div className="App">
      <div className="header">
        <img src={logo} alt="App Logo" className="appLogo" />
        <div className="selectbox">
          <select
            className="select"
            onChange={(e) => {
              setSelectedProduct(e.target.value);
            }}
          >
            <option value="Twenty-sided Die">Twenty-sided Die</option>
            <option value="Dictionary">Dictionary</option>
            <option value="Laptop">Laptop</option>
            <option value="Yogurt">Yogurt</option>
            <option value="Chair">Chair</option>
          </select>
          <span className="selectarrow"></span>
        </div>
      </div>

      <ProductCard product={selectedProduct} />
    </div>
  );
}

export default App;
