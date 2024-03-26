"use client";
import React, { useState, useEffect } from "react";

const ConversionForm = () => {
  const [eurAmount, setEurAmount] = useState("");
  const [ethAmount, setEthAmount] = useState("");

  const handleConversion = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=eur"
      );
      const data = await response.json();
      const ethToEuro = data.ethereum.eur;
      const convertedEthAmount = parseFloat(eurAmount) / ethToEuro;
      setEthAmount(convertedEthAmount.toString()); // Convertir le résultat en chaîne avant de le stocker
    } catch (error) {
      console.error("Error fetching conversion rate:", error);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row lg:justify-between items-center">
        <div className="lg:w-1/2">
          <div className="conversion-form max-w-md lg:ml-8">
            <h2 className="text-2xl font-semibold mb-4">
              Convertir EUR en ETH
            </h2>
            <div className="input-group">
              <input
                type="number"
                value={eurAmount}
                onChange={(e) => setEurAmount(e.target.value)}
                placeholder="Montant en EUR"
                className="eur-input flex-grow py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
              />
              <button
                onClick={handleConversion}
                className="convert-button py-2 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition-colors duration-300"
              >
                Convertir
              </button>
            </div>
            {ethAmount && (
              <div className="result mt-4 p-4 bg-blue-400 rounded-md">
                <p>
                  <strong>{eurAmount} EUR</strong> est équivalent à{" "}
                  <strong>{ethAmount} ETH</strong>
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="lg:w-1/2 lg:mt-8">
          <img
            src="/images/blog/cryp.png"
            alt="Your Image"
            className="right-image lg:ml-8 mt-8"
          />
        </div>
      </div>
    </div>
  );
};

export default ConversionForm;
