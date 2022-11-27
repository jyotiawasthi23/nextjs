import React from "react";
import Header from "./Header"
import Navbar  from "./Navbar";
import Footer from "./Footer";

const Layout = (props) =>{
    const {children,footerStatus,headerStatus}= props;

return(
    <>
    { true ?
    (<div>
    {!headerStatus && (<Header/>)}
    {children}
    {!footerStatus && (<Footer/>)}
    </div>) :  (<div>
    {!headerStatus && (<Header/>)}
    {children}
    {!footerStatus && (<Footer/>)}
    </div>)}
    </>
)

};

export default Layout;


