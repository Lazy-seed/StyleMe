import React from 'react'
import './footer.css'
import img from './bus.png'

export default function Footer() {
  return (
    <>

<div className="footer_container">
        <div className="wrapper">
            <div className="shop">
                <h4>SHOP</h4>
                <ul>
                    <li>Womens</li>
                    <li>Men</li>
                    <li>Baby</li>
                    <li>Kids</li>
                    <li>styleME HOME</li>
                    <li>Sport</li>
                </ul>
            </div>
            <div className="corporate_info">
                <h4>CORPORATE INFO</h4>

                <ul>
                    <li>at styleME</li>
                    <li>About styleME group</li>
                    <li>Sustainability</li>
                    <li>Press</li>
                    <li>Investor relations</li>
                    <li>Corporate governance</li>
                </ul>
            </div>
            <div className="help">
                <h4>HELP</h4>
                <ul>
                    <li> Service</li>
                    <li>My styleME</li>
                    <li>Find a store</li>
                    <li>Legal & Privacy</li>
                    <li>Contact</li>
                    <li>Report a scam</li>
                </ul>
            </div>
        </div>

        <div className="imgs">
            {/* <img src="./bus.png" alt="" />
            <img src="./bus.png" alt="" />
            <img src="./bus.png" alt="" />
            <img src="./bus.png" alt="" />
            <img src="./bus.png" alt="" /> */}
        </div>
        <div className="info">
            The content of this site is copyright-protected and is the property of
            styleME Hennes & Mauritz AB. styleME’s business concept is to offer
            fashion and quality at the best price in a sustainable way. styleME has
            since it was founded in 1947 grown into one of the world's leading
            fashion companies.
        </div>
    </div>

    </>
  )
}
