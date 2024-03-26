"use client";
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

const WalletPage = () => {
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const initWeb3Modal = async () => {
      try {
        const web3Modal = new Web3Modal({
          network: "mainnet", // You can change this to other networks
          cacheProvider: true,
          providerOptions: {
            walletconnect: {
              package: WalletConnectProvider,
              options: {
                infuraId: "325f2526c8f843c0fd8f5252b82a5bb3", // Replace with your Infura ID from environment variables
              },
            },
          },
        });

        const instance = await web3Modal.connect();
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const tempAddress = await signer.getAddress();
        setAddress(tempAddress);

        const tempBalance = await provider.getBalance(tempAddress);
        const formattedBalance = (
          BigInt(tempBalance) / BigInt(10 ** 18)
        ).toString();

        setBalance(formattedBalance);
      } catch (error) {
        setError("Error connecting to wallet provider.");
        console.error("Error connecting to wallet provider:", error);
      }
    };

    initWeb3Modal();
  }, []);

  return (
    <section
      id="wallet"
      className="flex items-center justify-center overflow-hidden py-16 md:py-20 lg:py-28"
    >
      <div className="container" style={{ maxWidth: "65%" }}>
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
              <h2 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Your Wallet
              </h2>
              <p className="mb-12 text-center text-base font-medium text-body-color">
                Address: {address}
              </p>
              <p className="mb-12 text-center text-base font-medium text-body-color">
                Balance: {balance} ETH
              </p>
              {error && (
                <div className="mb-4 text-center text-red-500">{error}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WalletPage;
