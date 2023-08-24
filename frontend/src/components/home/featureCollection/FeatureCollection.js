/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import "./featureCollection.css"
import "../animation.css"
import p1 from "../imgs/im.jpg"
export default function F4() {
  return (
    <div className='f4'>
      <h1 id='shop_heading' > featured collections</h1>
      <div className='f4_Products reveal fade-left'>
        <div className='main_f4'>
          <div id='product1_box'>
            <img style={{ width: '275px', height: '390px'}} src="https://rukminim1.flixcart.com/image/612/612/xif0q/coat/b/i/b/xl-ct6065mr-alsace-lorraine-paris-original-imagja7y64yf7f4h.jpeg?q=70" id='p1_box'/>
          </div>
        </div>

        <div className='main_f4'>
          <div id='product1_box'>
            <img style={{ width: '275px', height: '390px'}} src="https://rukminim1.flixcart.com/image/832/832/xif0q/jacket/c/f/0/s-mnt-7003-montrez-original-imagffv4hs3k6quc-bb.jpeg?q=70" id='p1_box'/>
          </div>
        </div>

        <div className='main_f4'>
          <div id='product1_box'>
            <img style={{ width: '275px', height: '390px'}} src="https://rukminim1.flixcart.com/image/832/832/xif0q/jacket/a/h/i/xl-mnt-7025-montrez-original-imag5hb93udpfs4q-bb.jpeg?q=70" id='p1_box'/>
          </div>
        </div>

        <div className='main_f4'>
          <div id='product1_box'>
            <img style={{ width: '275px', height: '390px'}} src="https://rukminim1.flixcart.com/image/612/612/l58iaa80/coat/t/8/2/xxl-hnwmcta1gold-honnete-original-imagfykn3seyg2zj.jpeg?q=70" id='p1_box'/>
          </div>
        </div>

        
      </div>
    </div>
  )
}
