import React from 'react';
import { Link } from 'react-router-dom';

import  './header.css';

const Header = ( {onServiceChange} ) => {
   return (
      <header className="header">
         <Link className="header__logo" to="/">StarDB</Link>
         <ul className="nav header__nav">
            <li className="nav__item">
               <Link className="nav__link" to="/people/">
                  People
               </Link>
            </li>
            <li className="nav__item">
               <Link className="nav__link" to="/planets/">
                  Planets
               </Link>
            </li>
            <li className="nav__item">
               <Link className="nav__link" to="/starships/">
                  Starships
               </Link>
            </li>   
            <li className="nav__item">
               <Link className="nav__link" to="/secret">
                  Secret page
               </Link>
            </li>
            <li className="nav__item">
               <Link className="nav__link" to="/login">
                  Log in
               </Link>
            </li>
         </ul>

         <button className="header__btn"
                 onClick={onServiceChange} >
            Change Service
         </button>
      </header>
   )
}

export default Header;