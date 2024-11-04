import React, { useEffect, useRef, useState } from 'react';
import CompanyInfo from '../components/CompanyInfo'
import "./About.css"

const Contact = () => {

  const [isOverviewVisible, setIsOverviewVisible] = useState(false);
  const [isVisionMissionVisible, setIsVisionMissionVisible] = useState(false);

  const overviewRef = useRef(null);
  const visionMissionRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null, 
      rootMargin: "0px",
      threshold: 0.1, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === overviewRef.current) {
            setIsOverviewVisible(true);
          }
          if (entry.target === visionMissionRef.current) {
            setIsVisionMissionVisible(true);
          }
        }
      });
    }, options);

    if (overviewRef.current) observer.observe(overviewRef.current);
    if (visionMissionRef.current) observer.observe(visionMissionRef.current);

    // Clean up observer
    return () => {
      if (overviewRef.current) observer.unobserve(overviewRef.current);
      if (visionMissionRef.current) observer.unobserve(visionMissionRef.current);
    };
  }, []);
  return (
    <div className='text-white max-w-7xl mx-auto pt-20 px-6'>
    <div ref={overviewRef} 
          className={`animation-scroll ${isOverviewVisible ? 'animate' : ''}`}>
     <CompanyInfo/>
     </div>
    </div>
  )
}

export default Contact
