import Link from "next/link";
import React from "react";
import styles from '../../styles/Product.module.css'
//SSR (static site rendenring ---Html pages are built inintalliy)
export const getStaticProps = async () => {
    const response = await fetch('https:\\fakestoreapi.com/products');
    const data = await response.json();
    return {
        props: { productData: data }
    }
}
const Batches = (props) => {


    const { productData } = props;
    return (
        <div className="container py-5">

            <h2 className="mb-4">This is Batches page</h2>
            <div className="row">
                {
                    productData.map(item => (
                        <h5 className={styles.cardTitle}>
                            <Link href={`/batches/${item.id}`}>{item.title}</Link>
                        </h5>

                    ))
                }
            </div>
        </div>
    )




}


export default Batches;