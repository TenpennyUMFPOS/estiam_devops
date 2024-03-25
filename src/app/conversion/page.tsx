"use client"
import React, { useState, useEffect } from 'react';

const ConversionForm = () => {
  const [eurAmount, setEurAmount] = useState('');
  const [ethAmount, setEthAmount] = useState('');



  const handleConversion = async () => {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=eur');
      const data = await response.json();
      const ethToEuro = data.ethereum.eur;
      const convertedEthAmount = parseFloat(eurAmount) / ethToEuro;
      setEthAmount(convertedEthAmount.toString()); // Convertir le résultat en chaîne avant de le stocker
    } catch (error) {
      console.error('Error fetching conversion rate:', error);
    }
  };

  return (

    <div className="container">
      <div className="conversion-form">
        <h2>Convertir EUR en ETH</h2>
        <div className="input-group">
          <input
            type="number"
            value={eurAmount}
            onChange={(e) => setEurAmount(e.target.value)}
            placeholder="Montant en EUR"
            className="eur-input"
          />
          <button onClick={handleConversion} className="convert-button">
            Convertir
          </button>
        </div>
        {ethAmount && (
          <div className="result">
            <p><strong>{eurAmount} EUR</strong> est équivalent à <strong>{ethAmount} ETH</strong></p>
          </div>
        )}
      </div>
      <img src="/images/blog/cryp.png" alt="Your Image" className="right-image" />
      <style jsx global>{`
      
      `}</style>
      <style jsx>{`
      .container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        min-height: 100vh;
      }
      
      .conversion-form {
        margin-top: 50px;
      }
      
      .eur-input {
        margin-right: 10px;
      }
      
      .result {
        margin-top: 20px;
      }
      
        .conversion-form {
          max-width: 500px;
          padding: 20px;
          background: rgba(255, 255, 255, 0.2);
          color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          text-align: center;
        }
        .input-group {
          display: flex;
          gap: 10px;
          margin-top: 20px;
        }
        .eur-input {
          flex-grow: 1;
          padding: 10px;
          border: 2px solid #ffffff;
          border-radius: 4px;
        }
        .convert-button {
          padding: 10px 20px;
          border: none;
          background-color: #ffffff;
          color: #6e8efb;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        .convert-button:hover {
          background-color: #f0e7fd;
          color: #5a57a5;
        }
        .result {
          margin-top: 20px;
          padding: 10px;
          background-color: rgba(255, 255, 255, 0.3);
          border-radius: 4px;
          font-size: 1.2em;
        }
        .right-image {
          height:30%;
          width: 40%;
      
          

        }
      `}</style>
    </div>
  );
};

export default ConversionForm;
