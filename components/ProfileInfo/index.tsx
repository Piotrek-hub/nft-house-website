import {
    Image,
    Box,
    Flex,
    Heading,
    Text,
    Grid
} from "@chakra-ui/react"

import {copyAccount, fetchHouses} from "../../utils/utils"
import { FaEthereum } from "react-icons/fa"
import {HouseProps} from "../../types/interfaces";
import {useState, useEffect} from "react"

import House from "../House/"

import {useSelector } from "react-redux";

function ProfileInfo() {

    const [houses, setHouses] = useState<Array<HouseProps>>([])
    const { account, metamaskConnection }  = useSelector<any>((state) => state.account);

    useEffect(() => {
        fetchHouses().then(res=>{setHouses(res.filter((house:HouseProps,) => (house.owner.toLowerCase() === account)))})

    }, [account, metamaskConnection])

    return (
        <Flex w="100%" h="75vh" alignItems="center" justifyContent="flex-start" flexDirection="column" >
            <Flex flexDirection={"column"} alignItems="center">
                <Box position="absolute" top="25vh" bg="white" borderWidth='px' borderRadius="full" boxShadow="lg">
                    <Image boxSize="160px" bg="white" loading="lazy" borderRadius="full" src={`https://avatars.dicebear.com/api/croodles-neutral/${account}.svg`} />
                </Box>
                <Box mt="10vh">
                    <Heading size="sm" color="gray.500">{ metamaskConnection ? copyAccount(account) : "Metamask Not Connected"}</Heading>
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

