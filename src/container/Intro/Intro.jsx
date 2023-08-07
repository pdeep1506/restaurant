import React,{useState} from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import './Intro.css';
import {meal} from '../../constants/index'

const Intro = () => {
  const [playVideo, setplayVideo] = useState(false)
    const vidRef = React.useRef();
    const handleVideo = ()=>{
      setplayVideo((prevValue)=>!prevValue)

      if(playVideo){
        vidRef.current.pause();
      }
      else{
        vidRef.current.play();
      }
    }
 return (
  <div className='app__video'>


    <video src={meal} ref={vidRef}
      loop
      controls={false}
      muted
     type='video/mp4'></video>

      <div className='app__video-overlay flex__center' style={{
        background: !playVideo?   "rgba(0, 0, 0, 0.65)":""
      }}>
            <div
              onClick={handleVideo}
             className='app__video-overlay_circle flex__center'>
            {
              playVideo ?(<BsPauseFill color='#fff' fontSize={30}></BsPauseFill>):
              (<BsFillPlayFill color='#fff' fontSize={30}></BsFillPlayFill>)
            }
            </div>
     </div>
  </div>
  
)};

export default Intro;
