import { useCookies } from "react-cookie";
import Navbar from "./Components/Navbar"

const AppLayout = (props) => {
    const cookies = useCookies(['accessToken'])

    return (
        <>
        <Navbar login={cookies[0].accessToken != undefined}/>
        <div>
            {props.children}
        </div> 
        </>
    )
}

export default AppLayout;