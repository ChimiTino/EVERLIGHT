import Link from 'next/link'
import React from 'react'
import { AiFillFacebook } from 'react-icons/ai'
import {FaPinterestSquare} from 'react-icons/fa'

function Footer() {
  return (<div className='cont-w'>
    <div className='footer-container'>
    
    <div className='logo-foot'>
            <img src='/SGGR.png' alt='Everlight Plumbing and Construction'/>
            <header><h1>Everlight Plumbing and Construction</h1></header>
        </div>
    <div className='everlight-page'>
       
        <ul className='contacts-foo'>
            <li><p>Address: 382 Voortrekker Road, Cape Town</p></li>
            <li><p>Tel: +27 219 310 526</p></li>
        </ul>
        
    </div>
    <div className='everlight-follows'>
       <p>Email: admin@everlightcon.co.za</p>

       <p>Follow us</p>
       <div className='under-line'></div>
       <div className='social-media'>
        <ul>
            <li><AiFillFacebook/></li>
            <li><FaPinterestSquare/></li>
        </ul>
       </div>
    </div>
    
    </div></div>
  )
}

export default Footer