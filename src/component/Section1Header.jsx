import React from 'react'
import '../css/Section1.css'

function Section1Header() {
    return (
        <div className='header-container'>
            <div className='navigation'>
                <img src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960ed7_logo-web-brandingfolio-x-webflow-template.svg" alt="" />
                <div className='nav-list'>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                    <li>
                        <a href="">Blog</a>
                    </li>
                    <div className='dropdown-nav'>
                        <a href="">Pages</a>
                        <img src="dropdown-arrow-svgrepo-com.svg" alt="" />
                    </div>
                    <a href="">Cart(0)</a>
                </div>
            </div>
            <div className='contact-us'>
                <a href="">Contat Us</a>
            </div>
        </div>
    )
}
export default Section1Header
