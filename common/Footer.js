import React from "react";
import Logo from "./Logo";
import styles from "../styles/Footer.module.scss"

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <Logo />
                    </div>
                    <div className="col-10">
                        <div className="row">
                            <div className="col-4">
                            <h4>Services</h4>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                            
                            </ul>

                            </div>
                            <div className="col-4">
                            <h4>Services</h4>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                            
                            </ul>

                            </div>             <div className="col-4">
                            <h4>Services</h4>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                            
                            </ul>

                            </div>
                

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Footer;