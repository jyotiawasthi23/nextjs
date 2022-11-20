import React from "react";
export const getStaticProps = ()=>{
    return{
        props:{footerstatus:true}
    }
}


 const Playground = (props) =>{
    return(
        <div>
            <h1>This is Playground page</h1>
        </div>
    )

 }

 export default Playground;