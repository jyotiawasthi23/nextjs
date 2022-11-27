import React from "react";
import Link from "next/link";
import styles from '../styles/Header.module.scss'

const MediaIcon = () => {
    return (
        <div  className="text-end">
            <Link href="/login" className={`${styles.btn1}`}>Login</Link>
            <Link href="/signUp" className={styles.btn1}>Sign Up</Link>
        </div>
    )

}


export default MediaIcon;