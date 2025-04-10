import React from 'react'
import '../css/Section3.css'

function Section3() {
    return (
        <div className='section3-container'>
            <div className='section3-title'>
                <h1>Utility pages</h1>
                <p>Take a look at the utility pages included in the Brandingfolio X Template.</p>
            </div>
            <div className='image3-wrapper'>
                <img className='image-border' src="/error404.png" alt="" />
                <img className='image-border' src="/protected.png" alt="" />
            </div>
            <div className='buy-template'>
            <a href="buy-button">Buy Template</a>
          </div>
        </div>
    )
}

export default Section3
