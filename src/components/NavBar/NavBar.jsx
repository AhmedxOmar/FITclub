import React, { useState } from 'react'
import '../NavBar/NavBar.css'
import logo from '../../assets/logo.png';
import { IoHome } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { PiUserSquare } from "react-icons/pi";
import { Link as LinkPage } from "react-router-dom";



const NavBar = ({onOpenSideCart}) => {
  const style = { color: "white", fontSize: "25px" }

  const [isSideCartOpen, setIsSideCartOpen] = useState(false);

  const handleOpenSideCart = () =>{
    setIsSideCartOpen(true);
    onOpenSideCart();
  };

  return (
    <div className='nav'>
      <div className='leftNav'>
        <img src={logo} alt="" />
      </div>
      <div className='rightNav'>
          <div><LinkPage to={'/'}><IoHome style={style} />
            <span className='navButtons'>Home</span>
            </LinkPage>
          </div>
        <div><PiUserSquare style={style} />
          <span className='navButtons'>Profile</span>
        </div>
        <div onClick={handleOpenSideCart}><CiShoppingCart style={style} />
          <span className='navButtons'>Cart</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar
