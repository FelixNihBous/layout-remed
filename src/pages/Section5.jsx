import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../css/Section5.css';

gsap.registerPlugin(ScrollTrigger);

function Section5() {
  const buyWrapperRef = useRef(null);
  const allTemplateRef = useRef(null);
  const buyTemplateBtnRef = useRef(null);
  const exploreTemplateBtnRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = [
        { ref: buyWrapperRef.current, trigger: buyWrapperRef.current },
        { ref: allTemplateRef.current, trigger: allTemplateRef.current },
      ];

      elements.forEach(({ ref, trigger }) => {
        gsap.fromTo(
          ref,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: trigger, start: "top 80%", once: true } }
        );
      });

      // Hover animations for buttons
      gsap.to(buyTemplateBtnRef.current, {
        scale: 0.95,
        duration: 0.2,
        paused: true,
        ease: 'power2.out',
      });

      gsap.to(exploreTemplateBtnRef.current, {
        scale: 0.95,
        duration: 0.2,
        paused: true,
        ease: 'power2.out',
      });

      buyTemplateBtnRef.current.addEventListener('mouseenter', () => {
        gsap.to(buyTemplateBtnRef.current, { paused: false, scale: 0.95 });
      });

      buyTemplateBtnRef.current.addEventListener('mouseleave', () => {
        gsap.to(buyTemplateBtnRef.current, { scale: 1, duration: 0.2 });
      });

      exploreTemplateBtnRef.current.addEventListener('mouseenter', () => {
        gsap.to(exploreTemplateBtnRef.current, { paused: false, scale: 0.95 });
      });

      exploreTemplateBtnRef.current.addEventListener('mouseleave', () => {
        gsap.to(exploreTemplateBtnRef.current, { scale: 1, duration: 0.2 });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className='section5-wrapper'>
      <div className="section5-container">
        <div className="buy-wrapper" ref={buyWrapperRef}>
          <div className="buy-explanation">
            <img className="webflow-logo" src="/webflow_logo.svg" alt="" />
          </div>
          <h1>Buy now on Webflow</h1>
          <p>
            Get the Brandingfolio X Webflow Template today, and take your website
            design to the next level.
          </p>
          <div className="button-image-container">
            <div className="white-buy-template" ref={buyTemplateBtnRef}>
              <a href="white-buy-button">Buy Template</a>
            </div>
            <img
              className="imgBuy"
              src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960fc5_brandingfolio-x-brandingfolio-banner-branding-agency-webflow-template.png"
              alt=""
            />
          </div>
        </div>
        <div className="all-template" ref={allTemplateRef}>
          <div className="template-explenation">
            <img className="webflow-logo" src="/dot_icon.svg" alt="" />
          </div>
          <h1>Browse all templates</h1>
          <p>
            Looking for more templates? Browse our collection of 100+ Webflow Templates on BRIXTemplates.com
          </p>
          <div className="button-image-container">
            <div className="purple-template-button" ref={exploreTemplateBtnRef}>
              <a href="white-buy-button">Explore more templates</a>
            </div>
            <img
              className="imgBuy"
              src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f98_brandingfolio-x-brix-banner-branding-agency-webflow-template.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section5;