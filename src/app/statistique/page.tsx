'use client'
import React, { useState, useEffect } from "react";
import "./styles.css";
import Coin from "../../components/Statistique/coin";

function App() {
  const [coins, setCoins] = useState<any[]>([]); // Specify the type as any[] or the specific type of coins data
  const [search, setSearch] = useState('');

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
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  // Check if coins is not null before filtering
  const filteredCoins = coins && coins.filter((coin: any) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  const inputStyle = {
    marginTop: '100px'
  }

  return (
    <div className="coin-app">
      <div className="coin-search">

        <form style={inputStyle}>
          <input type="text" className="coin-input" placeholder="Search" onChange={handleChange} />
        </form>
      </div>
      {filteredCoins && filteredCoins.map((coin: any) => (
        <Coin key={coin.id}
          name={coin.name}
          image={coin.image}
          symbol={coin.symbol}
          price={coin.current_price}
          volume={coin.total_volume}
          priceChange={coin.price_change_percentage_24h}
          marketcap={coin.market_cap}
        />
      ))}
    </div>
  );
}

export default App;
