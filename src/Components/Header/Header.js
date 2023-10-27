import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <div className='navbar'>
                    <Link to='/'>Home</Link>
                    <Link to='/addproduct'>Add Product</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;