import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Nav.css';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import { CartContext } from './cardcontext';

const Navbar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const { cartCount } = useContext(CartContext);

    const handleSearch = () => {
        onSearch(searchQuery);
    };

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <nav>
            <div className="logo">
                <Link className='clicked' to="/ " style={{ color: 'black', textDecoration: 'none' }}>

                    <img src={logo} alt="Logo" />
                </Link>
            </div>
            <div className={`search-bar ${searchQuery ? 'has-value' : ''}`}>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleChange}
                />
                {searchQuery && (
                    <button className="search-button" onClick={handleSearch}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                )}
            </div>
            <div className="store-link">
                <a href="/store">
                    <div className="icon-container">
                        {cartCount > 0 ? (<div className="circleee">{cartCount}</div>) : ('')}

                        <FontAwesomeIcon icon={faCartShopping} className="icon" />
                    </div>
                    <p>&nbsp; cart </p>
                </a>
                <a href="/store">
                    <FontAwesomeIcon icon={faUser} />
                    <p>&nbsp; Login</p>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
