import {
    Flex,
    Heading,
    Text,
    Button,
    Box,
    Image,
    Badge,
} from "@chakra-ui/react"

import copyAccount from "../../utils/copyAccount"
import { FaEthereum } from "react-icons/fa"



interface HouseProps {
    title: string;
    type: "house" | "apartment";
    location: string;
    price: number;
    imageUrl: string;
    owner: string;

}

function House({ title, type, location, price, imageUrl, owner }: HouseProps) {

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
                        textTransform='uppercase'
                        ml='2'
                    >
                        {type} &bull; {copyAccount(owner)}
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

                <Button mt="3" variant="solid" colorScheme="blue" size="sm">Book Now</Button>
            </Box>
        </Box>
    )
}


export default House;