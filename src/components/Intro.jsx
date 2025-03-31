import React from 'react'
import profile from '../images/profile.jpg'
import './Intro.css'
import { Link } from 'react-scroll'
import Navbar from './Navbar'

const Intro = () => {
  return (
    <section id='intro'> 
        <div className="content">
            <span className='hello'>Hello I'm</span>
            <span className="name">James Smith</span>
            <span className="job">Web Developer from New York</span>
            <p className="des">I am skilled and passionate web designer with experience in creating<br></br> visually appealing and user friendly website</p>
            <div className='buttons'>
            <Link><button className="quote">Get a Quote</button></Link>
            <Link>About Me</Link>
            </div>
        </div>
        <img src={profile} alt="Profile photo" className='profile'/>
    </section>
  )
}

export default Intro