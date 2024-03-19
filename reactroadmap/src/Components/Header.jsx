import React, { useState } from 'react';
import './Header.css';
import './MediaHeader.css';
import { Link } from 'react-router-dom';

const Header = () => {

    const [openMenu, setMenu] = useState(false);

    const handleMenuOnClick = () => {
        setMenu(true)
    }

    return (
        <>
            <div className="screen-header">
                <div className="header-parent">
                    <div className="header-left">
                        <Link to={'/'}>
                            <h1>R</h1>
                            <h1>S</h1>
                        </Link>
                    </div>
                    <div className="header-right">
                        <ul>
                            <Link to={'/about'}>
                                <li>About</li>
                            </Link>
                            <Link to={'/explore'}>
                                <li>Explore</li>
                            </Link>
                            <Link to={'/blog'}>
                                <li>Blog</li>
                            </Link>
                            <Link to={'/review'}>
                                <li>Review</li>
                            </Link>
                            <Link to={'/contact'}>
                                <li>Contact</li>
                            </Link>
                        </ul>
                    </div>
                    <div className="header-menu">
                        <i class="fa-solid fa-bars fa-lg" onClick={handleMenuOnClick}></i>
                        {openMenu && <div className='popup-menubar'>
                            <ul>
                                <Link to={'/about'} onClick={() => setMenu(false)}>About
                                </Link>
                                <Link to={'/explore'} onClick={() => setMenu(false)}>Explore
                                </Link>
                                <Link to={'/blog'} onClick={() => setMenu(false)}>Blog
                                </Link>
                                <Link to={'/review'} onClick={() => setMenu(false)}>Review
                                </Link>
                                <Link to={'/contact'} onClick={() => setMenu(false)}>Contact
                                    {/* <li onClick={()=>setMenu(false)}>Contact</li> */}
                                </Link>
                            </ul>
                            <div className="popup-close">
                                <Link to={'/'}>
                                    <i class="fa-solid fa-xmark fa-lg" onClick={() => setMenu(false)}></i>
                                </Link>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;