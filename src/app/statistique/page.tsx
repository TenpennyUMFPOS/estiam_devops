"use client"
import React, { useState, useEffect } from "react";
import "./styles.css";
import Coin from "../../components/Statistique/coin";

function App() {

const [coins, setCoins]=useState([]);
const [search,setSearch]=useState('');

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false")
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    setCoins(data);
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
  },[]);
  
  const handleChange = e=>{
  setSearch(e.target.value);
  }

  const filteredCoins= coins.filter ( coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  return(
  <div className="coin-app">
    <div className="coin-search">
      <h1 className="coin-text">Search a currency</h1>
      <form>
        <input type="text" className="coin-input" placeholder="Search" onChange={handleChange}/>
      </form>
    </div>
    {filteredCoins.map(coin=>{
      return ( 
        <Coin key={coin.id}
            name={coin.name}
             image={coin.image}
             symbol={coin.symbol}
             price={coin.current_price}
             volume={coin.total_volume}
             priceChange={coin.price_change_percentage_24h}
             marketcap={coin.market_cap}
             />
      )
    })}
  </div>
  );
}

export default App;