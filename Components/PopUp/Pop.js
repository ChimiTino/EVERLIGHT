import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser"




function Pop( {submit}) {
  const form = useRef();


  
  const [error, setError] = useState('');
  const [result, setResult] = useState('');

 


  

    const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm(
        "service_aautjoh",
        "template_m66d5ih",
        form.current,
        "z4k2FF3-Dvng1E2u9"
      )
      .then(
        (result) => {
          console.log(result.text); 
          setResult(e.target.value);
          if (result == '') {
            return setError('Please fill in all the missing feilds.')
            
          }else{
            submit()
          } 
        

        },
        (error) => {
          console.log(error.text);
        }
      );
      
      
  };

  return (
    <>
   <div className='popUp'  >

<div className='popInner' >

<form ref={form} onSubmit={sendEmail}   > 
<header className="contact-head">Get A Quote Now</header>
<p className="contact-p">Enter your details below and one of our team members will get back to you immediately.</p>
  <div className="contact-me">
      <div className="contact-input">
      
      <input placeholder="Name and Surname*" className="contact-i" label='Name' type="text" name="from_name" required ='true'/>
      </div>
      <div className="contact-input">
      
      <input placeholder="Email*" className="contact-i" type="email" name="email" required ='true' />
      </div>
      <div className="contact-input">
     
      <input placeholder="Tellephone*" className="contact-i" type="tell" name="tell" required ='true'/>
      </div>
  </div>

  <div className="locations-me">
      <p className="location-p">Which area are you in?</p>
      <select className='form-selecter' name="location" required ='true' >
        <option name ='Your Location'>Your Location</option>
        <option name ='Bellville'>Bellville</option>
        <option name ='Durbanville'>Durbanville</option>
        <option name ='Kuilsriver'>Kuilsriver</option>
        <option name ='Kraaifontein'>Kraaifontein</option>
        <option name ='Brackenfell'>Brackenfell</option>
        <option name ='Pinelands'>Pinelands</option>
        <option name ='Goodwood'>Goodwood</option>
        <option name ='Parow'>Parow</option>
        <option name ='Stellenbosch'>Stellenbosch</option>
        <option name ='Plattekloof'>Plattekloof</option>
        <option name ='Other'>Other</option>

      </select> 
      <div className="contact-input">
      <input type="text" className="contact-i"  placeholder="If other:" name="other_locations" />
      </div>
</div>
<div className="service-me">
 

 <p className="location-p">How can we help you:</p>
     
     
      <select className='form-selecter' name="service" required ='true' >
        <option name ='Plumbing Repairs & fixings'>Plumbing Repairs & fixings</option>
        <option name ='Home Renovations & Restorations'>Home Renovations & Restorations</option>
        <option name ='Geyser Installations & Maintenance'>Geyser Installations & Maintenance</option>
        <option name ='Solar Installation'>Solar Installation</option>
        <option name ='Electrical Engineering'>Electrical Engineering</option>
        <option name ='Fencing & Gate Motors'>Fencing & Gate Motors</option>
        <option name ='Ceiling & Partitioning'>Ceiling & Partitioning</option>
        <option name ='Painting'>Painting</option>
        <option name ='Tiling'>Tiling</option>
        <option name ='Carpentryh'>Carpentryh</option>
        <option name ='Paving'>Paving</option>
        <option name ='Tree Removals'>Tree Removals</option>

      </select>

</div>

      <input className="form-sub" type="submit" value="Send"   />
      
    </form>
</div>

    </div></>)
  }


export default Pop