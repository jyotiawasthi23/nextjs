import React from "react";
import Image from "next/image/";
import styles from '../styles/Product.module.css'

//SSG (static site genration ---Html pages are built inintalliy)
export const getStaticProps = async () => {
    const response = await fetch('https:\\fakestoreapi.com/products');
    const data = await response.json();
    return {
        props: { productData: data }
    }
}

const Products = (props) => {
    console.log('props', props)
    const { productData } = props;
    return (
        <div className="container py-5">

            <h2 className="mb-4">This is Products page</h2>
            <div className="row">
                {
                    productData.map(item => (

                        <div className="col-3">
                            <div className="productList mb-3">
                                <div className="card p-2" >
                                    <div className="text-center">
                                    <img className={styles.image}  height="200" src={item.image} title="Product Image" alt="Product Image"  />
                                        {/* <Image src={item.image} width={200}
                                            height={200} className={styles.image} /> */}
                                    </div>
                                    <div className="card-body pb-0">
                                        <h5 className={styles.cardTitle}>{item.title}</h5>
                                          <p className={styles.cardText}>{item.category}</p>
                                        <p className={styles.cardText}>{item.description}</p>
                                        <div className="mb-2"> <b> Rs. {item.price}</b></div>

                                    </div>
                                </div>

   
                            </div>
                        </div>


                    ))
                }
            </div>
        </div>
    )

}


export default Products;