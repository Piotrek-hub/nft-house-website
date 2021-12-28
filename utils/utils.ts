import axios from "axios"
import ABI from "../abis/RealEstateContractABI.json"
const Web3 = require('web3')

export const checkWeb3 = () => {
    if (window.ethereum) {
        return new Web3(window.ethereum);
    } else if (window.web3) {
        return new Web3(window.web3.currentProvider);
    } else {
        window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
        return false;
    }
}

export const fetchData = (url: string) => {

    return axios.get(url)
    .then(resp => {
        return resp.data  
    })
}

export const createContractConnection = (window: any, contractAddress: string) => {
    if (checkWeb3())
    window.web3 = checkWeb3();
    else
        return

    const web3 = window.web3
    const contract = new web3.eth.Contract(ABI, contractAddress)
    return contract
}

export const copyAccount = (address: string): string => `${address.slice(0, 5)}...${address.slice(address.length - 3, address.length)} `

