import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import eduImgBlack from '../../assets/eduImgBlack.svg';
import './Education.css';

function EducationCard({ id, institution, course, startYear, endYear }) {
    const [isVisible, setIsVisible] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true, // Only trigger once
        threshold: 0.5, // Trigger animation when 50% of the component is in view
    });

    // Update visibility state when component enters the viewport
    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        }
    }, [inView]);

    return (
        <motion.div
            key={id}
            ref={ref}
            className={`education-card`}
            style={{ 
                borderColor: '#7500fa', 
                borderWidth: '1px', 
                borderStyle: 'solid',
                overflow: 'hidden' // Ensure overflow is hidden to avoid border distortion on hover
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ 
                scale: 1.05, // Scale up by 5% on hover
                borderColor: '#7500fa', // Change border color on hover
                boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)' // Add box shadow on hover
            }}
        >
            <div className="educard-img" style={{ backgroundColor: '#7500fa' }}>
                <img src={eduImgBlack} alt="" />
            </div>
            <div className="education-details">
                <h6 style={{ color: '#7500fa' }}>{startYear}-{endYear}</h6>
                <h4 style={{ color: 'white' }}>{course}</h4>
                <h5 style={{ color: 'white' }}>{institution}</h5>
            </div>
        </motion.div>
    );
}

export default EducationCard;
