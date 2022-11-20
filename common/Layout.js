import React from "react";
import Header from "./Header"
import Navbar  from "./Navbar";
import Footer from "./Footer";

const Layout = (props) =>{
    const {children,footerStatus}= props;
    console.log('footerStatus', footerStatus);
return(
    <>
    { true ?
    (<div>
    <Header/>
    {children}
    {!footerStatus && (<Footer/>)}
    </div>) :  (<div>
    <Header/>
    {children}
    {!footerStatus && (<Footer/>)}
    </div>)}
    </>
)

};

export default Layout;


