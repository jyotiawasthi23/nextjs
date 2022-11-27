import React from "react";
import styles from '../styles/login.module.scss'
import Link from "next/link";


export const getStaticProps = ()=>{
    return{
        props:{footerstatus:true,
            headerStatus:true
        }
    }
}


 const Login = () => {
    return (
        <div className={styles.login}>

         
                <div className={`${styles.loginPage} card p-4`}>

                <h2 className="text-center">Login</h2>
                    <form action="/send-data-here" method="post">
                    <div className="my-3">
                    <label for="first">Email</label>
                        <input className="form-control" type="text" id="first" name="first" />
                    </div>
                       <div className="my-3">
                       <label for="last">Password</label>
                        <input className="form-control"  type="text" id="last" name="last" />
                       </div>
                    
                        <button className={styles.btn} type="submit">Login</button>
                        <p className="text-center mt-2">Don’t you have an account? <Link href="/signUp">Sign Up</Link></p>
                        
                    </form>
                </div>
            

        </div>
    )

}

export default Login;