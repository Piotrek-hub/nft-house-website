import axios from "axios"
import ABI from "../abis/RealEstateContractABI.json"
import { HouseProps, ProfileInfo } from "../types/interfaces"
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

export const fetchHouses = async () => {
    const contract = createContractConnection(window, "0xDB7Cd8BcDa293ed8d8748Be5fF39dd708AC9b955");

    let houses: Array<HouseProps> = []
    // Add houses 
    let housesRes = await contract.getPastEvents('houseAdded', {
        fromBlock: 0,
        toBlock: 'latest'
    }, function (error: Error, events: any) { console.log(error) })
        .then(async (events: any) => {
            for (const event of events) {
                const houseData = await fetchData(event.returnValues.houseURI);
                houses.push({ ...houseData, id: event.returnValues.houseId })
            }
        })
        .then(async () => {
            // Remove houses 
            await contract.getPastEvents('houseSold', {
                fromBlock: 0,
                toBlock: 'latest'
            }, function (error: Error, events: Array<Event>) { console.log(error) })
                .then(async (events: any) => {
                    for (const event of events) {
                        houses = houses.filter((_, idx) => (Number(event.returnValues.houseId) - 1 !== idx ))
                    }
                })
            return houses;
        })
    return housesRes;
}


export const fetchProfileInfo = () => {
    const contract = createContractConnection(window, "0xDB7Cd8BcDa293ed8d8748Be5fF39dd708AC9b955");
    let profile:ProfileInfo;
    contract.getPastEvents('houseSold', {
        fromBlock: 0,
        toBlock: 'latest',
    })
}