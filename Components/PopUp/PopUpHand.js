import React ,{useState} from 'react'
import Pop from './Pop'
import Sent from './Sent'

function PopUpHand(props) {  
    const [page,setPage] = useState(1);

       const submit = (e)=>{
         setPage(2);
        
       }

  return (props.trigger)?(
 <>
 <button className='close-btn' onClick={()=>props.setToggle(false)}>
        {props.children
        }X
        </button>
 <div className="dark-back" onClick={()=>props.setToggle(false)}>
    {props.children
        }
    
  </div>
 {page == 1 && <Pop 
 page ={page}
 setPage={setPage}
 submit ={submit} 
 /> }
 {page == 2 && <Sent
 trigger = {true}
 />}

 </> 
 ):'';}
     



export default PopUpHand