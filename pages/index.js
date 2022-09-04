import Head from 'next/head'
import Garantee from '../Components/ServiceArea/Garantee'
import React  ,{useState ,useRef} from'react'
import Services from '../Components/Services/Services'
import Slider from '../Components/Slider/Slider'
import PopUpHand from '../Components/PopUp/PopUpHand'
import Link from 'next/link'




export default function Home() {
  

       
const [toggle,setToggle] = useState(false);

const Switch = ()=>{
setToggle(true);

}
 
  return (
    
    <div>
      <Head>
        <title>Everlight Constructions</title>
        <meta name="description" content="Everlight Plumbing and Constructions" />
        <link rel="icon" href="/SGGR.PNG" />
      </Head>

<PopUpHand trigger={toggle} setToggle={setToggle}/>

<nav id='nav'>
  <div className='nav-conatainer'>
    <div className='logo-pic'>
      <img src='/SGGR.PNG' alt=''/>
    </div>
    
    <div className='nav-list'>
      <ul>
        <li><Link href='/'>Home</Link></li> 
        <li><Link href='#ser-area'>Servive Areas</Link></li>
        <li><Link href='#WhyUs'>Why Us?</Link></li>
       
        <li><Link className='callUs-pc' href='tel:+27 66 353 2520'>
           Call Us
        </Link></li>
    
    <li><Link className='EmailUs-pc' href='mailto:admin@everlight.co.za'>
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




</main>
  
   

  </div>
        
  )
}
