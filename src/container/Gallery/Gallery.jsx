import React, { useRef } from 'react';
import data from '../../constants/data.js';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs'
 import images from '../../constants/images.js';
import Subheading from '../../components/SubHeading/SubHeading.jsx';
import './Gallery.css';

 
const imgs = [
  images.gallery01, images.gallery02, images.gallery03, images.gallery04
]
const Gallery = () =>{
  const scrolleRef = useRef()

  const scroll = (direction)=>{
    const {current} = scrolleRef;
    // console.log(current)
    if(direction === "left"){
      current.scrollLeft -= 300;
    }
    else{
      current.scrollLeft += 300;
    }


  }
  return (
    <div className='app__gallery flex__center'>
          <div className='app__gallery-content'>
            <Subheading title='Instagram'></Subheading>
            <h1 className='headtext__cormorant'>Photo Gallery</h1>
            <p className='p__opensans' style={{color:"#AAA", marginTop:"2rem"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled </p>
            <button type='button' className='custom__button'>View More</button>
          </div>

          <div className='app__gallery-images'>
            <div className='app__gallery-images_container' ref={scrolleRef}>
            {
              imgs.map((img, index)=>(
                <div className='app__gallery-images_card flex__center' key={index}>
                  <img src={img} alt='Gallery'></img>
                  <BsInstagram className='gallery__image-icon'></BsInstagram>
                </div>
              ))
            }
            </div>

            <div className='app__gallery-images_arrow'>
                <BsArrowLeftShort  className='app__gallery-images_icon' onClick={()=>scroll("left")}></BsArrowLeftShort>
                <BsArrowRightShort className='app__gallery-images_icon' onClick={()=>scroll("right")}></BsArrowRightShort>
            </div>

          </div>
    </div>
  )
}

export default Gallery;
