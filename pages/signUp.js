import Link from "next/link";
import React from "react";
import styles from '../styles/login.module.scss';



export const getStaticProps = () => {
    return {
        props: {
            footerstatus: true,
            headerStatus: true
        }
    }
}


const Register = () => {
    return (
        <div className={styles.registerPage}   >


            <div className={`${styles.loginPage} card`}>

                <h2 className="text-center">Create an account</h2>
                <form action="/send-data-here" method="post">
                    <div className="my-3">
                        <label for="first">First Name</label>
                        <input className="form-control" type="text" id="first" name="first" />
                    </div>
                    <div className="my-3">
                        <label for="first">Last Name</label>
                        <input className="form-control" type="text" id="first" name="first" />
                    </div>
                    <div className="my-3">
                        <label for="first">Email</label>
                        <input className="form-control" type="text" id="first" name="first" />
                    </div>

                    <div className="my-3">
                        <label for="first">Enter Password:</label>
                        <input className="form-control" type="text" id="first" name="first" />
                    </div>
                    <div className="my-3">
                        <label for="last">Confrim Password:</label>
                        <input className="form-control" type="text" id="last" name="last" />
                    </div>

                    
                    <p className="text-center">
                        Already have an account? <Link href="/login">Log in</Link>
                    </p>

                    <button className={styles.btn} type="submit">Sign Up</button>
                </form>
            </div>


        </div>
    )

}

export default Register;