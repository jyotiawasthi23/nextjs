import React from 'react';

export const getStaticProps = ()=>{
    return{
        props:{footerstatus:true}
    }
}


const About = (props) => {

    return (

        <div className='container py-5'>

            <h1>This is About page</h1>


        </div>
    )

}

export default About;