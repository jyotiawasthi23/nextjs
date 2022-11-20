import Link from "next/link";
import React from "react";


const Facilites = (props) => {
    return (
        <div className='container py-5'>

            <h1>This is Facilites page</h1>
            <ul>
                <li> <Link href='/facilites/lab'>Lab</Link></li>
                <li> <Link href='/facilites/libary'>Libary</Link></li>
                <li> <Link href='/facilites/playground'>Playground</Link></li>
                <li> <Link href='/facilites/sports'>Sports</Link></li>
            </ul>

        </div>
    )

}

export default Facilites;