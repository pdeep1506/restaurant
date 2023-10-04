import React from 'react';
import Subheading from '../../components/SubHeading/SubHeading.jsx';
import MenuItem from '../../components/Menuitem/MenuItem.jsx';
import data from '../../constants/data.js';
import images from '../../constants/images.js';

import './Laurels.css';
const AwardCard = ({award})=>{
 
 return( <div className='app__laurels_awards-card'>
    <img src={award.imgUrl} alt='award'></img>
    <div className='app__laurels_awards-card_content'>
      <p className='p__cormorant' style={{color:"#DCCA87"}}>{award.title}</p>
      <p className='p__cormorant'>{award.subtitle}</p>
    </div>
  </div>)
}

const Laurels = () => (
  <div className='app__bg app__wrapper section__padding' id='awards'>
    <div className='app__wrapper_info'>

  <Subheading title='Awards & recognition'></Subheading>
  <h1 className='headtext__cormorant'>Our Laurels</h1>

  <div className='app__laurels_awards'>
    {
      data.awards.map((award)=>{
        
       return <AwardCard award={award} key={award.title} />
      })
    }
  </div>
    </div>

    <div className='app__wrapper_img'>
        <img src={images.laurels} alt='Laurels'></img>
    </div>
  </div>
);

export default Laurels;
