import React from 'react'
import './AboutCards.css'

const AboutCards = ({number,title,des}) => {
  return (
    <div className='skills'>
        <div className='skill'>
            <div className='top'>
            <span>{number}</span>
            <h4>{title}</h4>
            </div>
            <p>{des}</p>
        </div>
    </div>
  )
}

export default AboutCards