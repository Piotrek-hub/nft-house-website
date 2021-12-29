import {
    Flex,
    Heading,
    Text,
    Button,
    Box,
    Image,
    Badge,
} from "@chakra-ui/react"

import {copyAccount, createContractConnection} from "../../utils/utils"
import { FaEthereum } from "react-icons/fa"
import { HouseProps } from "../../types/interfaces"
import { useSelector } from "react-redux";
import {AccountInterface} from "../../types/interfaces"
const Web3 = require("web3")

function House({ id, title, type, location, price, imageUrl, owner }: HouseProps) {
    const {account , metamaskConnection}:AccountInterface = useSelector((state:any) => state.account);

    const buyHouse = async () => {

        if(!metamaskConnection)
            return 
        const contract = createContractConnection(window, "0xDB7Cd8BcDa293ed8d8748Be5fF39dd708AC9b955");
        console.log(contract)
        const result = await contract.methods.buyHouse(id).send({from: account, gasLimit: 3000000, value: Web3.utils.toWei(price, 'ether')})
        console.log(result)
            
    }

    return (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' boxShadow='sm'>
            <Image src={imageUrl} alt={title} />

            <Box p='6'>
                <Box display='flex' alignItems='baseline'>
                    <Badge borderRadius='full' px='2' colorScheme='blue'>
                        {location}
                    </Badge>
                    <Box
                        color='gray.500'
                        fontWeight='bold'
                        letterSpacing='wide'
                        fontSize='xs'
                        ml='2'
                    >
                        {type.toUpperCase()} &bull; {copyAccount(owner)}
                    </Box>
                </Box>

                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    isTruncated
                >
                    {title}
                </Box>


                <Flex justifyContent="flex-start" alignItems="center">
                    {price} <FaEthereum />
                </Flex>

                <Button mt="3" variant="solid" colorScheme="blue" size="sm" disabled={!(metamaskConnection)} onClick = {buyHouse}>Buy</Button>
            </Box>
        </Box>
    )
}


export default House;