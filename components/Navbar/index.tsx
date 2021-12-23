// Chakra UI
import {
    Heading,
    Grid,
    Box,
    Button,
    Flex
} from '@chakra-ui/react'

// React
import { useState } from "react"
import Link from "next/link"

// Redux
import { useDispatch, useSelector } from "react-redux";
import { setAccount } from "../../redux/account"

// Utils 
import copyAccount from "../../utils/copyAccount"



function Navbar() {

    const account = useSelector<any>((state) => state.account.account);
    const metamaskConnection = useSelector<any>((state) => state.account.metamaskConnection);

    const dispatch = useDispatch();

    const connectToMetamask = async () => {
        if (typeof window.ethereum !== 'undefined') {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            dispatch(setAccount(accounts[0]));
        } else {
            console.log("Please install Metamask")
        }
    }

    return (
        <Grid p="5" templateColumns='repeat(5, 1fr)' gap={6} boxShadow='sm'>
            <Flex w='100%' h='10' align="center" justify="space-around">
                <Link href="/">
                    <Button ml={10} size="lg" variant={"link"}>
                        <Heading size="md" color="black" >Serumah.</Heading>
                    </Button>
                </Link>
            </Flex>

            <Box w='100%' h='10' />
            <Flex w='100%' h='10' align="center" justify="space-around">
                <Link href="/explore">
                    <Button colorScheme='gray' variant='link'>Explore</Button>
                </Link>
                <Button colorScheme='gray' variant='link'>Sell</Button>
                <Link href = "/profile">
                    <Button colorScheme='gray' variant='link'>Profile</Button>
                </Link>
            </Flex>
            <Box w='100%' h='10' />

            <Box w='100%' h='10' align="center">
                <Button
                    mr={10}
                    colorScheme={metamaskConnection ? "gray" : "blue"}
                    onClick={connectToMetamask}
                    variant="solid">
                    {metamaskConnection ? copyAccount((account as string)) : "Connect To Metamask"}
                </Button>
            </Box>
        </Grid>
    )
}

export default Navbar;