'use client'
import { useEffect, useState } from 'react';
import web3 from '../../api/web3/wallet-web3';

export default function WalletInfo() {
    const [address, setAddress] = useState('');
    const [balance, setBalance] = useState('');

    useEffect(() => {
        async function loadWeb3Data() {
            // Obtenir l'adresse Ethereum de l'utilisateur
            const accounts = await web3.eth.getAccounts();
            setAddress(accounts[0]);

            // Obtenir le solde Ethereum du compte
            const ethBalance = await web3.eth.getBalance(accounts[0]);
            setBalance(web3.utils.fromWei(ethBalance, 'ether'));
        }

        loadWeb3Data();
    }, []);

    return (
        <div>
            <h2>Adresse Ethereum: {address}</h2>
            <h2>Solde ETH: {balance} ETH</h2>
        </div>
    );
}
