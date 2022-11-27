import react from "react";
import styles from '../../styles/batches.module.scss'
export const getStaticPaths = async () => {

    // const arr = ['2022', '2021', '2020', '2019', '2018', '2017']
    const response = await fetch('https://fakestoreapi.com/products');
    const arr = await response.json();
    const paths = arr.map((item) => {
        return {
            params: { years: item.id.toString() }
        }
    })
    return {
        paths,
        fallback: false
    }


}
export const getStaticProps = async (context) => {

    console.log(context.params);
    const temp = context.params.years;
    const response = await fetch('https://fakestoreapi.com/products/' + temp);
    const data = await response.json();
    return {
        props: {
            res: data,
            notFound: false
        }
    }


}


export const years = ({ res }) => {
    console.log(res)
    return (
        <div className="container">
            <div className="row py-5">
                <div className="col-5">
                    <div className={styles.imageSize}>
                        <img height="400" src={res.image} title="Product Image" alt="Product Image" />
                    </div>
                </div>
                <div className="col-7">
                    {/* This is  batches years page - */}
                    <h2>{res.title} </h2>

                    <h5> <b>{res.category}</b></h5>
                    <h5> <b>Best Price: Rs.</b> {res.price}</h5>
                    <p> {res.description}</p>

                </div>


            </div>
        </div>
    )

}


export default years;