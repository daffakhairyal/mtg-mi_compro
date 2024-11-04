import React, { useEffect, useRef, useState } from "react";
import HeroSection from "../components/HeroSection";
import Workflow from "../components/Workflow";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import FeatureSection from "../components/FeatureSection";
import "./Home.css";
import CompanyInfo from "../components/CompanyInfo";
import Activity from "../components/Activity";

const Home = () => {
  const [isFeatureVisible, setIsFeatureVisible] = useState(false);
  const [isWorkflowVisible, setIsWorkflowVisible] = useState(false);
  const [isPricingVisible, setIsPricingVisible] = useState(false);
  const [isTestimonialsVisible, setIsTestimonialsVisible] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  const featureRef = useRef(null);
  const workflowRef = useRef(null);
  const pricingRef = useRef(null);
  const testimonialsRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null, 
      rootMargin: "0px",
      threshold: 0.1, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === featureRef.current) {
            setIsFeatureVisible(true);
          }
          if (entry.target === workflowRef.current) {
            setIsWorkflowVisible(true);
          }
          if (entry.target === pricingRef.current) {
            setIsPricingVisible(true);
          }
          if (entry.target === testimonialsRef.current) {
            setIsTestimonialsVisible(true);
          }
          if (entry.target === footerRef.current) {
            setIsFooterVisible(true);
          }
        }
      });
    }, options);

    if (featureRef.current) observer.observe(featureRef.current);
    if (workflowRef.current) observer.observe(workflowRef.current);
    if (pricingRef.current) observer.observe(pricingRef.current);
    if (testimonialsRef.current) observer.observe(testimonialsRef.current);
    if (footerRef.current) observer.observe(footerRef.current);

    // Clean up observer
    return () => {
      if (featureRef.current) observer.unobserve(featureRef.current);
      if (workflowRef.current) observer.unobserve(workflowRef.current);
      if (pricingRef.current) observer.unobserve(pricingRef.current);
      if (testimonialsRef.current) observer.unobserve(testimonialsRef.current);
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  return (
    <>
      <HeroSection />

      <div className="relative flex justify-center items-center max-w-8xl mx-auto  pb-10">

          <div className="md:absolute w-full md:w-5/6">
          <div 
          ref={featureRef}
          className={`animation-scroll ${isFeatureVisible ? 'animate' : ''}`}
        >
            <FeatureSection />
          </div>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto md:pt-20 px-6">
        <div 
          ref={workflowRef}
          className={`animation-scroll ${isWorkflowVisible ? 'animate' : ''}`}
        >
          <Workflow />
        </div>

        <div 
          ref={pricingRef}
          className={`animation-scroll ${isPricingVisible ? 'animate' : ''}`}
        >
          <Activity />
        </div>

        <div 
          ref={testimonialsRef}
          className={`animation-scroll ${isTestimonialsVisible ? 'animate' : ''}`}
        >
          <Testimonials />
        </div>

        {/* <div 
          ref={footerRef}
          className={`animation-scroll ${isFooterVisible ? 'animate' : ''}`}
        >
          <CompanyInfo/>
        </div> */}
      </div>
    </>
  );
};

export default Home;
