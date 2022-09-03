import Head from 'next/head'
import Garantee from '../Components/ServiceArea/Garantee'
import React  ,{useState ,useRef} from'react'
import Services from '../Components/Services/Services'
import Slider from '../Components/Slider/Slider'
import PopUpHand from '../Components/PopUp/PopUpHand'




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
        <li><a href='/'>Home</a></li> 
        <li><a href='#ser-area'>Servive Areas</a></li>
        <li><a href='#WhyUs'>Why Us?</a></li>
       
        <li><a className='callUs-pc' href='tel:+27 66 353 2520'>
           Call Us
        </a></li>
    
    <li><a className='EmailUs-pc' href='mailto:admin@everlight.co.za'>
      Email Us
      </a>
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
