import React from 'react';
import '../css/Footer.css';

function Footer() {
  return (
    <>
      <div className='footer'>
        <div className='footer-top'>
          <div className='left-top'>
            <h2>Contact us today!</h2>
            <p>
              Nunc tortor aliquam nec sed nunc convallis tincidunt quam <br />
              felis volutpat ut consequat turpis risus lacus hendrerit.
            </p>
          </div>
          <div className='right-top'>
            <div className='btn-contact'>
              <button className='contact-btn'>Contact us</button>
              <button className='project-btn'>Our projects</button>
            </div>
          </div>
        </div>
        <div className='footer-bot'>
          <div className='layout1-footer'>
            <a href='#'>
              <img src='/LogoWhite.svg' alt='' />
            </a>
            <p>
              Copyright © Brandingfolio X | Designed by <br />{' '}
              <a href='#'>BRIX Templates</a> - Powered by <a href='#'>Webflow</a>
            </p>
            <h4>Subscribe to our newsletter</h4>
            <label htmlFor=''>
              <input type="email" placeholder="Your email address" />
              <button>Subscribe</button>
            </label>
          </div>
          <div className='layout2-footer'>
            <h4>Pages</h4>
            <div className='pages-footer'>
                <div>
                    <ul>
                    <li>
                        <a href='#'>Preview</a>
                    </li>
                    <li>
                        <a href='#'>Home V1</a>
                    </li>
                    <li>
                        <a href='#'>Home V2</a>
                    </li>
                    <li>
                        <a href='#'>Home V3</a>
                    </li>
                    <li>
                        <a href='#'>About</a>
                    </li>
                    <li>
                        <a href='#'>Blog V1</a>
                    </li>
                    <li>
                        <a href='#'>Blog V2</a>
                    </li>
                    <li>
                        <a href='#'>Blog V3</a>
                    </li>
                    <li>
                        <a href='#'>Blog post</a>
                    </li>
                    </ul>
                </div>
                <div>
                <ul>
                    <li>
                        <a href='#'>Blog category</a>
                    </li>
                    <li>
                        <a href='#'>Packages</a>
                    </li>
                    <li>
                        <a href='#'>Packages single</a>
                    </li>
                    <li>
                        <a href='#'>Contact v1</a>
                    </li>
                    <li>
                        <a href='#'>Contact v2</a>
                    </li>
                    <li>
                        <a href='#'>Contact v3</a>
                    </li>
                    <li>
                        <a href='#'>Portfolio</a>
                    </li>
                    <li>
                        <a href='#'>Portfolio Single</a>
                    </li>
                    <li>
                        <a href='#'>Team member</a>
                    </li>
                    </ul>
                </div>
            </div>
          </div>
          <div className='layout3-footer'>
            <h4>Utility pages</h4>
            <ul>
              <li>
                <a href='#'>Blog category</a>
              </li>
              <li>
                <a href='#'>Packages</a>
              </li>
              <li>
                <a href='#'>Packages single</a>
              </li>
              <li>
                <a href='#'>Contact v1</a>
              </li>
              <li>
                <a href='#'>Contact v2</a>
              </li>
              <li>
                <a href='#'>Contact v3</a>
              </li>
              <li>
                <a href='#'>Portfolio</a>
              </li>
              <li>
                <a href='#'>Portfolio Single</a>
              </li>
              <li>
                <a href='#'>Team member</a>
              </li>
            </ul>
          </div>
          <div className='layout4-footer'>
            <h4>Follow us</h4>
            <ul>
              <li>
                <a href='#'><img src="Facebook.svg" alt="" />Facebook</a>
              </li>
              <li>
                <a href='#'><img src="Twitter.svg" alt="" />Twitter</a>
              </li>
              <li>
                <a href='#'><img src="Instagram.svg" alt="" />Instagram</a>
              </li>
              <li>
                <a href='#'> <img src="Linkdin.svg" alt="" />LinkedIn</a>
              </li>
              <li>
                <a href='#'><img src="Youtube.svg" alt="" />Youtube</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;