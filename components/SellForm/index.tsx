import {
    Flex,
    Button,
    Box,
    FormControl,
    FormLabel,
    Input,
    Heading,
    Radio,
    HStack,
    RadioGroup
} from "@chakra-ui/react"

import { useSelector } from "react-redux";
import { useState } from "react"
import {checkWeb3, createContractConnection} from "../../utils/utils"
import ABI from "../../abis/RealEstateContractABI.json"

function SellForm() {
    const { account, metamaskConnection }  = useSelector<any>((state) => state.account);

    const [location,setLocation] = useState<string>("");
    const [price,setPrice] = useState<string>("");


    const sellHouse = () => {
        
        if(checkWeb3())
            window.web3 = checkWeb3();
        else 
            return 

        const contract = createContractConnection(window, "0xe61e2a0A3489770a47Fc643a21a8D793dBCCFB97")
        contract.methods.addNewHouse(location, price)
            .send({from : account, gas: 3000000})
            .then((result: any) => {
                console.log(result)
            })

    }
    // const {contractAddress, nftAddress, contract} = useSelector<any>((state) => state.contract);

    // const dispatch = useDispatch();
    // console.log("Contract: ", contract)

    return (
        <Flex w="100%" h="80vh" justifyContent="space-around" alignItems="center">
            <Box w="30%" boxShadow="xl" p="10" borderRadius="2%">
                <Heading size="lg">Add Not Existing House</Heading>
                <FormControl mt="3">
                    <FormLabel htmlFor='location'>Location</FormLabel>
                    <Input id='location' type='text' value = {location} onChange={(e) => setLocation(e.target.value)}/>
                </FormControl>
                <FormControl mt="3">
                    <FormLabel as='legend' >Type</FormLabel>
                    <RadioGroup defaultValue='house'>
                        <HStack spacing='24px'>
                            <Radio value='house'>House</Radio>
                            <Radio value='Nagato'>Apartment</Radio>
                        </HStack>
                    </RadioGroup>
                </FormControl>
                <FormControl mt="3">
                    <FormLabel htmlFor='price'>Price</FormLabel>
                    <Input id='price' type='text' value = {price} onChange={(e) => setPrice(e.target.value)}/>
                </FormControl>
                <Button mt="5" variant ="solid" colorScheme="blue" disabled={!(metamaskConnection)} onClick = {sellHouse}>
                    Sell House
                </Button>
            </Box>
        </Flex>
    );
}

export default SellForm;