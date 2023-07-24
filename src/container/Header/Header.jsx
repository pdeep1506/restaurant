import React from 'react';
import images from '../../constants/images';
import  SubHeading from '../../components/SubHeading/SubHeading.jsx'
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
        <div className='app_wrapper_info'>
                <SubHeading title="Chase the new flavor"></SubHeading>
                <h1 className='app__header-h1'>The Key to fine Dining</h1>
                <p className='p__opensans' style={{margin:"2rem 0"}}>Lorem Ipsum is simply dummy text of the printing and typesetting induAldus PageMaker including versions of Lorem Ipsum</p>
                <button type='button' className='custom__button'>Explore Menu</button>
        </div>
              <div className='app__wrapper_img'>
                <img src={images.welcome} className='welcomeImg' alt='Welcome'></img>

              </div>
  </div>
);

export default Header;
