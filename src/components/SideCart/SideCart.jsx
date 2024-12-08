import React from 'react'
import '../SideCart/SideCart.css'
import { RiDeleteBin6Line } from "react-icons/ri";
import { RiCloseLargeFill } from "react-icons/ri";



const SideCart = ({ cartItems, onClose }) => {

    const style = { color: "white", fontSize: "35px" }

    return (

        <div className='sideCart'>
            <div className='cartContainer'>
                <div className="closeSideCartSection">
                    <RiCloseLargeFill onClick={onClose} fontSize={"2.1rem"}/>
                    <span className='itemsNumbers'>CART (2 ITEMS)</span>
                </div>
                <div className='item'>
                    {cartItems.map((item) => (
                        <li className='productItem' key={item.id}>
                            <img className='productImage' src={item.image} alt="" />
                            <div className="productInfo">
                                <RiDeleteBin6Line style={style} />
                                <span className='productTitle'>{item.title}</span>
                                <div className='countter'>
                                    <span className='productPrice'>{item.price}</span>
                                    <div className="itemsCounter">
                                        <span>-</span>
                                        <span>1</span>
                                        <span>+</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SideCart
