import {
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image
} from "@chakra-ui/react"

function Welcome() {
    return (
        <Flex w={"100%"} h={"60vh"} flexDirection={"row"} justifyContent={"space-between"} align={"center"}  >
            <Flex w={"50%"} h={"60%"} flexDirection={"column"} justifyContent={"flex-start"} ml="15%">
                <Box>
                    <Heading size="4xl">Find Real Estate <br /> That Suits You.</Heading>
                </Box>
                <Box mt= "8">
                    <Text color="gray.600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
                        Eos minima ullam quo suscipit sapiente alias voluptatibus cum soluta?
                    </Text>
                </Box>
                <Box mt= "8">
                    <Button variant={"solid"} colorScheme={"blue"}>Get Started</Button>
                </Box>
                <Flex mt= "20">
                    <Flex flexDirection={"column"} pr="5">
                        <Heading size="lg">1200+</Heading>
                        <Text>Premium Producs</Text>
                    </Flex >
                    <Flex flexDirection={"column"} pr="3">
                        <Heading size="lg">4500+</Heading>
                        <Text>Happy Customers</Text>
                    </Flex >
                    <Flex flexDirection={"column"} pr="3">
                        <Heading size="lg">240+</Heading>
                        <Text>Award Winning</Text>
                    </Flex>
                </Flex>
            </Flex>
            <Box boxSize={"lg"} mr="15%">
                <Image
                    boxSize='100%'
                    objectFit='cover'
                    src='https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&q=80'
                    borderRadius='10%'
                >
                </Image>
            </Box>

        </Flex>
    );
}

export default Welcome;