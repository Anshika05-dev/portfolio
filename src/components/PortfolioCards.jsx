import React from 'react'
import './PortfolioCards.css'

const PortfolioCards = ({app,app_description,backgroundImage,link, floatDirection }) => {
    const cardStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition:'50% 50%'
      };
      const contentClass = floatDirection === 'left' ? 'content-left' : 'content-right';
  return (
    <div className={`portfoliocard ${contentClass}`} style={cardStyle}>
        <div className='pcontent'>
        <h5 className='app'>{app}</h5>
        <p className='app_description'>{app_description}</p>
        <a href='#' className='link'>{link}</a>
        </div>
    </div>
  )
}

export default PortfolioCards