import './App.css';
import Old_Navbar from './components/Old_Navbar/Navbar'
import { BrowserRouter as Link, Route, Routes } from "react-router-dom";
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import AllProducts from './components/category/allProduct/AllProducts';
import ProductDetails from './components/category/productDetails/ProductDetails'
import Bag from './components/cart/bag/Bag';
import Login from './components/user/login/Login';
import Signup from './components/user/signup/Signup';

import LoginSingUP from './components/login/LoginSingUP';

import ModelHome from './VR/ModelHome'
import PageNotFound from './components/error/PageNotFound';
import OrdersDetails from './components/orderDetails/OrdersDetails';
import PaymentSuccess from './components/paymentSuccessful/PaymentSuccess';

// import prifile
import Profile from './components/profile/Profile'


// admin imports
import Dashboard from './Admin/Dashboard';
import Products from './Admin/product/Products';
import Order from './Admin/orders/Order';
import User from './Admin/users/User';
import Review from './Admin/Reviews';
import Nav from './Admin/navbar/Nav'

import AddProduct from './Admin/product/AddProduct';
import UpdateProduct from './Admin/product/Update';
import UpdateOrder from './Admin/orders/Update';

import axios from "axios";
import { useEffect, useState } from 'react';

export default function App() {
  const [me, setME] = useState({ role: 'dc' });

  useEffect(() => {

    axios.get("http://localhost:4000/api/v1/me", { withCredentials: true }).then((response) => {
      // console.log(response.data.user); 
      setME(response.data.user);
    }).catch((err) => {
      console.log(err);
    });


  }, []);

  // console.log(me.role);


  const l = (window.location.href)
  console.log(l.slice(0, 27));
  // window.location.reload()
  return (
    <>
      {l.slice(0, 27) != 'http://localhost:3000/admin' && <> <Old_Navbar /></>}

      {l.slice(0, 28) === 'http://localhost:3000/admin/' && me.role==='admin' && <Nav />}
      {/* {l.slice(0, 28) === 'http://localhost:3000/admin/'  && <Nav />} */}

      <Routes>

        {/*--------------------- Login --------------------------------------------------------------- */}
        <Route exact path="/" element={<><Home /></>} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/user/:what" element={<LoginSingUP />} />



        {/*--------------------- Products --------------------------------------------------------------- */}
        <Route exact path="/category/:catg" element={<AllProducts />} />
        <Route exact path="/category/:catg/product/:id" element={<ProductDetails />} />


        {/*--------------------- profile --------------------------------------------------------------- */}
        <Route exact path="/me/:my" element={<><Profile /></>} />


        <Route exact path="/me/order/details/:id/:productID" element={<><OrdersDetails /></>} />
        <Route exact path="/me/bag" element={<Bag />} />


        <Route exact path="/vr" element={<ModelHome />} />
        {/* <Route exact path="/vr/order/detail/:id" element={<OrdersAvatarDetails />} /> */}

        <Route exact path="/payment/success" element={<PaymentSuccess />} />




        {/* Admin  */}
        {me.role === "admin" && <>
        <Route exact path='/admin/home' element={<Dashboard />} />
        <Route exact path='/admin/product' element={<Products />} />
        <Route exact path='/admin/order' element={<Order />} />
        <Route exact path='/admin/User' element={<User />} />
        <Route exact path='/admin/review' element={<Review />} />



        
          {/* Admin products  */}
          <Route exact path='/admin/product/addProduct' element={<AddProduct />} />
          <Route exact path='/admin/product/update/:id' element={<UpdateProduct />} />

          {/* admin order */}
          <Route exact path='/admin/order/update/:id/:num' element={<UpdateOrder />} />
          {/* <Route exact path='/admin/order/update/:id' element={<UpdateOrder />} />  */}
          </>}



        <Route exact path="*" element={<PageNotFound />} />
      </Routes>


      {l.slice(0, 27) != 'http://localhost:3000/admin' && <> <Footer /></>}




    </>
  );
}

