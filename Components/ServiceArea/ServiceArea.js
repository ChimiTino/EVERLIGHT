import React from 'react'
import  * as TiIcons from 'react-icons/ti'

function ServiceArea() {
  return (
    <div className='map-container' id='ser-area'>
        <img className='mapImg' src='map.PNG' alt=''/>
        <div className='locations'>
        <header className='flex'>
        <h1 className='ser-head'>Service</h1><h3 className='ser-head-red'> Areas</h3>
    </header>

    <ul>
        <li><TiIcons.TiTick className='tick'/>Northern Suburbs (Bellville, Kuilsriver, Kraaifontein, Brackenfell, Durbanville)</li>
        <li><TiIcons.TiTick className='tick'/>Southern Suburbs – Pinelands, Rondebosch, Wynberg, Claremont, Kenilworth</li>
        <li><TiIcons.TiTick className='tick'/>Goodwood</li>
        <li><TiIcons.TiTick className='tick'/>Parow</li>
        <li><TiIcons.TiTick className='tick'/>Stellenbosch</li>
        <li><TiIcons.TiTick className='tick'/>Plattekloof</li>
        <li><TiIcons.TiLocation className='tick'/>Pretoria & Gauteng at Large</li>
        
    </ul> 
        </div>
      <img className='map-des' src='rehhr.PNG' alt='' />
       
    </div>
  )
}

export default ServiceArea