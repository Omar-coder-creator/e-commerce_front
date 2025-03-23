import { ProductType } from "../types/productTypes"

const Product = ({ product }: { product: ProductType }) => {
    return (

        <div className="product-item">
            <div className="image-container">
                <img src={product.imageUrl} alt="Product Name" />
                <span className="category">{product.category}</span>
            </div>

            <div className="product-info">
                <h3>{product.name}</h3>
                <p className="price">{product.price}</p>
                <p className="description">
                    {product.description}
                </p>

                <button>Add to Cart</button>
            </div>
        </div>




    )
}

export default Product