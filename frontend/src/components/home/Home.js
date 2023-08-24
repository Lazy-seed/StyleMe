import React, { useState } from "react";
import "./home.css";
import Slider from "./slider/Slider";
import Categories from './categories/Categories'
import VrHomeBox from "./VR/VrHomeBox";
import FAQ from "./FAQ/FAQ";
import  Collections  from './collections/Collections'
import FeatureCollection from './featureCollection/FeatureCollection'
export default function Home() {

  return (
    <>
      <div style={{ margin: '1px 76px' }}>
        <Slider />
      </div>


      {/* <div style={{ margin: '60px 100px',boxShadow: '1px 1px 10px 1px rgba(0, 0, 0, 0.1)' }}> */}
      <div style={{ margin: '60px 100px'   }}>
        <Categories />
      </div>




      <div style={{ margin: '60px 100px' }}>
        <Collections />
      </div>


     
      <div style={{ margin: '60px 100px' }}>
        {/* <FeatureCollection /> */}
      </div>


      <div style={{ margin: '60px 100px' }}>
        <VrHomeBox />
      </div>

      <div style={{ margin: '60px 100px' }}>
        <FAQ />
      </div>



    </>
  );
}
