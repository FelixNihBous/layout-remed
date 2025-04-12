import React, { useRef, useEffect } from 'react';
import '../css/Section4.css';
import gsap from 'gsap';

function Section4() {
    const buyTemplateRefs = useRef([]);
    const downloadIconSetRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // Function to add hover effect to buy template buttons
            const addHoverEffect = (ref) => {
                gsap.to(ref.current, {
                    scale: 0.95,
                    duration: 0.2,
                    paused: true,
                    ease: 'power2.out',
                });

                ref.current.addEventListener('mouseenter', () => {
                    gsap.to(ref.current, { paused: false, scale: 0.95 });
                });

                ref.current.addEventListener('mouseleave', () => {
                    gsap.to(ref.current, { scale: 1, duration: 0.2 });
                });
            };

            // Apply hover effect to all buy template buttons
            buyTemplateRefs.current.forEach(ref => {
                if (ref && ref.current) {
                    addHoverEffect(ref);
                }
            });

            // Apply hover effect to download icon set button
            if (downloadIconSetRef.current) {
                addHoverEffect(downloadIconSetRef);
            }
        }, []);

        return () => ctx.revert();
    }, []);

    return (
        <div className='section4-container'>
            <h1>The Brandingfolio X Webflow Template also comes with more surprises...</h1>
            <div className='explanation'>
                <div className='text'>
                    <h2>3 Headers and Footers</h2>
                    <p>With a total of 3 different headers and footers, you can easily customize the Brandingfolio X Webflow Template to fit your company needs and requirements.</p>
                    <div className='buy-template' ref={(el) => (buyTemplateRefs.current[0] = { current: el })}>
                        <a href="buy-button">Buy Template</a>
                    </div>
                </div>
                <img src="/3header-footer.png" alt="" />
            </div>
            <div className='explanation'>
                <img src="/notification.png" alt="" />
                <div className='text'>
                    <h2>3 Notification Bars</h2>
                    <p>If you are looking to get more sales, use one of our 3 notification bars included in the Brandingfolio X Webflow Template, and start promoting your products or services.</p>
                    <div className='buy-template' ref={(el) => (buyTemplateRefs.current[1] = { current: el })}>
                        <a href="buy-button">Buy Template</a>
                    </div>
                </div>
            </div>

            <div className='explanation'>
                <div className='text'>
                    <h2>Custom Icon Set</h2>
                    <p>The Brandingfolio X Webflow Template includes 3 sets of custom icons (rounded, square and filled), so you can easily use more icon fonts in your template.</p>
                    <p>No matter if you are looking to add another social media icon in the footer, or change the cart icon in the header, we got you covered.</p>
                    <div className='button-container'>
                        <div className='buy-template' ref={(el) => (buyTemplateRefs.current[2] = { current: el })}>
                            <a href="buy-button">Buy Template</a>
                        </div>
                        <div className='icon-set' ref={downloadIconSetRef}>
                            <a style={{ fontSize: '1px' }} href="">Download icon set</a>
                        </div>
                    </div>
                </div>
                <img src="/customText.png" alt="" />
            </div>
            <div className='explanation'>
                <img src="/brandingagency.png" alt="" />
                <div className='text'>
                    <h2>Social Media Assets</h2>
                    <p>Our Brandingfolio X Webflow Template Figma file includes a collection of social media covers that match with the Webflow Template design (for Facebook, Twitter and LinkedIn), so you can easily edit, customize, and use them for your own social media profiles.</p>
                    <div className='buy-template' ref={(el) => (buyTemplateRefs.current[3] = { current: el })}>
                        <a href="buy-button">Buy Template</a>
                    </div>
                </div>
            </div>
            <div className='explanation'>
                <div className='text'>
                    <h2>Email Signature</h2>
                    <p>Our Brandingfolio X Webflow Template Figma file includes 2 custom email signature templates that match with the Webflow template, and you can use them to impress your customers with an amazing email signature.</p>
                    <div className='buy-template' ref={(el) => (buyTemplateRefs.current[4] = { current: el })}>
                        <a href="buy-button">Buy Template</a>
                    </div>
                </div>
                <img src="/sophieinfo.png" alt="" />
            </div>
        </div>
    );
}

export default Section4;