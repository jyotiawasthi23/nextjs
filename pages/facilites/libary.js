import React from "react";

export const getStaticProps = ()=>{
    return{
        props:{footerstatus:true}
    }
}

 const Libary = (props) =>{
    return(
        <div>
            <h1>This is Libary page</h1>
        </div>
    )

 }

 export default Libary;