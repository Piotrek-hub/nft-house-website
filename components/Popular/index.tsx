import {
    Flex,
    Heading,
    Text,
    Button,
    Box,
    Image,
    Badge,
} from "@chakra-ui/react"

import House from "../House";


function Popular() {
    return (
        <Flex w="100%" h="70vh" mt="200" justifyContent="space-around">
            <Flex w="70%" h="100%" flexDirection={"column"}>
                {/* <Flex w="100%" height="10%" alignItems={"center"} justifyContent="flex-start">
                    <Heading size ="sm">POPULAR</Heading>
                </Flex> */}
                <Flex w="100%" height="20%" alignItems={"center"} justifyContent="space-between">
                    <Heading size="xl"> Our Popular Residence</Heading>
                    <Button fontSize="xl" variant="link" > Explore All</Button>
                </Flex>
                <Flex w="100%" height="70%" alignItems={"center"} justifyContent="space-between">
                    <House
                        title="Modern home in city center in the heart of historic Los Angeles"
                        type="house"
                        location="Sosnowiec"
                        price={100}
                        imageUrl='https://bit.ly/2Z4KKcF'
                        owner="0x9Cfd9eFf0D9ec98Efa42D659AE96DDB21A317845"
                    />
                    <House
                        title="Modern home in city center in the heart of historic Los Angeles"
                        type="house"
                        location="Dąbrowa Górnicza"
                        price={200}
                        imageUrl='https://bit.ly/2Z4KKcF'
                        owner="0x9Cfd9eFf0D9ec98Efa42D659AE96DDB21A317845"
                    />
                    <House
                        title="Modern home in city center in the heart of historic Los Angeles"
                        type="house"
                        location="Katowice"
                        price={100}
                        imageUrl='https://bit.ly/2Z4KKcF'
                        owner="0x9Cfd9eFf0D9ec98Efa42D659AE96DDB21A317845"
                    />
                </Flex>
            </Flex>
        </Flex>
    )
}



export default Popular;


