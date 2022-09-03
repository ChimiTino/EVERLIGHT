import React from 'react'
import  * as TiIcons from 'react-icons/ti'
function Garantee() {
  return (
    <div className='gar-big-container' id='WhyUs'>
    <div className='gar-container'>
        <div className='val-gar'>
    <header className='flexs'>
        <h1 className='ser-heads'>Value </h1><h3 className='ser-head-reds'>Guarrantee</h3>
    </header>
<div className='gar-text'>
    <p>Here at Everlight Plumbing And Constructions we  provide our services with honesty and integrity, this guarantees  quality and second to none service and finishes. </p>
    <ul className='list'>
        
        <li><TiIcons.TiTick className='tick'/>We provide competitive rates</li>
        <li><TiIcons.TiTick className='tick'/>We use SANS approved parts that are backed by the manufacturer’s warranty</li>
    </ul>
</div>
<img className='gar-img-1' alt='' src='\guar.PNG'/>
    </div>
        <img className='gar-img' alt='' src='\Canterbury-0330-Kitchen.jpg'/>


    </div></div>
  )
}

export default Garantee