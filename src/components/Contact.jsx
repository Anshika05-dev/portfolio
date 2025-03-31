import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <section id='contact'>
        {/* <div className='contain'> */}
        <div className='contact_container'>
            <h4 className='shy'>Don't be shy</h4>
            <h2 className='line'>Drop Me a Line</h2>
            <div className="input">
            <input type='text' placeholder='Name' className='contact_name'></input>
            <input type='text' placeholder='E-mail' className='email'></input>
            <textarea type='text' placeholder='Message' rows='5' className='msg'></textarea>
            <button className='submit_btn'>Submit Message</button>
            </div>
        </div>
        {/* <div className='contact_right'>
        <i class="fa-solid fa-location-dot">Location</i>
        <i class="fa-solid fa-envelope">E-Mail</i>
        <i class="fa-solid fa-phone">Phone</i>
        </div>
        </div> */}
    </section>
  )
}

export default Contact


// @media (max-width: 425px){
//   .contact_container{
//       padding: 1.5rem 1rem;
//        width:75vw;
//   }
//   .shy{
//       font-size: 1rem;
//   }
//   .line{
//       font-size: 1.5rem;
//   }
// }