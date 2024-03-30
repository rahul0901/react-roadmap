import axios from 'axios';
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Products = () => {

    const [products, setProducts] = useState([]);

    console.log(products)

    useEffect(() => {

        async function getProducts() {
            try {

                // const json = await axios.get('https://api.escuelajs.co/api/v1/products');
                const { data } = await axios.get('http://localhost:8000/api/v1/products/get-all-products')

                if (data.success) {
                    setProducts(data.product);
                }

            } catch (error) {
                toast.error(error.data.message);
            }

        }

        getProducts();
    }, []) //empty isliye liya kyuki isse jabhi page load hoga aur hard refresh hoga oh page reload hoga.. page reload pe hi products lenge apan fake backend se..

    return (
        <>
        {/* onClick={() => route(`/single-products-page/${item.id}`)} */}
            <h2>Winter Special..😎</h2>
            {products?.length ? <div className="parent-pdp">{products.map((item, index) => (
                <div key={index} className="single-pdp" >
                    <h2>{item.pname}</h2>
                    <h4>Price: ${item.pprice}</h4>
                    <h4>Category: {item.pcategory}</h4>
                    <img src={item.pimage} alt="" />
                </div>
            ))}</div> : <div>Loading</div>}
        </>
    )
}

export default Products;