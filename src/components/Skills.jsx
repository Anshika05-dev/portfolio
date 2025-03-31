import React from 'react'
import './Skills.css'

const Skills = ({skill_name,width}) => {
  return (
    <div className='skill'>
        <div className="skill_content">
        <h4>{skill_name} </h4>
        <p>{width}</p>
        </div>
        <div className="bar">&nbsp;
            <div className='covered' style={{ width: width }}></div>
        </div>
    </div>
  )
}

export default Skills