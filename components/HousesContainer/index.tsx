import {
    Grid,
    Flex,
    Button,
    Badge,
    Heading,
    Text,
    Box
} from "@chakra-ui/react"

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";



import House from "../House";

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

function HousesContainer() {
    const [houses, setHouses] = useState<Array<HouseProps>>(housesArray)
    const { location, type, price } = useSelector<any>((state) => state.search);

    useEffect(() => {
        if (location) {
            setHouses(housesArray.filter((house) => (house.location.toLowerCase() === location.toLowerCase())))
        }

    }, [location, type, price])

    return (
        <Grid mt="100" w="100%" templateColumns={['repeat(4, 1fr)']} gap={3}>
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
    )
}

export default HousesContainer;