import React from "react";
import './Header.css'
import logo from '../../assets/logo.png';
import menuIcon from '../../assets/menu.png'
import menuIcon1 from '../../assets/menu-icon.png'
import {Link} from "react-scroll";
import {Link as LinkPage } from "react-router-dom";
import { useState } from "react";
const Header = () => {
    const mobile = window.innerWidth <= 768 ? true : false;
    const [menuOpened, setMenuOpened] = useState(false);

    return (
        <div className="header" id="Header">
            <img src={logo} alt="" className="logo" />
            {(menuOpened === false && mobile === true) ? (
                <div className="menu-icon"><img src={menuIcon1} alt="" onClick={()=>setMenuOpened(true)} /></div>
            ) :
                <ul className="header-menu">
                    <li>
                        <Link to="Header" span={true} smooth={true} onClick={()=>setMenuOpened(false)}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="Programs" span={true} smooth={true} onClick={()=>setMenuOpened(false)}>
                            Programs
                        </Link>
                    </li>
                    <li>
                        <Link to="reasons" span={true} smooth={true} onClick={()=>setMenuOpened(false)}>
                            Why us
                        </Link>
                    </li>
                    <li>
                        <Link to="Plans" span={true} smooth={true} onClick={()=>setMenuOpened(false)}>
                            Plans
                        </Link>
                    </li>
                    <li>
                        <Link to="Testimonials" span={true} smooth={true} onClick={()=>setMenuOpened(false)}>
                            Testimonials
                        </Link>
                    </li>
                    <li className="lastLink">
                        <LinkPage to="/store">
                        Store
                        </LinkPage>
                    </li>
                </ul>
            }
            {menuOpened && <div className="overlay" onClick={()=>setMenuOpened(false)}></div>}
        </div>
    )
}

export default Header