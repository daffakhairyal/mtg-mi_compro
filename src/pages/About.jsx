import React from 'react'
import { useInView } from 'react-intersection-observer';
import Overview from '../components/Overview'
import VisionMission from '../components/VisionMission'
import "./About.css"

const About = () => {
  const { ref: overviewRef, inView: overviewInView } = useInView({ threshold: 0.1 });
  const { ref: visionMissionRef, inView: visionMissionInView } = useInView({ threshold: 0.1 });

  return (
    <div className='text-white max-w-7xl mx-auto pt-20 px-6'>
      <div className='md:pt-10'>
        <div 
          ref={overviewRef} 
          className={`animation-scroll ${overviewInView ? 'animate' : ''}`}>
          <Overview />
        </div>
        <div 
          ref={visionMissionRef} 
          className={`animation-scroll ${visionMissionInView ? 'animate' : ''}`}>
          <VisionMission />
        </div>
      </div>
    </div>
  )
}

export default About;
