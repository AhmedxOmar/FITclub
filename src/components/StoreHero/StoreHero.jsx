import React from 'react'
import '../StoreHero/StoreHero.css'
import store_banner from '../../assets/store_banner.jpg';

const StoreHero = () => {
  return (
    <div className='store-hero'>
      <img src={store_banner} alt="" />
    </div>
  )
}

export default StoreHero
