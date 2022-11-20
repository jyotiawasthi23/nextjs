import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                        <Link href="/coures">Courses</Link>
                        <Link href="/facilites">Facilities</Link>
                        <Link href="/Products">Products</Link>
                    </div>

                </div>
            </nav>

        </div>
    )
};

export default Navbar;