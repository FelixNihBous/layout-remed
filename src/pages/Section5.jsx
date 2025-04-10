import React from 'react';
import '../css/Section5.css';

function Section5() {
    return (
        <div className='section5-wrapper'>
            <div className="section5-container">
            <div className="buy-wrapper">
                <div className="buy-explanation">
                    <img className="webflow-logo" src="/webflow_logo.svg" alt="" />
                </div>
                <h1>Buy now on Webflow</h1>
                <p>
                    Get the Brandingfolio X Webflow Template today, and take your website
                    design to the next level.
                </p>
                <div className="button-image-container">
                    <div className="white-buy-template">
                        <a href="white-buy-button">Buy Template</a>
                    </div>
                    <img
                        className="imgBuy"
                        src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960fc5_brandingfolio-x-brandingfolio-banner-branding-agency-webflow-template.png"
                        alt=""
                    />
                </div>
            </div>
            <div className="all-template">
                <div className="template-explenation">
                    <img className="webflow-logo" src="/dot_icon.svg" alt="" />
                </div>
                <h1>Browse all templates</h1>
                <p>
                Looking for more templates? Browse our collection of 100+ Webflow Templates on BRIXTemplates.com
                </p>
                <div className="button-image-container">
                    <div className="purple-template-button">
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