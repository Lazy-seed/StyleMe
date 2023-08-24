/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './css/slider.css';
import "./css/herocont3.css";
import "./css/herocont.css";
import "./css/herocont2.css";

import { Link } from 'react-router-dom';
import icon1 from "./img/algorithm.png";
import icon2 from "./img/4k.png";
import icon3 from "./img/360.png";
import icon4 from "./img/3D.png";
import img2 from "./img/vr.png";
import heroimg from "./img/heroimg.jpg";
import heroimgS2 from "./img/man.jpg";

export default function Slider() {
   
    return (<>


        <div className="img-slider_container">
            <div className="img-slider">
                <div className="slider-container">

                    <div className="slide">
                    <div className='h_cont'>
                <div className='herocont2'>
                    <div>
                        <img id='heroimgs2' src={heroimgS2} />
                    </div>
                    <div id='h2_content'>
                        <span id='h2_heading' >3D VIRTUAL FITTING</span>
                        <span style={{ paddingBottom: '35px' }} id='h2_heading' > AND STYLING</span>
                        <span style={{ fontSize: 'larger', fontFamily: 'sans-serif', color:'#ef7767' }}> Bringing the real world shopping experience online</span>  <br />
                        <span style={{ paddingBottom: '25px', color:'#3f4a5c' }}>try on items get accurate size recommendatons and <br />style outfits- all
                            from within your elevated online store</span>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', padding: '10px', alignItems: 'center' }}><img src={icon1} style={{ width: '40px' }} /> <label>Alogritms</label></div>
                            <div style={{ display: 'flex', flexDirection: 'column', padding: '10px', alignItems: 'center' }}><img src={icon2} style={{ width: '40px' }} /> <label>Rendering</label></div>
                            <div style={{ display: 'flex', flexDirection: 'column', padding: '10px', alignItems: 'center' }}><img src={icon3} style={{ width: '40px' }} /> <label>Visualization</label></div>
                            <div style={{ display: 'flex', flexDirection: 'column', padding: '10px', alignItems: 'center' }}><img src={icon4} style={{ width: '40px' }} /> <label>Simulation</label></div>
                        </div>
                        <Link to="/vr" id='vr-btn'>Start Customization</Link>
                    </div>
                </div>
            </div>
                    </div>

                    <div className="slide">
                    <div className='h_cont'>
                <div className='herocont'>
                    <div id='h_content'>
                        <div>
                            <span id='h_heading' >A <span id='golden'>luxury</span> everyone </span> <br />
                            <span id='h_heading' > can afford</span>
                        </div>
                        <div>
                            <h5> A tiny VS Code extension made up of a few commands <br />
                                that generate and insert lorem ipsum text into a <br />
                                text file. To use the extension, open the command <br />
                                </h5>
                        </div>
                        <div className='slider_product_link'>
                            <Link id='slider_product_link'>products</Link>
                        </div>
                    </div>

                    <div >
                        <img id='img-cont' src={heroimg} />
                    </div>
                </div>

            </div>
                    </div>

                    <div className="slide">
                        <div className='h_cont'>

                            <div className='herocont3'>


                                <div className="container_h3">
                                    <h1 id="headline" style={{ paddingLeft: '15px' }}> we are launching</h1>
                                    <h1> something creative</h1>
                                    <div id="countdown">
                                        <ul>
                                            <li className='list'><span id="days"></span>days</li>
                                            <li className='list'><span id="hours"></span>Hours</li>
                                            <li className='list'><span id="minutes"></span>Minutes</li>
                                            <li className='list'><span id="seconds"></span>Seconds</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    </>)
}
