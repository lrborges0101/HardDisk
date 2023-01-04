import React, {useState} from 'react'
import pc from '../../Assets/pc.png'
import vr from '../../Assets/vr.png'
import game from '../../Assets/game.png'
import './Slider.scss'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0)
   
 const data = [pc, vr, game]
  
 const prevSlide = () =>{
    setCurrentSlide ( currentSlide === 0 ? 2 : (prev) => prev -1)
 }
 const nextSlide = ()=>{
    setCurrentSlide ( currentSlide === 2 ? 0 : (prev) => prev +1)
 }
  return (
    <div className='slider'>

        <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}} >
            <img className='pc-img' src={data[0]}/>
            <div className='pc' >The Best For Your<br/><b>Computer!</b> </div>
            <img src={data[1]} />
            <img src={data[2]} />

        </div>
           <div className="icons">
            <div className="icon" onClick={prevSlide} >
           <ArrowCircleLeftIcon fontSize='large' />
            </div>
            <div className="icon" onClick={nextSlide} >
                <ArrowCircleRightIcon color='white' fontSize='large'/>
                
            </div>
           </div>
      
    </div>
  )
}

export default Slider
