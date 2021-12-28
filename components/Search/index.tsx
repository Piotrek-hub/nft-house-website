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

import { useState, useEffect } from "react"
import Link from "next/link"

// Redux
import { useDispatch, useSelector } from "react-redux";
import { setAll } from "../../redux/search"


function Search() {
    const [locationInput, setLocationInput] = useState<string>("")
    const [typeInput, setTypeInput] = useState<string>("")
    const [priceInput, setPriceInput] = useState<string>("")

    const { location, type, price } = useSelector<any>((state) => state.search);

    const dispatch = useDispatch();


    const handleSubmit = () => dispatch(setAll({ location: locationInput, type: typeInput, price: priceInput }))
    

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
                                placeholder={location ? location : "Location"}
                                value={locationInput}
                                onChange={(e) => { setLocationInput(e.target.value) }} />
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
                                placeholder={type ? type : "Type"}
                                value={typeInput}
                                onChange={(e) => { setTypeInput(e.target.value) }} />
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
                                placeholder={price ? price : "Price"}
                                value={priceInput}
                                onChange={(e) => { setPriceInput(e.target.value) }} />
                        </InputGroup>
                        <Button
                            colorScheme='blue'
                            // isLoading={props.isSubmitting}
                            onClick={handleSubmit}
                        >
                            <Link href="/explore">
                                Search
                            </Link>
                        </Button>

                    </Flex>
                </Flex>

            </FormControl>
        </Center>

    )
}

export default Search;