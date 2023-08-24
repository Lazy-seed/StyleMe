import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import "./collections.css";

import "../animation.css"
import axios from "axios";

export default function F1() {

  useEffect(() => {
    axios.get('http://localhost:4000/api/v1/products').then((response) => {
      setPro(response.data.product);
      console.log(response.data.product);
    });
  }, []);

  const [pro, setPro] = useState();
  console.log(pro);
  if (!pro) {
    return null
  }
let count=0
  return (
    <>
      <div className='features1' >
        <div className='f1_heading' >
          <div className='reveal animate-top'>
            <h1 id='f1_h'>Popular collections</h1>
          </div>


        </div>
        <div className='f1_block_box'>
          <div className='f1_block'>

            {pro && pro.map((pro) => {

              if (pro.homeFeatured === 1) {
                count++;
                if (count>8) {
                  return null
                }
                return (<>
                  <Link to={`/category/${pro.category}/product/${pro._id}`} key={pro._id}>

                    <div id='f2'><img style={{ width: '230px', height: '323px' }} src={pro.img1} id="f_img" /><h5>{pro.name}</h5><h4>₹ {pro.price}</h4></div>
                  </Link>
                </>)

              }
            })}

          </div>
        </div>
        {/* categories */}

      </div>
    </>

  )
}
