import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { SlideImgs } from './SliderImgs'
import Link from 'next/link'
import * as BsIcons from 'react-icons/bs'

function Slider({setToggle}) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <> 
    
    <img className='black-des' src='\ergrg.PNG' alt=''/>
    <div className='slider-container'>

      <div className='black-conatainer'>
       
        <div className='header-box'>
            <header className='header-name'>Everlight Plumbing & Construction</header>
            <p className='header-text'>Here at Everlight Plumbing and Construction we prioritise quality and customer satisfaction with every service we deliver. For affordable and excellent service book a quote today.</p>
       <button  className='header-butn' onClick={setToggle}><Link href='#nav'>BOOK NOW </Link><BsIcons.BsFillArrowRightCircleFill className='arrow'/></button>
        </div>
        <div className='red-line'></div>
        <div className='blue-triangle'></div>
      </div>
 <div className='semi-circle'></div>
      
     <Carousel  activeIndex={index} onSelect={handleSelect}>
      
        {SlideImgs.map((item,index)=> { 
return(
     <Carousel.Item key = {index}>
          <div>
            <img className='slider-imgs' src={item.img}/>
          </div>
      </Carousel.Item>)
        })}
      
     </Carousel>
   
    </div>
   
  </>)
}

export default Slider