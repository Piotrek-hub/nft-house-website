import { useDispatch, useSelector } from "react-redux";
import HousesContainer from "../components/HousesContainer";
import Navbar from "../components/Navbar";
import Search from "../components/Search"

function Explore() {

    const account = useSelector<any>((state) => state.account);
    return (
        <>
        <Navbar/>
        <Search/>
        <HousesContainer/>
        </>
    )
}

export default Explore;