import {
    Image,
    Box,
    Flex,
    Heading,
    Text,
    Grid
} from "@chakra-ui/react"

import copyAccount from "../../utils/copyAccount"
import { FaEthereum } from "react-icons/fa"
import {useState} from "react"

import House from "../House/"
interface HouseProps {
    title: string;
    type: "house" | "apartment";
    location: string;
    price: number;
    imageUrl: string;
    owner: string;

}

const housesArray: Array<HouseProps> = [
    {
        title: "Modern home in city center in the heart of historic Los Angeles",
        type: "house",
        location: "Katowice",
        price: 20,
        imageUrl: 'https://bit.ly/2Z4KKcF',
        owner: "0x9Cfd9eFf0D9ec98Efa42D659AE96DDB21A317845"
    },
    {
        title: "Modern home in city center in the heart of historic Los Angeles",
        type: "house",
        location: "Dąbrowa Górnicza",
        price: 100,
        imageUrl: 'https://bit.ly/2Z4KKcF',
        owner: "0x9Cfd9eFf0D9ec98Efa42D659AE96DDB21A317845"
    },
    {
        title: "Modern home in city center in the heart of historic Los Angeles",
        type: "house",
        location: "Sosnowiec",
        price: 30,
        imageUrl: 'https://bit.ly/2Z4KKcF',
        owner: "0x9Cfd9eFf0D9ec98Efa42D659AE96DDB21A317845"
    }
]

function ProfileInfo() {
    const [houses, setHouses] = useState<Array<HouseProps>>(housesArray)
    return (
        <Flex w="100%" h="75vh" alignItems="center" justifyContent="flex-start" flexDirection="column" >
            <Flex flexDirection={"column"} alignItems="center">
                <Box position="absolute" top="25vh" bg="white" borderWidth='px' borderRadius="full" boxShadow="lg">
                    <Image boxSize="160px" bg="white" loading="lazy" borderRadius="full" src="https://avatars.dicebear.com/api/croodles-neutral/123.svg" />
                </Box>
                <Box mt="10vh">
                    <Heading size="sm" color="gray.500">{copyAccount("0xE546614070D70C5E075fEC98aBC3EF6275C63d3b")}</Heading>
                </Box>
            </Flex>
            <Flex mt="7vh" w="100%" h="20vh" alignItems="center" justifyContent="space-evenly" >
                <Box>
                    <Heading size="lg" >Total houses bought: 14</Heading>
                </Box>
                <Box>
                    <Heading size="lg">Total houses sold: 14</Heading>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="flex-start" flexDir="row">
                    <Heading size="lg">Total Money Spend: 100  </Heading><FaEthereum size="25px" />
                </Box>
                <Box display="flex" alignItems="center" justifyContent="flex-start" flexDir="row">
                    <Heading size="lg">Money Balance: 25  </Heading><FaEthereum size="25px" />
                </Box>
            </Flex>
            <Grid mt="20" w="100%" templateColumns={['repeat(4, 1fr)']} gap={3}>
                {houses.map((house) => {
                    return (
                        <Box w='100%' alignItems='center' justifyContent="space-around" display='flex' >
                            <House
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
            
        </Flex>
    )
}

export default ProfileInfo

