/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import axios from "axios";
import nav_home from "../images/icons8-home-page-30.png";
import nav_product from "../images/icons8-clothes-30.png";
import nav_order from "../images/icons8-purchase-order-30.png";
import nav_user from "../images/icons8-people-30.png";
import nav_review from "../images/icons8-reviews-30.png";
import './nav.css';
import { Link } from 'react-router-dom';

export default function Nav() {
    const [hover,setHover]=useState('home')

  

  return (
    <>
        <div className="sidebar-container">
        <Link className="text-nav"  to="/admin/home">
        <div className={`sidebar ${hover==='home' &&  'hoverEffect' }`}  onClick={()=> setHover('home')}>
            <img id="icon-nav" src={nav_home} />
            <h4>Home</h4>
        </div></Link>

        <Link className="text-nav" to="/admin/product">
        <div className={`sidebar ${hover==='product' &&  'hoverEffect' }`}  onClick={()=> setHover('product')} >
            <img id="icon-nav" src={nav_product} />
            <h4>Product</h4>
        </div></Link>

        <Link className="text-nav" to="/admin/order">
        <div className={`sidebar ${hover==='order' &&  'hoverEffect' }`}  onClick={()=> setHover('order')}>
            <img id="icon-nav" src={nav_order} />
          <h4>  Order</h4>
        </div></Link>

        <Link className="text-nav" to="/admin/user">
        <div className={`sidebar ${hover==='user' &&  'hoverEffect' }`}  onClick={()=> setHover('user')}>
            <img id="icon-nav" src={nav_user} />
          <h4>  Users</h4>
        </div></Link>

        

        <Link className="text-nav" to="/admin/review">
        <div className={`sidebar ${hover==='review' &&  'hoverEffect' }`}  onClick={()=> setHover('review')}>
            <img id="icon-nav" src={nav_review} />
          <h4>  Review</h4>
        </div></Link>

        <div className="text-nav">
        <div className={`sidebar ${hover==='logout' &&  'hoverEffect' }`}  onClick={()=> logout()}>
            <img id="icon-nav" src={nav_user} />
          <h4>  Logout</h4>
        </div></div>
        
        <div className="sidebar">
            <a className="text-nav" href="/">StyleMe</a>
        </div>
    </div>
    </>
  )
}


function logout(e) {
  axios.get("http://localhost:4000/api/v1/logout", { withCredentials: true }).then((response) => {
    window.location.replace('/')
  })
}