import React, {useState} from 'react';
import {GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, settoggleMenu] = useState(false)
  return(
  <nav className='app__navbar'>
       <div className='app__navbar-logo'>
        <img src={images.gericht} alt='App Logo'></img>
       </div>

       <ul className='app__navbar-links'>
            <li className='p__opensans'><a href='#home'>Home</a></li>
            <li className='p__opensans'><a href='#about'>About</a></li>
            <li className='p__opensans'><a href='#menu'>Menu</a></li>
            <li className='p__opensans'><a href='#awards'>Awards</a></li>
            <li className='p__opensans'><a href='#contact'>Contact</a></li>

       </ul>

       <div className='app__navbar-login'>
            <a className='p__opensans' href='#login'>Log in/ Register</a>
            <div></div>
           <a href='/' className='p__opensans'>Book Table</a>
       </div>

       <div className='app__navbar-smallscreen'>
            <GiHamburgerMenu color='#fff' fontSize={27} onClick={()=>settoggleMenu(true)}></GiHamburgerMenu>

{
  toggleMenu && (

          <div className='app__navbar-smallscreen_overlay flex_center slide-bottom'>

            <MdOutlineRestaurantMenu fontSize={27} className='overlay_close' onClick={()=>settoggleMenu(false)}></MdOutlineRestaurantMenu>
            <ul className='app__navbar-smallscreen-links'>
            <li className='p__opensans'><a href='#home' onClick={()=>settoggleMenu(false)}>Home</a></li>
            <li className='p__opensans'><a href='#about' onClick={()=>settoggleMenu(false)}>About</a></li>
            <li className='p__opensans'><a href='#menu' onClick={()=>settoggleMenu(false)}>Menu</a></li>
            <li className='p__opensans'><a href='#awards' onClick={()=>settoggleMenu(false)}>Awards</a></li>
            <li className='p__opensans'><a href='#contact' onClick={()=>settoggleMenu(false)}>Contact</a></li>

       </ul>
          </div>
  )
}

       </div>
  </nav>
)};

export default Navbar;
