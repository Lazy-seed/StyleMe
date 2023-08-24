import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import order_gif from './img/orders_gif.gif';
import woman from './img/Female_A.png';
import men from './img/male_A.png';
import girl from './img/Girl_A.png';
import Boy from './img/Boy_A.png';
import Kids from './img/Kids_A.png';


import './orders_home.css'
import '../admin.css';


// account
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer, Sector, Cell, } from 'recharts';

import { } from 'recharts';


export default function Products_home() {
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


  // products     
  let pro_mens = 0
  let pro_womens = 0
  let pro_kids = 0
  let pro_girls = 0
  let pro_boys = 0

  for (let i = 0; i < pro.length; i++) {
    if (pro[i].category === 'mens') {
      pro_mens++;
    }
    if (pro[i].category === 'womens') {
      pro_womens++;
    }
    if (pro[i].category === 'kids') {
      pro_kids++;
    }
    if (pro[i].category === 'girls') {
      pro_girls++;
    }
    if (pro[i].category === 'boys') {
      pro_boys++;
    }
  }
  const product_data = [
    { name: 'mens', value: pro_mens },
    { name: 'womens', value: pro_womens },
    { name: 'kids', value: pro_kids },
    { name: 'girls', value: pro_girls }
  ]
  // products close--------------------------------






  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <>

      <div className="order_hone" style={{ margin: '30px 100px' }}>
        {/* <h1 style={{ backgroundColor: '#90CAF9', textAlign: 'center' }}>Product Details</h1> */}
        <h3 className='heading_h4'>Total Products : <span style={{color:'Green',fontSize:'20px',fontWeight:'600'}}>{pro_mens+pro_womens+pro_kids+pro_girls+pro_boys}</span></h3>
        <div className="product_box_cont" >
          <div className="product_box" >
            <img src={men} width={100} />
            <h3>Mens</h3>
            <h2>{pro_mens}</h2>
          </div>
          <div className="product_box" >
            <img src={woman} width={100} />
            <h3>Womens</h3>
            <h2>{pro_womens}</h2>
          </div>
          <div className="product_box" >
            <img src={Kids} width={100} />
            <h3>Kids</h3>
            <h2>{pro_kids}</h2>
          </div>
          <div className="product_box" >
            <img src={girl} width={100} />
            <h3>Girls</h3>
            <h2>{pro_girls}</h2>
          </div>
          <div className="product_box" >
            <img src={Boy} width={100} />
            <h3>Boys</h3>
            <h2>{pro_boys}</h2>
          </div>



        </div>







        {/* <PieChart width={400} height={400}>
          <Pie
            data={product_data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value">
            {product_data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart> */}


      </div>



    </>
  )
}
