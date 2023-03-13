import { useState, useEffect } from "react"
import productsService from "../../services/productService"

import OneProduct from "../OneProduct/oneproduct"

const ProductList = () => {
    const [products, setProducts] = useState([]);


    const getProducts = ()=> {
        productsService().then((res)=>{
            setProducts(res);
        })
    }

    useEffect(()=>{
        getProducts();
    }, []);

    console.log(products);
    
    return (
        <div>
            <OneProduct items={products}/>
        </div>
    )
}

export default ProductList