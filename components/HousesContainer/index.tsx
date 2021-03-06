import {
    Grid,
    Flex,
    Button,
    Badge,
    Heading,
    Text,
    Box
} from "@chakra-ui/react"

import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { checkWeb3, fetchData } from "../../utils/utils"

import ABI from "../../abis/RealEstateContractABI.json"
import House from "../House";
import { SearchInterface, HouseProps } from "../../types/interfaces"
import { fetchHouses } from "../../utils/utils";

const Web3 = require("web3")



function HousesContainer() {
    const [mainHouses, setMainHouses] = useState<Array<HouseProps>>([])
    const [houses, setHouses] = useState<Array<HouseProps>>([])
    const { location, type, price }: SearchInterface = useSelector((state: any) => state.search);

    useEffect(() => {
        if (location) {
            setHouses(mainHouses.filter((house) => (house.location.toLowerCase() === location.toLowerCase())))
        } else {
            setHouses(mainHouses)
        }

    }, [location, type, price])

    useEffect(() => {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
        } else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider);
        } else {
            window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
            return
        }
        fetchHouses()
          .then(res=>{
              setMainHouses(res);
              setHouses(res);
          })
    }, [])

    return (
        <Grid mt="100" w="100%" templateColumns={['repeat(4, 1fr)']} gap={3}>
            {houses.map((house) => {
                return (
                    <Box w='100%' alignItems='center' justifyContent="space-around" display='flex' >
                        <House
                            id={house.id}
                            key={house.id}
                            title={house.title}
                            type={house.type}
                            location={house.location}
                            price={house.price}
                            imageUrl={house.imageUrl}
                            owner={house.owner}
                        />
                    </Box>
                )
            })}
        </Grid>
    )
}

export default HousesContainer;