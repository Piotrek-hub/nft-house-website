import {
    Box,
    Flex,
    Center,
    FormControl,
    InputGroup,
    Input,
    InputLeftElement,
    Button,
    Heading
} from "@chakra-ui/react"

import { MdLocationOn } from "react-icons/md"
import { MdHomeFilled } from "react-icons/md"
import { MdMonetizationOn } from "react-icons/md"

import { useState } from "react"

// Redux
import { useDispatch, useSelector } from "react-redux";
import { setAccount } from "../../redux/account"


function Search() {
    const [location, setLocation] = useState<any>("")
    const [type, setType] = useState<string>("")
    const [budget, setBudget] = useState<string>("")

    const {loc, typ, budg} = useSelector<any>((state) => state.search);

    const dispatch = useDispatch();


    const handleSubmit = () => {
        
    }
    return (
        <Center w="100%" h="15vh" mt="20">

            <FormControl w="70%" boxShadow='xl' rounded="md" onSubmit={() => { console.log('submitted') }}>
                <Flex align="center" width="100%" alignItems="left" justifyContent="space-around" flexDirection="column">
                    <Heading p="3" ml="5" pt="10" size="lg">Search the price you looking for</Heading>
                    <Flex p="3" pb="10" justifyContent="space-around"  >
                        <InputGroup width="25%">
                            <InputLeftElement
                                pointerEvents='none'
                                children={<MdLocationOn color='gray.700' />}
                            />
                            <Input
                                variant='filled'
                                id='Location'
                                type='text'
                                placeholder="Location" 
                                onChange={(e) => {setLocation(e.target.value)}}/>
                        </InputGroup>
                        <InputGroup width="25%">
                            <InputLeftElement
                                pointerEvents='none'
                                children={<MdHomeFilled color='gray.700' />}
                            />
                            <Input
                                variant='filled'
                                id='Type'
                                type='text'
                                placeholder="Type" 
                                onChange={(e) => {setType(e.target.value)}}/>
                        </InputGroup>
                        <InputGroup width="25%">
                            <InputLeftElement
                                pointerEvents='none'
                                children={<MdMonetizationOn color='gray.700' />}
                            />
                            <Input
                                variant='filled'
                                id='Bufget'
                                type='text'
                                placeholder="Budget" 
                                onChange={(e) => {setBudget(e.target.value)}}/>
                        </InputGroup>
                        <Button
                            colorScheme='blue'
                            // isLoading={props.isSubmitting}
                            onClick={handleSubmit}
                            type='submit'
                        >
                            Search
                        </Button>
                    </Flex>
                </Flex>

            </FormControl>
        </Center>

    )
}

export default Search;