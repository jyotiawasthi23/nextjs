import react from "react";
import { useRouter } from "next/router";

//SSR Page 
export const getServerSideProps = async (context) => {
    // const router = useRouter();
    // const {id} = router.query;
    const id = context.params.id;
    console.log('id'- id);
    //api call
    const response = await fetch('https:\\fakestoreapi.com/products/'+id);
    const data = await response.json();// to convert stringfiled to json to parsed json
    return {
        props: { productData: data }
    }
}


const ProductId = ({productData}) =>{
    // const router = useRouter();

    // const {id} = router.query
    return(
        <div>this is ProductId page {productData.title}</div>
    )
}

export default ProductId;

