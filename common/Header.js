import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import  styles  from "../styles/Header.module.css";


const Header = () =>{
    return(
        <div className={styles.Header}>
        <div className="container">
        <div className="row">
        <div className="col-1">
        <Logo/>
        </div>
        <div className="col-11">
        <Navbar/>
        </div>
        </div>
        </div>
        </div>
    )

}

export default Header;
