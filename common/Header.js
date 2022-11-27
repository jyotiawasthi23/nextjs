import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import MediaIcon from "./MediaIcon";
import styles from "../styles/Header.module.scss";


const Header = () => {
    return (
        <div className={styles.Header}>
            <div className="container">
                <div className="row">
                    <div className="col-1">
                        <Logo />
                    </div>
                    <div className="col-9">
                        <Navbar />
                    </div>
                    <div className="col-2 m-auto">
                        <MediaIcon />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Header;
