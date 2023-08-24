/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react'
import model1 from './models/women.jpg';
import model11 from './models/women_s.jpg';
import model2 from './models/men.jpg';
import model22 from './models/men_s.jpg';
import model3 from './models/girl.jpg';
import model33 from './models/girl_s.jpg';
import model4 from './models/boy.jpg';
import model44 from './models/boy_s.jpg';
import model5 from './models/kids.jpg';
import model55 from './models/kids_s.jpg';
import "./categories.css";
import "../animation.css";
import { Link } from 'react-router-dom';


export default function F2() {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);
  const [Show_Catg_Img, setShow_Catg_Img] = useState('1');

  return (
    <>
      <div className='categorey-f2'>

        <div className='categorey-name reveal fade-left'>
          <h2 id='browse_cat'>Browse categorey</h2>
          <div id='catg_hover_text'> <Link to={`/category/womens`}><button className='cate-btn' onMouseEnter={() => setShow_Catg_Img('1')}><h1>women</h1></button></Link></div>
          <div id='catg_hover_text'> <Link to={`/category/mens`}><button className='cate-btn' onMouseEnter={() => setShow_Catg_Img('2')}><h1>men</h1></button></Link></div>
          <div id='catg_hover_text'> <Link to={`/category/girls`}><button className='cate-btn' onMouseEnter={() => setShow_Catg_Img('3')}><h1>girls</h1></button></Link></div>
          <div id='catg_hover_text'> <Link to={`/category/boys`}><button className='cate-btn' onMouseEnter={() => setShow_Catg_Img('4')}><h1>boys</h1></button></Link></div>
          <div id='catg_hover_text'> <Link to={`/category/kids`}><button className='cate-btn' onMouseEnter={() => setShow_Catg_Img('5')}><h1>kids</h1></button></Link></div>
        </div>

        <div className='categorey-img '>
          <div className='cont_f2 reveal fade-bottom'>
            {Show_Catg_Img === '1' && <>
              <img style={{ width: '320px', height: '450px' }} src={model1} className="c1_img" />
              <img src={model11} id="c2_img" style={{ width: '140px' }} /></>}

            {Show_Catg_Img === '2' && <>

              <img style={{ width: '320px', height: '450px' }} src={model2} className="c1_img" />
              <img src={model22} id="c2_img" style={{ width: '140px' }} /></>}

            {Show_Catg_Img === '3' && <>

              <img style={{ width: '320px', height: '450px' }} src={model3} className="c1_img" />
              <img src={model33} id="c2_img" style={{ width: '140px' }} /></>}
            {Show_Catg_Img === '4' && <>

              <img style={{ width: '320px', height: '450px' }} src={model4} className="c1_img" />
              <img src={model44} id="c2_img" style={{ width: '140px' }} /></>}
            {Show_Catg_Img === '5' && <>

              <img style={{ width: '320px', height: '450px' }} src={model5} className="c1_img" />
              <img src={model55} id="c2_img" style={{ width: '140px' }} /></>}
          </div>

        </div>


      </div>
    </>
  )
}
