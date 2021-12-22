import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Search from "../components/Search"

function Explore() {

    const account = useSelector<any>((state) => state.account);
    return (
        <>
        
        <Navbar/>
        <Search/>
        </>
    )
}

export default Explore;