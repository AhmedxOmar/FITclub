import React, { useState } from 'react'
import NavBar from '../../components/NavBar/NavBar';
import '../Store/Store.css';
import StoreHero from '../../components/StoreHero/StoreHero';
import Products from '../../components/Products/Products';
import  {productsData} from '../../data/productsData';
import SideCart from '../../components/SideCart/SideCart';

const Store = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isSideCartOpen, setIsSideCartOpen] = useState(false);

  const handleAddToCart = (product) =>{
    setCartItems([...cartItems, product]);
  }

  const handleOpenSideCart = () =>{
    setIsSideCartOpen(true);
  };

  const handleCloseSideCart = () =>{
    setIsSideCartOpen(false);
  };


  return (
    <div className='Store'>
      <NavBar onOpenSideCart={handleOpenSideCart} />
      <StoreHero />
      <Products products={productsData} onAddToCart={handleAddToCart} />
      {
        isSideCartOpen && (
          <SideCart cartItems={cartItems} onClose={handleCloseSideCart} />
      )}
    </div>
  )
}

export default Store;

/*

<motion.div
    initial={{x: "-100vw",}}
    animate={{x:0,}}
    transition={{duration:0.3,}}
     className='Home'>

*/
