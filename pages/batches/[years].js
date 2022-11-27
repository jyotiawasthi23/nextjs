import react from "react";

export const getStaticPaths = async() => {

    // const arr = ['2022', '2021', '2020', '2019', '2018', '2017']
    const response = await fetch ('https://fakestoreapi.com/products');
    const arr = await response. json();
    const paths = arr.map((item) => {
        return {
         params: {years: item.id.toString()}
        }
    })
    return{
        paths,
        fallback:false
    }


}
export const getStaticProps = async (context) => {

 console.log(context.params);
 const temp = context.params.years;
 const response = await fetch('https://fakestoreapi.com/products/'+temp);
 const data = await response.json();
 return{
    props :{
        res: data ,
        notFound:false
    }
 }


}


export const years = ({res}) => {
    console.log(res)
    return (
        <div>
        <h2>This is  batches years page - <br/> {res.title} </h2>
        <img   height="200" src={res.image} title="Product Image" alt="Product Image"  />
        <div> {res.category}</div>
        <div> {res.description}</div>
        <div> {res.price}</div>
        </div>
    )

}


export default years;