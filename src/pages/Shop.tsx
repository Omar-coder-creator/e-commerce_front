import { useEffect, useState } from 'react'
import { ProductType } from '../types/productTypes'
import Product from '../components/Product'
import { getProducts } from '../api/product'

const Shop = () => {
    const [products,setProducts]=useState<ProductType[]>([])

    useEffect(()=>{
        async function fetchProducts(){
            const data = await getProducts()
            setProducts(data)
        }
        fetchProducts()
    },[])
    return (
        <div id='products'>
            {
                products.map(product => <Product key={product._id} product={product}/>)
            }
        </div>
    )
}

export default Shop