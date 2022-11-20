import React from "react";
export const getStaticProps = ()=>{
    return{
        props:{footerstatus:true}
    }
}

 const Sports = (props) =>{
    return(
        <div>
            <h1>This is Sports page</h1>
        </div>
    )

 }

 export default Sports;