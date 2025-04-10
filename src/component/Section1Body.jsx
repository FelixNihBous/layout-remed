import React from 'react'
import gsap from 'gsap';
import '../css/Section1.css'


function Section1Body() {

  return (
    <div className='body-container'>
      <div className='body-content'>
        <h1>Brandingfolio X Webflow Template</h1>
        <p>Presenting Brandingfolio X, the ultimate Branding Agency Webflow Template.</p>
        <div className='btn-wrapper'>

          <div className='buy-btn'>
            <a href="buy-btn-home">Buy Template</a>
          </div>
          <div className="white-explore-btn">
            <a href="white-explore-button">Explore Pages</a>
          </div>
        </div>

      </div>

      <div className='image-wrapper'>
        <div className='image-container'>
          <img className='image-border' src="/branding-agency.png" alt="" />
          <img className='image-border' src="/elevate.png" alt="" />
          <img className='image-border' src="/partical.png" alt="" />
        </div>
        <div className='image-container'>
          <img className='image-border' src="/package-brand.png" alt="" />
          <img className='image-border' src="/brand_indentity.png" alt="" />
          <img className='image-border' src="/sophie.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Section1Body;
