import React from 'react'
import ServiceArea from '../ServiceArea/ServiceArea'
import { ServicesList } from './ServicesList'



function Services({setToggle}) {
  return (
    <>
    <div className='services'>
    <header className='flex'>
    <h1 className='ser-head'>Our</h1><h3 className='ser-head-red'>Services</h3>
    </header>
    <div className='service-container'>
{ServicesList.map((item)=>{
    return(
        <>
        <div className='cards'>
            
            
            <div className='white-cir'><div className='card-icon'>{item.icon}</div></div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <a className='btn-quote' onClick={setToggle} href='#nav'>
                Ask for Quote
            </a>

        </div>
        </>
        )
})}


    </div>
    </div><ServiceArea/>
    </>
  )
}

export default Services