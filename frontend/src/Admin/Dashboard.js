import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

import nav_peoples from "./images/icons8-people-48.png";
import nav_orders from "./images/icons8-order-history-48.png";
import nav_sales from "./images/icons8-total-sales-48.png";

import './admin.css';



// tables
import Orders_home from './home/Orders_home';
import Products_home from './home/Products_home';



export default function Dashboard() {

  useEffect(() => {

    axios.get('http://localhost:4000/api/v1/products').then((response) => {
      setPost(response.data.product);
      console.log(response.data.product);
    });
  }, []);

  const [pro, setPost] = useState();

  if (!pro) {
    return null;
  }










  return (
    <>

      <div className="dashboard">
        <div className="dash-heading">
          <div className="block">
            <h4>Dashboard</h4>
            <p>StyleME</p>
          </div>
          <div>

          </div>
        </div>







<Products_home/>
        <Orders_home />












      </div>




















    </>
  )
}
