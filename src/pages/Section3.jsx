import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../css/Section3.css';

gsap.registerPlugin(ScrollTrigger);

function Section3() {
  const titleRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const buyTemplateRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = [
        { ref: titleRef.current, trigger: titleRef.current },
        { ref: imageWrapperRef.current, trigger: imageWrapperRef.current },
        { ref: buyTemplateRef.current, trigger: buyTemplateRef.current },
      ];

      elements.forEach(({ ref, trigger }) => {
        gsap.fromTo(
          ref,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: trigger, start: "top 80%", once: true } }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className='section3-container'>
      <div className='section3-title' ref={titleRef}>
        <h1>Utility pages</h1>
        <p>Take a look at the utility pages included in the Brandingfolio X Template.</p>
      </div>
      <div className='image3-wrapper' ref={imageWrapperRef}>
        <img className='image-border' src="/error404.png" alt="" />
        <img className='image-border' src="/protected.png" alt="" />
      </div>
      <div className='buy-template' ref={buyTemplateRef}>
        <a href="buy-button">Buy Template</a>
      </div>
    </div>
  );
}

export default Section3;