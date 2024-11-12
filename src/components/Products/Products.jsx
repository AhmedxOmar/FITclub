import React, {useState} from 'react'
import '../Products/Products.css';

import  {productsData} from '../../data/productsData';

const Products = ({onAddToCart}) => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const updatedCartItems = [...cartItems, product];
    setCartItems(updatedCartItems);
  };


  return (
    <div className='store-container'>
      {productsData.map((product)=>(
        <div className="product" key={product.id}>
          <img src={product.image} alt="" className="product_img" />
          <span className="product_title">{product.title}</span>
          <div onClick={()=>onAddToCart(product)} className="cart_button">
            <span>{product.price}</span>
            <span >Add to Cart</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Products
