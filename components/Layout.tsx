import Navbar from "./Navbar";
import {PropsWithChildren} from "react";

const Layout = ({children}: PropsWithChildren<any>)=>{
    return(
        <div>
<Navbar/>
{children}
        </div>

    );
}
export default Layout