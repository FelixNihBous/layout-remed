import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../css/Section1.css';

gsap.registerPlugin(ScrollTrigger);

function Section1Body() {
  const bodyContainerRef = useRef(null);
  const moving1Ref = useRef(null);
  const moving2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(moving1Ref.current, {
        y: 50,
        scrollTrigger: {
          trigger: bodyContainerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
          onComplete: () => {
            gsap.to(moving1Ref.current, {
              y: 50,
              repeat: -1,
              yoyo: true,
              duration: 2,
            });
          },
        },
      });

      gsap.to(moving2Ref.current, {
        y: -50,
        scrollTrigger: {
          trigger: bodyContainerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
          onComplete: () => {
            gsap.to(moving2Ref.current, {
              y: -50,
              repeat: -1,
              yoyo: true,
              duration: 2,
            });
          },
        },
      });

      ScrollTrigger.create({
        trigger: bodyContainerRef.current,
        pin: true,
        start: 'top top',
        end: '100vh',
        pinSpacing: false,
      });
    }, bodyContainerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="body-container" ref={bodyContainerRef}>
      <div className="body-content">
        <h1>Brandingfolio X Webflow Template</h1>
        <p>Presenting Brandingfolio X, the ultimate Branding Agency Webflow Template.</p>
        <div className="btn-wrapper">
          <div className="buy-btn">
            <a href="buy-btn-home">Buy Template</a>
          </div>
          <div className="white-explore-btn">
            <a href="white-explore-button">Explore Pages</a>
          </div>
        </div>
      </div>

      <div className="image-wrapper">
        <div className="image-container moving1" ref={moving1Ref}>
          <img className="image-border" src="/branding-agency.png" alt="" />
          <img className="image-border" src="/elevate.png" alt="" />
          <img className="image-border" src="/partical.png" alt="" />
        </div>
        <div className="image-container moving2" ref={moving2Ref}>
          <img className="image-border" src="/package-brand.png" alt="" />
          <img className="image-border" src="/brand_indentity.png" alt="" />
          <img className="image-border" src="/sophie.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Section1Body;