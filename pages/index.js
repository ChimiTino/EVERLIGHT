import Head from 'next/head'
import Garantee from '../Components/ServiceArea/Garantee'
import React  ,{useState ,useRef} from'react'
import Services from '../Components/Services/Services'
import Slider from '../Components/Slider/Slider'
import PopUpHand from '../Components/PopUp/PopUpHand'
import Link from 'next/link'
import * as MdIcons from 'react-icons/md'
import Footer from '../Components/Footer'
import {logo} from '../public/SGGR.png'




export default function Home() {
  

       
const [toggle,setToggle] = useState(false);

const Switch = ()=>{
setToggle(true);

}
 
  return (
    
    <div>
      <Head>
        <title>Everlight Plumbing & Construction</title>
        <meta name="description" content="Everlight Plumbing & Construction" />
        <link rel="icon" href="/SGGR.png" />
      </Head>

<PopUpHand trigger={toggle} setToggle={setToggle}/>

   
<nav id='nav'>
  <div className='nav-conatainer'>
    <div className='logo-pic'>
      <Link href='/'><img src={logo} alt=''/></Link>
    </div>
    
    <div className='nav-list'>
      <ul>
      
        <li className='invis visi'><Link href='/'>Home</Link></li> 
        <li className='visi'><Link href='#ser-area'>Service Areas</Link></li>
        <li className='visi'><Link href='#WhyUs'>Why Us?</Link></li>
       
        <li className='callUs-pc'><Link   href='tel:+27 66 353 2520'>
           Call Us
        </Link></li>
    
    <li className='EmailUs-pc'><Link  href='mailto:admin@everlight.co.za'>
      Email Us
      </Link>
      </li>
      </ul>
    </div>
    
  </div>
</nav>
<main>

<Slider setToggle={Switch} />
<Services setToggle={Switch}/>
<Garantee/>
<Footer/>




</main>
  
   
   

  </div>
        
  )
}
