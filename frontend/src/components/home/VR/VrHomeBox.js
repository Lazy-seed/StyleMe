import React from 'react'
import './VRhome.css'
import img1 from './img/img3.jpg'
import img2 from './img/icon-deal.png'
import img3 from './img/icons8-3d-48.png'
import img4 from './img/icons8-4k-40.png'
import img5 from './img/icons8-360-view-100.png'
import img6 from './img/icons8-bars-48.png'
import img7 from './img/icons8-shopping-64.png'

export default function VrHomeBox() {
    return (
        <div>
            <div className="home-container">
            </div>
            {/* <!-- home container --> */}
            <div className="main">
                <div className="right">
                    <div className="txt">
                        <h1 className='reveal fade-right' style={{fontSize: '55px', fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", color:'black'}} > 
                        Move your closet </h1><h1 className='reveal fade-right' style={{fontSize: '50px', fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", color:'lightblue'}}>to next level </h1>
                        <h2 className='reveal fade-right' style={{fontWeight:'80',fontSize:'small'}}> Bringing the real world shopping experience online
                            try on items, get accurate size recommendatons and style outfits - all
                                from within your elevated online store.
                            </h2>
                            <a href="/vr"><button className="demo reveal fade-right"> Start Customization </button></a>
                            <div className="vr_features reveal fade-right">
                                <div className='vr_box'>
                                    <img className="img" src={img7} alt=""/>
                                        <h3>Alogritms</h3>
                                </div>
                                <div className='vr_box'>
                                    <img className="img" src={img4} alt=""/>
                                        <h3>Rendering</h3>
                                </div>
                                <div className='vr_box'>
                                    <img className="img" src={img5} alt=""/>
                                        <h3>Visualization</h3>
                                </div>
                                <div className='vr_box '>
                                    <img className="img" src={img2} alt=""/>
                                        <h3>Simulation</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="left reveal fade-bottom">
                        <img src={img1} alt="home" id='vr_img' />
                    </div>
                   
                </div>
            </div>
            )
}
