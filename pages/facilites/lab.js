import React from "react";
export const getStaticProps = ()=>{
    return{
        props:{footerstatus:true}
    }
}

 const Lab = (props) =>{
    return(
        <div>
            <h1>This is Lab page</h1>
        </div>
    )

 }

 export default Lab;