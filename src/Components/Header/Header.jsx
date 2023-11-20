import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import search from "../../assets/svg/search.svg"
import heart from "../../assets/svg/heart.svg"
import cart from "../../assets/svg/cart.svg"


function Header() {
  return (
    <header className='header'>
        <nav className='nav container'>
            <div className='nav-bar'>
                <div className='logo'>
                    <Link to="/">Exclusive</Link>
                </div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/register">Sing up</Link>
                    </li>
                </ul>
            </div>
            <div className='nav-bar-card'>
                <div className='search'>
                    <input type='text' placeholder=''/>
                    <img src={search} alt='search'/>
                </div>
                <div className='nav-bar-icon'>
                    <Link to="/wishlist">
                        <img src={heart} alt='heart'/>
                    </Link>
                    <Link to="/cart">
                        <img src={cart} alt='cart'/>
                    </Link>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header