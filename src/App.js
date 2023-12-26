import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";
function App() {
  const [value, setvalue] = useState("");
  const [coins, setCoins] = useState([]);
  const [input, setinput] = useState(0);
  const fetching = (tar)=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
      const results = json.filter((bit)=>{
      return (bit.name.toLowerCase().includes(tar.toLowerCase()));
    })
    setCoins(results);
    console.log(results)
      });
  }
  const onChange = (e) =>{
    setvalue((cur)=>e.target.value)
    fetching(e.target.value)
    
  }
  const changes= (e) =>{
    setinput((cur)=>e.target.value)
  }
  return (
    <div>
      <h3>Enter your USD</h3>
      <input value={input} onChange={changes} placeholder="Enter USD"></input>
      <h3>Search your crypto</h3>
      <input value={value} onChange={onChange} type="text"></input>
      {coins.map((item, value) => (
        <li>
          {item.name}, {(input / item.quotes.USD.price).toFixed(2)} {item.symbol}
        </li>
      ))}
    </div>
  );
}

export default App;
