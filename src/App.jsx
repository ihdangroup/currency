import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [rates, setRates] = useState([]);
  const country = ["CAD", "EUR", "IDR", "JPY", "CHF", "GBP"];
  useEffect(() => {
    function fetchData() {
      fetch(
        "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=adf4d11245854c37a634263d713b950b"
      )
        .then((res) => res.json())
        .then((response) => setRates(response.rates))
        .catch((err) => console.log(err));
    }
    fetchData();
  }, []);
  return (
    <>
      <div className="container">
        <table cellPadding="10px">
          <tr>
            <th>Currency</th>
            <th>We Buy</th>
            <th>Exchange Rate</th>
            <th>We Sell</th>
          </tr>
          {country.map((count) => (
            <tr key={count}>
              <td>{count}</td>
              <td>
                {(
                  parseFloat((rates[count] * 5) / 100) +
                  parseFloat(rates[count])
                ).toFixed(4)}
              </td>
              <td>{Number(rates[count]).toFixed(4)}</td>
              <td>
                {(
                  parseFloat(rates[count]) -
                  parseFloat((rates[count] * 5) / 100)
                ).toFixed(4)}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}

export default App;
