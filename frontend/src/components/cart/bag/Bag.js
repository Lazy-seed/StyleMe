
import { Link } from 'react-router-dom';
import logo from './logo.svg'
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./card.css";
import cod2 from './cod2.jpg';
import rpay3 from './rpay3.jpg'
import emptyCart from '../img/empty-cart.png'
import trash from "../img/trash.png";
import pay_gif from './Pay.gif'
import cod_gif from './cod.mp4'
import { Badge } from '@mui/material';
import Lodr from '../../loader/Lodr'
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
// import Payment from '../paymAdd/Payment'


function setScroll() {
   console.log("setScroll has run");
   window.scrollTo(0, 0);
}


export default function Cart() {
   const [open, setOpen] = React.useState(false);

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   function loadScript(src) {
      return new Promise((resolve) => {
         const script = document.createElement('script');
         script.src = src;
         script.onload = () => { resolve(true); };
         script.onerror = () => { resolve(false); };
         document.body.appendChild(script);
      });
   }


   async function displayRazorpay(a) {

      if (a === 4) {

         if (name === '' || phoneNumber === '' || address === '' || city === '' || state === '' || zipcode === '') {
            document.getElementById("err").style.display = "block";
            return null
         }
         if (phoneNumber.length != 10) {
            document.getElementById("err").innerText = "Invalid phone number";
            document.getElementById("err").style.display = "block";
            return null
         }
         console.log("address 4");
      }

      const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

      if (!res) {
         alert('Razorpay SDK failed to load. Are you online?');
         return;
      }

      // amount upadte
      const amt = { amt: totalPrice }

      const result = await axios.post('http://localhost:4000/payment/orders', amt, { withCredentials: true });
      if (!result) {
         alert('Server error. Are you online?');
         return;
      }
      const { amount, id: order_id, currency } = result.data;

      const options = {
         key: 'rzp_test_VriOzbggcgpNkd', // Enter the Key ID generated from the Dashboard
         amount: amount.toString(),
         currency: currency,
         name: 'StyleMe ',
         description: 'Test Transaction',
         image: { logo },
         order_id: order_id,
         handler: async function (response) {
            const data = {
               orderCreationId: order_id,
               razorpayPaymentId: response.razorpay_payment_id,
               razorpayOrderId: response.razorpay_order_id,
               razorpaySignature: response.razorpay_signature,
            };

            const result = await axios.post('http://localhost:4000/payment/success', data, { withCredentials: true });
            if ((result.data.msg) === 'success') {
               placeOrder(data.razorpayPaymentId, a);
            }
         },
         prefill: {
            name: 'aryan',
            email: 'example@example.com',
            contact: '9865324584',
         },
         notes: {
            address: 'Example Corporate Office',
         },
         theme: {
            color: '#E524CC',
         },
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
   }



   function upd(e,iID) {
      const value=e.target.value;
      const sd = {
         "quantity": value
      }
      axios.put(`http://localhost:4000/api/v1/bag/update/${iID}`,sd, { withCredentials: true }).then((response) => {
         console.log(response.data);
      })
     window.location.replace('http://localhost:3000/me/bag');


   }


   useEffect(() => {
      axios.get("http://localhost:4000/api/v1/me", { withCredentials: true }).then((response) => {
         setUser(response.data.user)
         setAddr(response.data.user)
         console.log(response.data.user);
      })
      axios.get(productURL, { withCredentials: true }).then((response) => {
         setPost(response.data);
         console.log(response.data);
      });

      setScroll()
   }, []);



   // saved address
   const [addr, setAddr] = useState({})
   const [qty, setQty] = useState(1);



   // new address
   const [user, setUser] = useState();
   const [see, setSee] = useState('bag')
   const [name, setName] = useState('');
   const [phoneNumber, setPhoneNumber] = useState('');
   const [address, setAddress] = useState('');
   const [city, setCity] = useState('');
   const [state, setState] = useState('');
   const [zipcode, setZipcode] = useState('');

   const [selectAddr, setselectAddr] = useState('');
   const [selected_addr_number, set_selected_addr_number] = useState(0)


   let Addr1 = true;
   let Addr2 = true;
   let Addr3 = true;
   if (addr.Address1_name === '' || addr.Address1_name === ' ' || (!addr.Address1_name)) {
      Addr1 = false
   }
   if (addr.Address2_name === '' || addr.Address2_name === ' ' || (!addr.Address2_name)) {
      Addr2 = false
   }
   if (addr.Address3_name === '' || addr.Address3_name === ' ' || (!addr.Address3_name)) {
      Addr3 = false
   }

   const [alert, setAlert] = useState(false)
   setTimeout(() => {
      setAlert(false);
      // setWarning(false);
   }, 5000);



   const productURL = `http://localhost:4000/api/v1/bag/me`;
   const [post, setPost] = useState(null);

   if (!post) return (<><Lodr /></>);

   const items = post.bagItems;

   // empty bag
   if (items.length === 0) {
      return (<div className='empty_bag_cont'> <img src={emptyCart} alt='empty cart img' />  <a href='/'><p>Continue Shopping</p></a></div>)
   }

   let totalPrice = 0;
   let og_totalPrice = 0;
   for (let i = 0; i < items.length; i++) {
      totalPrice += items[i].price * items[i].quantity;
      og_totalPrice += items[i].og_price * items[i].quantity;
   }

   if (see === 'bag') {
      return (
         <>

            <div className="cart">
               <div className="cont1">
                  <div className="bluebg">Products</div>

                  {items && items.map((items) => {

                     return (
                        <>
                           <div className="bag" >
                              <div className="bags_products" >
                                 <img src={items.img} alt="cont" id="img1" />
                                 <div className="text-product">
                                    <p style={{ fontSize: '20px' }}> <b>{items.name}</b> </p>
                                    <p style={{ fontSize: '18px', fontWeight: '500', margin: '1px 20px' }}> <span style={{ textDecorationLine: 'line-through', opacity: '0.6', fontSize: '16px' }}>₹{items.og_price * items.quantity}</span> <span>₹{items.price * items.quantity}</span> <span style={{ color: 'red', fontSize: '16px' }}>({Math.round(100 - (items.price / (items.og_price * items.quantity)) * 100)}% off)</span></p>
                                    <p style={{ fontSize: '18px', margin: '1px 20px 0px 20px' }}>Size: <b>{items.size}</b>   </p>
                                    <div>
                                       <label style={{ fontSize: '16px', margin: '1px 10px 0px 20px' }}>Quantity:</label>
                                       <select name="cars" id="qty_selector" defaultValue={items.quantity} onChange={(e) => { upd(e,items._id) }}>
                                          <option value={1}>1</option>
                                          <option value="2">2</option>
                                          <option value="3">3</option>
                                          <option value="4">4</option>
                                       </select>
                                    </div>
                                 </div>
                                 <div className="trash_icon">
                                    <img src={trash} alt="trash" id="trash" onClick={() => delItem(items._id)} />
                                 </div>
                              </div>
                           </div>
                        </>
                     );
                  })}
               </div>

               {/* right div------------------------------------------------------------------------ */}
               <div className="cont2">
                  <div className="price_details">
                     <h4>PRICE DETAILS </h4>
                     <p>Price ({items.length} items) <span className="left_price">₹{og_totalPrice}</span> </p>
                     <p>Discount  <span className="left_price green">- ₹{og_totalPrice - totalPrice}</span> </p>
                     <p>Delivery Charges  <span className="left_price green">FREE</span> </p>

                     <div className="total_price_details">
                        Total Amount <b id="p2">₹ {totalPrice}</b>
                     </div>
                  </div>
                  <p className='green' style={{ marginLeft: '10px' }}>You will save ₹{og_totalPrice - totalPrice} on this order</p>
                  <button className="conti_btn" onClick={() => setSee('address')}> Continue to checkout </button>

                  <div>
                     <img src='' />
                     <p>Safe and Secure Payments.Easy returns.<br />100% Authentic products.</p>
                  </div>

                  <div className="icons">
                     <img src="https://i.imgur.com/2ISgYja.png" width="30" />
                     <img src="https://i.imgur.com/W1vtnOV.png" width="30" />
                     <img src="https://i.imgur.com/35tC99g.png" width="30" />
                     <img src="https://i.imgur.com/2ISgYja.png" width="30" />
                  </div>
               </div>
            </div>
         </>
      );
   }


   if (see === 'address') {
      return (
         <>
            <div className="cart">
               <div className="cont1">
                  <div className="bluebg">Delivery Addresses</div>

                  <div className="cart_savedadd_cont">

                     {Addr1 &&
                        <div className="cart_savedadd_box">
                           <p>home</p>
                           <h4>{addr.Address1_name}</h4>
                           <h4> {addr.Address1_phone}</h4>
                           <p>address :{addr.Address1_add} , {addr.Address1_city}, {addr.Address1_state} - {addr.Address1_pincode}</p>
                           <button id='deliver_here_btn' onClick={() => { set_selected_addr_number(1); handleClickOpen() }}>Deliver Here</button> <Link id='deliver_edit_btn' to='/me/editadd1'>edit</Link>
                        </div>}

                     {Addr2 &&
                        <div className="cart_savedadd_box">
                           <p>home</p>
                           <h4>{addr.Address2_name}</h4>
                           <h4> {addr.Address2_phone}</h4>
                           <p>address :{addr.Address2_add} , {addr.Address2_city}, {addr.Address2_state} - {addr.Address2_pincode}</p>
                           <button id='deliver_here_btn' onClick={() => { set_selected_addr_number(2); handleClickOpen() }}>Deliver here</button> <Link id='deliver_edit_btn' to='/me/editadd2'>edit</Link>
                        </div>}

                     {Addr3 &&
                        <div className="cart_savedadd_box">
                           <p>home</p>
                           <h4>{addr.Address3_name}</h4>
                           <h4> {addr.Address3_phone}</h4>
                           <p>address :{addr.Address3_add} , {addr.Address3_city}, {addr.Address3_state} - {addr.Address3_pincode}</p>
                           <button id='deliver_here_btn' onClick={() => { set_selected_addr_number(3); handleClickOpen() }}>Deliver here</button> <Link id='deliver_edit_btn' to='/me/editadd3'>edit</Link>
                        </div>}

                  </div>


                  <div className={`useAddrNew_container ${selectAddr}`} onClick={() => setselectAddr('useAddrNew_container_active')} >
                     <h4 style={{ background: 'orange', color: 'white', height: '40px', padding: '5px 20px' }}> + Add a New Address</h4>
                     <Box component="form"
                        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} noValidateautoComplete="off" style={{ padding: '10px' }}>
                        <h6 id="incorrect">Error</h6>
                        <div className="c1" style={{ display: 'flex', alignItems: 'center' }}>
                           <h3 style={{ width: '130px', padding: '10px' }}>Name : </h3> <input type="text" className="user_detail_input" name="aname" onChange={(e) => setName(e.target.value)} style={{ width: '32%', marginRight: '20px' }} />
                           <h3 style={{ width: '130px', padding: '10px' }}>Phone : </h3> <input type="text" className="user_detail_input" name="aphone" onChange={(e) => setPhoneNumber(e.target.value)} style={{ width: '30%', marginRight: '20px' }} />
                        </div>
                        <div className="c1" style={{ display: 'flex', alignItems: 'center' }} >
                           <h3 style={{ width: '130px', padding: '10px' }}>Address : </h3> <input type="text" className="user_detail_input" name="aadd" onChange={(e) => setAddress(e.target.value)} style={{ width: '32%', marginRight: '20px' }} />
                           <h3 style={{ width: '130px', padding: '10px' }}>State : </h3>  <input type="text" className="user_detail_input" name="astate" onChange={(e) => setState(e.target.value)} style={{ width: '30%', marginRight: '20px' }} />
                        </div>

                        <div className="c1" style={{ display: 'flex', alignItems: 'center' }} >
                           <h3 style={{ width: '130px', padding: '10px' }}>City : </h3>  <input type="text" className="user_detail_input" name="acity" onChange={(e) => setCity(e.target.value)} style={{ width: '32%', marginRight: '20px' }} />
                           <h3 style={{ width: '130px', padding: '10px' }}>pincode : </h3> <input type="text" className="user_detail_input" name="apincode" onChange={(e) => setZipcode(e.target.value)} style={{ width: '30%', marginRight: '20px' }} />
                        </div>

                        <h5 id="err" style={{ color: 'red', marginLeft: '50px', display: 'none' }}>Enter all fields</h5>
                        <div className="edit_btn">

                           <button id="deliver_here_btn" onClick={(e) => { e.preventDefault();checkaddress(4) ; }}>Deliver Here</button>
                           <button id="deliver_edit_btn" >cancel</button>
                        </div>
                     </Box>
                  </div>
               </div>

               {/* right --------------------------------------------------------------- */}
               <div className="cont2">
                  <div className="price_details">
                     <h4>PRICE DETAILS </h4>
                     <p>Price ({items.length} items) <span className="left_price">₹{og_totalPrice}</span> </p>
                     <p>Discount  <span className="left_price green">- ₹{og_totalPrice - totalPrice}</span> </p>
                     <p>Delivery Charges  <span className="left_price green">FREE</span> </p>

                     <div className="total_price_details">
                        Total Amount <b id="p2">₹ {totalPrice}</b>
                     </div>
                  </div>
                  <p className='green' style={{ marginLeft: '10px' }}>You will save ₹{og_totalPrice - totalPrice} on this order</p>
                  <div>
                     <img src='' />
                     <p>Safe and Secure Payments.Easy returns.<br />100% Authentic products.</p>
                  </div>

                  <div className="icons">
                     <img src="https://i.imgur.com/2ISgYja.png" width="30" />
                     <img src="https://i.imgur.com/W1vtnOV.png" width="30" />
                     <img src="https://i.imgur.com/35tC99g.png" width="30" />
                     <img src="https://i.imgur.com/2ISgYja.png" width="30" />
                  </div>

               </div>
            </div>


            <Dialog open={open} fullWidth={'checked'} maxWidth={'md'} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" >
               <DialogTitle id="alert-dialog-title">
                  <h3 id='pay_option'>Payment options</h3>
               </DialogTitle>
               <DialogContent>
                  <div className='pay_img_box'>
                     <div className='pay_img_left' onClick={() => cod_order(selected_addr_number)}>
                        <img src={pay_gif} />
                        <hr style={{ height: '1px', width: '90%', backgroundColor: 'black' }} />
                        <h3>Cash On Delivery</h3>
                     </div>
                     <div className='pay_img_right' onClick={() => displayRazorpay(selected_addr_number)}>
                        <video autoplay="autoplay" loop="loop" src={cod_gif} />
                        <hr style={{ height: '1px', width: '90%', backgroundColor: 'black' }} />
                        <h3>Online Payment</h3>
                     </div>
                  </div>

               </DialogContent>
            </Dialog>

         </>
      )
   }


  function checkaddress(addrno) {

   let err_msg = document.getElementById('incorrect');

   let aname = document.getElementsByName('aname')[0].value
   let aphone = document.getElementsByName('aphone')[0].value
   let aadd = document.getElementsByName('aadd')[0].value
   let astate = document.getElementsByName('astate')[0].value
   let acity = document.getElementsByName('acity')[0].value
   let apincode = document.getElementsByName('apincode')[0].value

   if (aname.trim() === '' || aphone.trim() === '' || aadd.trim() === '' || astate.trim() === '' || acity.trim() === '' || apincode.trim() === '') {
       console.log("phone emprty");
       err_msg.style.display = 'block';
       err_msg.innerHTML = 'Enter all fields';
       return null
   }
   err_msg.style.display = 'none';

   if (aphone.length != 10) {
       console.log("invalid phone ");
       err_msg.style.display = 'block';
       err_msg.innerHTML = 'invalid phone';
       return null
   }
   err_msg.style.display = 'none';

   if (apincode.length != 6) {
       console.log("invalid pincode ");
       err_msg.style.display = 'block';
       err_msg.innerHTML = 'invalid pincode';
       return null
   }




   err_msg.style.display = 'none';
   console.log("outside");
   set_selected_addr_number(addrno)
console.log(addrno);
handleClickOpen();
  }

   function delItem(bagitemID) {
      axios.delete(`http://localhost:4000/api/v1/bagItem/${bagitemID}`, { withCredentials: true }).then((response) => {
         console.log(response.data);
         axios.get(productURL, { withCredentials: true }).then((response) => {
            setPost(response.data);

            Badge.text = 5;
            window.relod();
            // setAlert(true)
         });
      });
   }


   function placeOrder(razorpayPaymentId, a) {
      // make payment
      // date
      const DeliveryDate = new Date(new Date().getTime() + (7 * 24 * 60 * 60 * 1000));
      const datee = `${DeliveryDate.getDate()}/${DeliveryDate.getMonth() + 1}/${DeliveryDate.getFullYear()}`;

      const itemsData = [];


      for (let i = 0; i < items.length; i++) {
         // totalPrice += items[i].price;

         itemsData[i] = {
            "productID": i,
            "itemID": items[i]._id,
            "name": items[i].name,
            "price": items[i].price,
            "quantity": items[i].quantity,
            "size": items[i].size,
            "img": items[i].img,
            "deliveryDate": DeliveryDate,
            "deliveryStatus": "processed"
         }

         axios.delete(`http://localhost:4000/api/v1/AllbagItem/${items[i]._id}`, { withCredentials: true }).then((response) => {
            console.log(response.data);
            axios.get(productURL, { withCredentials: true }).then((response) => {
               setPost(response.data);
            });
         });
      }


      if (a === 1) {
         const orderItems = {
            "items": itemsData,
            "totalPrice": totalPrice,
            "shipping": {
               name: addr.Address1_name,
               address: addr.Address1_add,
               state: addr.Address1_state,
               city: addr.Address1_city,
               zipcode: addr.Address1_pincode
            },
            payment: "success",
            razorpayPaymentId: razorpayPaymentId,
            phone_number: addr.Address1_phone
         }
         axios.post("http://localhost:4000/api/v1/me/bag/order", orderItems, { withCredentials: true }).then((response) => {
            console.log(response.data)
         })
         window.location.replace("../payment/success");
      }
      if (a === 2) {
         const orderItems = {
            "items": itemsData,
            "totalPrice": totalPrice,
            "shipping": {
               name: addr.Address2_name,
               address: addr.Address2_add,
               state: addr.Address2_state,
               city: addr.Address2_city,
               zipcode: addr.Address2_pincode
            },
            payment: "success",
            razorpayPaymentId: razorpayPaymentId,
            phone_number: addr.Address2_phone
         }
         axios.post("http://localhost:4000/api/v1/me/bag/order", orderItems, { withCredentials: true }).then((response) => {
            console.log(response.data)
         })
         window.location.replace("../payment/success");
      }
      if (a === 3) {
         const orderItems = {
            "items": itemsData,
            "totalPrice": totalPrice,
            "shipping": {
               name: addr.Address3_name,
               address: addr.Address3_add,
               state: addr.Address3_state,
               city: addr.Address3_city,
               zipcode: addr.Address3_pincode
            },
            payment: "success",
            razorpayPaymentId: razorpayPaymentId,
            phone_number: addr.Address3_phone
         }
         axios.post("http://localhost:4000/api/v1/me/bag/order", orderItems, { withCredentials: true }).then((response) => {
            console.log(response.data)
         })
         window.location.replace("../payment/success");
      }
      if (a === 4) {
         const orderItems = {
            "items": itemsData,
            "totalPrice": totalPrice,
            "shipping": {
               name: name,
               address: address,
               state: state,
               city: city,
               zipcode: zipcode
            },
            payment: "success",
            razorpayPaymentId: razorpayPaymentId,
            phone_number: phoneNumber
         }
         axios.post("http://localhost:4000/api/v1/me/bag/order", orderItems, { withCredentials: true }).then((response) => {
            console.log(response.data)
         })
         window.location.replace("../payment/success");
      }



   }

   function cod_order(a) {
      // make payment
      // date
      const DeliveryDate = new Date(new Date().getTime() + (7 * 24 * 60 * 60 * 1000));
      const datee = `${DeliveryDate.getDate()}/${DeliveryDate.getMonth() + 1}/${DeliveryDate.getFullYear()}`;

      const itemsData = [];
      console.log(a, "sfg");
      console.log(totalPrice);
      for (let i = 0; i < items.length; i++) {
         // totalPrice += items[i].price;

         itemsData[i] = {
            "productID": i,
            "itemID": items[i]._id,
            "name": items[i].name,
            "price": items[i].price,
            "quantity": items[i].quantity,
            "size": items[i].size,
            "img": items[i].img,
            "deliveryDate": DeliveryDate,
            "deliveryStatus": "processed"
         }

         axios.delete(`http://localhost:4000/api/v1/AllbagItem/${items[i]._id}`, { withCredentials: true }).then((response) => {
            console.log(response.data);
            axios.get(productURL, { withCredentials: true }).then((response) => {
               setPost(response.data);
            });
         });
      }

      if (a === 1) {
         console.log("one");
         const orderItems = {
            "items": itemsData,
            "totalPrice": totalPrice,
            "shipping": {
               name: addr.Address1_name,
               address: addr.Address1_add,
               state: addr.Address1_state,
               city: addr.Address1_city,
               zipcode: addr.Address1_pincode
            },
            payment: "cash on delivery",
            razorpayPaymentId: null,
            phone_number: addr.Address1_phone
         }
         axios.post("http://localhost:4000/api/v1/me/bag/order", orderItems, { withCredentials: true }).then((response) => {
            console.log(response.data)
         })
         window.location.replace("../payment/success");
      }
      if (a === 2) {
         const orderItems = {
            "items": itemsData,
            "totalPrice": totalPrice,
            "shipping": {
               name: addr.Address2_name,
               address: addr.Address2_add,
               state: addr.Address2_state,
               city: addr.Address2_city,
               zipcode: addr.Address2_pincode
            },
            payment: "cash on delivery",
            razorpayPaymentId: null,
            phone_number: addr.Address2_phone
         }
         axios.post("http://localhost:4000/api/v1/me/bag/order", orderItems, { withCredentials: true }).then((response) => {
            console.log(response.data)
         })
         window.location.replace("../payment/success");
      }
      if (a === 3) {
         const orderItems = {
            "items": itemsData,
            "totalPrice": totalPrice,
            "shipping": {
               name: addr.Address3_name,
               address: addr.Address3_add,
               state: addr.Address3_state,
               city: addr.Address3_city,
               zipcode: addr.Address3_pincode
            },
            payment: "cash on delivery",
            razorpayPaymentId: null,
            phone_number: addr.Address3_phone
         }
         axios.post("http://localhost:4000/api/v1/me/bag/order", orderItems, { withCredentials: true }).then((response) => {
            console.log(response.data)
         })
         window.location.replace("../payment/success");
      }
      if (a === 4) {
         const orderItems = {
            "items": itemsData,
            "totalPrice": totalPrice,
            "shipping": {
               name: name,
               address: address,
               state: state,
               city: city,
               zipcode: zipcode
            },
            payment: "cash on delivery",
            razorpayPaymentId: null,
            phone_number: phoneNumber
         }
         axios.post("http://localhost:4000/api/v1/me/bag/order", orderItems, { withCredentials: true }).then((response) => {
            console.log(response.data)
         })
         window.location.replace("../payment/success");
      }

   }
}
