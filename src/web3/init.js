import Web3 from 'web3';
import { config } from './config';

export async function initContract() {
    window.web3 = new Web3(window.ethereum);
    await window.ethereum.enable();

    window.userAddress = (
        await window.web3.eth.getAccounts()
    )[0];

    window.couponFactory = new window.web3.eth.Contract(
        config.couponFactoryAbi,
        config.couponFactoryAddress,
        { from: window.userAddress }
    );    

    window.tokenFaucet = new window.web3.eth.Contract(
        config.tokenFaucetAbi,
        config.tokenFaucetAddress,
        { from: window.userAddress }
    );

    window.ethInitialized = true;

    window.ethereum.on('accountsChanged', () => {
        window.location.reload();
    });
}