import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../css/Section2.css';

gsap.registerPlugin(ScrollTrigger);

function Section2() {
  const imageData = [
    { title: '19+ Pages', imageSrc: '/19_pages.png' },
    { title: '35+ Sections', imageSrc: '/35_section.png' },
    { title: '25+ Styles & Symbols', imageSrc: '/25_style.png' },
  ];

  const mainPageImage = [
    { image: "https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960fc3_brandingfolio-x-home-v1-main-page-branding-agency-webflow-template.png", title: "Home V1" },
    { image: "/homev2.png", title: "Home V2" },
    { image: "/homev3.png", title: "Home V3" },
    { image: "/about.png", title: "About" },
    { image: "/bloog1.png", title: "Blog V1" },
    { image: "/blogv2.png", title: "Blog V2" },
    { image: "/blog3.png", title: "Blog V3" },
    { image: "/blog-post.png", title: "Blog post" },
    { image: "/category.png", title: "Blog category" },
    { image: "/sophie.png", title: "Team member" },
    { image: "/portofolio.png", title: "Portfolio" },
    { image: "/brand_indentity.png", title: "Portfolio single" },
    { image: "/package-brand.png", title: "Packages" },
    { image: "/landing-page.png", title: "Packages single" },
    { image: "https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f57_brandingfolio-x-contact-v1-main-page-branding-agency-webflow-template.png", title: "Contact V1" },
    { image: "/contactv2.png", title: "Contact V2" },
    { image: "https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f58_brandingfolio-x-contact-v3-main-page-branding-agency-webflow-template.png", title: "Contact V3" }
  ];

  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const figmaRequestRef = useRef(null);
  const webflowTemplatesRef = useRef(null);
  const mainPageContainerRef = useRef(null);
  const buyTemplate1Ref = useRef(null);
  const buyTemplate2Ref = useRef(null);
  const requestFileRef = useRef(null);
  const browserTemplatesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = [
        { ref: titleRef.current, trigger: titleRef.current },
        { ref: contentRef.current, trigger: contentRef.current },
        { ref: figmaRequestRef.current, trigger: figmaRequestRef.current },
        { ref: webflowTemplatesRef.current, trigger: webflowTemplatesRef.current },
        { ref: mainPageContainerRef.current, trigger: mainPageContainerRef.current },
        { ref: buyTemplate1Ref.current, trigger: buyTemplate1Ref.current },
        { ref: buyTemplate2Ref.current, trigger: buyTemplate2Ref.current },
        { ref: requestFileRef.current, trigger: requestFileRef.current },
        { ref: browserTemplatesRef.current, trigger: browserTemplatesRef.current },
      ];

      elements.forEach(({ ref, trigger }) => {
        gsap.fromTo(
          ref,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: trigger, start: "top 80%", once: true } }
        );
      });

      // Hover animations for buttons
      gsap.to(buyTemplate1Ref.current, {
        scale: 0.95,
        duration: 0.2,
        paused: true,
        ease: 'power2.out',
      });

      gsap.to(buyTemplate2Ref.current, {
        scale: 0.95,
        duration: 0.2,
        paused: true,
        ease: 'power2.out',
      });

      gsap.to(requestFileRef.current, {
        scale: 0.95,
        duration: 0.2,
        paused: true,
        ease: 'power2.out',
      });

      gsap.to(browserTemplatesRef.current, {
        scale: 0.95,
        duration: 0.2,
        paused: true,
        ease: 'power2.out',
      });

      buyTemplate1Ref.current.addEventListener('mouseenter', () => {
        gsap.to(buyTemplate1Ref.current, { paused: false, scale: 0.95 });
      });

      buyTemplate1Ref.current.addEventListener('mouseleave', () => {
        gsap.to(buyTemplate1Ref.current, { scale: 1, duration: 0.2 });
      });

      buyTemplate2Ref.current.addEventListener('mouseenter', () => {
        gsap.to(buyTemplate2Ref.current, { paused: false, scale: 0.95 });
      });

      buyTemplate2Ref.current.addEventListener('mouseleave', () => {
        gsap.to(buyTemplate2Ref.current, { scale: 1, duration: 0.2 });
      });

      requestFileRef.current.addEventListener('mouseenter', () => {
        gsap.to(requestFileRef.current, { paused: false, scale: 0.95 });
      });

      requestFileRef.current.addEventListener('mouseleave', () => {
        gsap.to(requestFileRef.current, { scale: 1, duration: 0.2 });
      });

      browserTemplatesRef.current.addEventListener('mouseenter', () => {
        gsap.to(browserTemplatesRef.current, { paused: false, scale: 0.95 });
      });

      browserTemplatesRef.current.addEventListener('mouseleave', () => {
        gsap.to(browserTemplatesRef.current, { scale: 1, duration: 0.2 });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className='section2-container'>
      <div className='section2-title' ref={titleRef}>
        <h1>What is included in Brandingfolio X</h1>
        <p>Brandingfolio X Webflow Template includes over 19 pages in total, with more than 35 sections.</p>
      </div>
      <div className="section2-content" ref={contentRef}>
        <div className='product-2-explanation'>
          {imageData.map((item, index) => (
            <div className="image-card-bordered" key={index}>
              <div className="image-container-bordered">
                <img className='imageSection2' src={item.imageSrc} alt={item.title} />
              </div>
              <div className="card-content-bordered">
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='figma-request' ref={figmaRequestRef}>
          <div className='figma-description'>
            <img src="/figma_icon.svg" alt="" />
            <h2>Figma file included</h2>
            <p>Send us an email to brandingfoliox@brixtemplates.com with your purchase receipt, and we will send you the editable Figma file for the Brandingfolio X template.</p>
            <div className='request-file' ref={requestFileRef}>
              <a href="#" className="btn btn-primary">Request Figma file</a>
            </div>
          </div>
          <div className='figmaimg'>
            <img className='brand-figma' src="/figma.png" alt="" />
          </div>
        </div>
        <div className='webflow-templates' ref={webflowTemplatesRef}>
          <img className='imageWebflow' src="/webflow_template.png" alt="" />
          <div className='webflow-description'>
            <img className='dotIcon' src="/dot_icon.svg" alt="" />
            <h2>Looking for more amazing Webflow Templates?</h2>
            <p>Take a look at our collection of 100+ premium Webflow Templates at BRIX Templates.</p>
            <div className='template-button' ref={browserTemplatesRef}>
              <a className='browser-template' href="">Browser templates</a>
            </div>
          </div>
        </div>
        <div className='buy-template' ref={buyTemplate1Ref}>
          <a href="buy-button">Buy Template</a>
        </div>
        <div className='mainPage-container' ref={mainPageContainerRef}>
          <div className='mainPage-explanation'>
            <h2>Main pages</h2>
            <p>Take a look at the main pages included in the Brandingfolio X Template.</p>
            {mainPageImage.map((item, index) => (
              <div className="pageImage-card-bordered" key={index}>
                <div className="pageImage-container-bordered">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="pageCard-content-bordered">
                  <p>{item.title}</p>
                </div>
              </div>
            ))}
          </div>
          <div className='buy-template' ref={buyTemplate2Ref}>
            <a href="buy-button">Buy Template</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;