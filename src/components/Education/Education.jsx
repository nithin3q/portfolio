import React from 'react';


import './Education.css'
import EducationCard from './EducationCard';


import eduImage from '../../assets/eduImage.svg'

import { educationData } from '../../data/educationData'


function Education() {

    return (
        <div className="education" id="Education" style={{ backgroundImage: 'linear-gradient(to left, rgb(5, 8, 40), rgb(1, 4, 39))'}}>
           {/* <Particle/> */}
            <div className="education-body">
                <div className="education-description">
                <h2  className='mt-5' style={{color:'#ffffff'}}>Edu<span style={{color:'#7500fa'}}>cation</span></h2>
                    {educationData.map(edu => (
                        <EducationCard 
                            key={edu.id}
                            id={edu.id}
                            institution={edu.institution}
                            course={edu.course}
                            startYear={edu.startYear}
                            endYear={edu.endYear}
                        />
                    ))}
                </div>
                <div className="education-image">
                    <img src={eduImage} alt="education"/>
                </div>
            </div>
        </div>
    )
}

export default Education
