import Web3 from 'web3';

let web3;

// Vérifier si Web3 est injecté par MetaMask
if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
    // Utiliser MetaMask's provider
    web3 = new Web3(window.ethereum);
    try {
        // Demander à l'utilisateur l'autorisation d'accéder à leur compte
        window.ethereum.enable();
    } catch (error) {
        // L'utilisateur a rejeté l'accès
        console.error('User denied account access');
    }
} else {
    // Fallback si MetaMask n'est pas disponible
    const provider = new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/YOUR_INFURA_PROJECT_ID');
    web3 = new Web3(provider);
}

export default web3;
