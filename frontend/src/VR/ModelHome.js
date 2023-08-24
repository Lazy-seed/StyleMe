import React, { useEffect } from 'react'
import axios from "axios";
import './ModelHome.css';
import './Css/gender.css'
import './Css/clothChoose.css'
import './Css/collor_cuff.css'
import logo from './logo.svg'
import { Link } from 'react-router-dom';

import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Button from '@mui/material/Button';
import female34 from './img/gender/female34.png'
import male34 from './img/gender/male34.png'

import collor1 from './img/collor/c1.png'
import collor2 from './img/collor/c2.png'
import collor3 from './img/collor/c3.png'

import cuff2 from './img/cuff/cf2.png'
import cuff1 from './img/cuff/cf1.png'
import cuff3 from './img/cuff/cf3.png'

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';



// models
import { FemaleModel } from './models/FemaleModel';
import MaleModel from './models/MaleModel'








function ModelHome() {

  // login check
  const [Login, setLogin] = useState(true);
  useEffect(() => {
    // user info
    axios.get("http://localhost:4000/api/v1/me", { withCredentials: true }).then((response) => {
      setLogin(true);
      setAddr(response.data.user)
    }).catch((err) => {
      setLogin(false);
    })

    // fabrics
    axios.get("http://localhost:4000/api/v1/vr/all/fabric", { withCredentials: true }).then((response) => {
      console.log(response.data.fabrics);
      setFabric(response.data.fabrics)
    }).catch((err) => {
    })
  }, []);
  const [addr, setAddr] = useState({});
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

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }
  async function displayRazorpay(a) {
    if (a === 4) {

      if (name === '' || phoneNumber === '' || address === '' || city === '' || state === '' || zipcode === '' || name === ' ' || phoneNumber === ' ' || address === ' ' || city === ' ' || state === ' ' || zipcode === ' ') {
        document.getElementById("err").style.display = "block";
        document.getElementById("err").innerText = "Enter all fields";
        return null
      }
      if (phoneNumber.length != 10) {
        document.getElementById("err").innerText = "Invalid phone number";
        document.getElementById("err").style.display = "block";
        return null
      }
      console.log("address 4");
    }
    const res = await loadScript(
      'https://checkout.razorpay.com/v1/checkout.js'
    );

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }
    // amount upadte

    setTotalPrice(shirt_price + pant_price + 400)

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
          makeOrder(data.razorpayPaymentId, a);

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
        color: '#61dafb',
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }



  const [user, setUser] = useState();
  const [name, setName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [zipcode, setZipcode] = useState();
  const [open, setOpen] = useState(false);
  const [selectAddr, setselectAddr] = useState('');


  const [fabric, setFabric] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [shirt_price, setShirt_price] = useState(600);
  const [pant_price, setPant_price] = useState(600);
  const [pant_price_temp, setPant_price_temp] = useState(600);
  const [value, setValue] = useState(0);
  const [model, setModel] = useState('');
  const [useShirt, setShirt] = useState('White');
  const [useShirt_size, setShirt_size] = useState('');
  const [useShirt_code, setShirt_code] = useState('');
  const [useCollor, setCollor] = useState('');
  const [useCollor_code, setCollor_code] = useState('');
  const [useCuff, setCuff] = useState('');
  const [useCuff_code, setCuff_code] = useState('');
  const [usePant, setPant] = useState('White');
  const [usePant_code, setPant_code] = useState('');
  const [usePant_size, setPant_size] = useState('');



  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>


      <div className='vr_container' >
        <div className='model_container' style={{ border: '1px solid red', height: '1500px', marginTop: '-100px' }}>

          <Canvas camera={{ position: [3, 2, 0] }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} angle={.1} castShadow />
              <pointLight position={[10, 15, 10]} angle={0.3} />

              {model === 'male' && <MaleModel scale={0.3} shirt={useShirt_code} pant={usePant_code} collor={useCollor_code} cuff={useCuff_code} />}
              {model === 'female' && <FemaleModel scale={0.3} shirt={useShirt_code} pant={usePant_code} collor={useCollor_code} cuff={useCuff_code} />}

              <OrbitControls enablePan={false} />
            </Suspense>
          </Canvas>
        </div>


        <div className='options_container'>

          <Box sx={{ width: '100%', borderBottom: 1, borderColor: 'divider' }} >
            <Tabs value={value} onChange={handleChange} centered textColor="secondary"
              indicatorColor="secondary"
              aria-label="secondary tabs example" >

              <Tab label="Avatars" />
              <Tab label="Shirt" />
              <Tab label="Pant" />
              <Tab label="Collor" />
              <Tab label="Details" />
              {/* <Tab label="address" /> */}
            </Tabs>
          </Box>

          {/* Gender----------------------------------------------------- */}
          {value === 0 && <><div className='gender_container'>
            <div id='gender_heading'>
              Choose your Avatar
            </div>
            <div className='gender_container_wrap'>
              <label>
                <input id='gender_container_radio' type="radio" name="test" value="male" onClick={() => { setModel('male') }} />
                <div className='male_box'>
                  <div className='gender_img'><img alt='s' id="img-model" src={male34} /></div>
                </div></label>

              <label>
                <input id='gender_container_radio' type="radio" name="test" value="male" onClick={() => { setModel('female') }} />
                <div className='female_box'>
                  <div className='gender_img'><img alt='s' id="img-model" src={female34} />
                  </div>
                </div></label>
            </div>
          </div></>}


          {/* Shirt---------------------------------------------------- */}
          {value === 1 &&
            <><div className='gender_container'>
              <div id='gender_heading'>
                Select Shirt Fabrics
              </div>
              <div className='fabric_container'>
                <div id='fabric_box'>
                  {fabric && fabric.map((fabric) => {

                    if (model === 'male' && fabric.gender === 'male' && fabric.type === 'shirt') {
                      return (
                        <label>
                          <input id='Fabric_checkbox' type="radio" name="collor" onClick={() => { setShirt_code(fabric.fabric_Code); setShirt_price(fabric.price); setShirt(fabric.fabric_name) }} />
                          <div id='fabric_img_box'>
                            <img alt='s' src={fabric.img} />
                            <h3>{fabric.fabric_name} </h3>
                            <h3>₹ {fabric.price}</h3>
                          </div>
                        </label>
                      )
                    }

                    if (model === 'female' && fabric.gender === 'female' && fabric.type === 'shirt') {
                      return (
                        <label>
                          <input id='Fabric_checkbox' type="radio" name="collor" onClick={() => { setShirt_code(fabric.fabric_Code); setShirt_price(fabric.price); setShirt(fabric.fabric_name) }} />
                          <div id='fabric_img_box'>
                            <img alt='s' src={fabric.img} />
                            <h3>{fabric.fabric_name}</h3>
                            <h3>₹ {fabric.price}</h3>
                          </div>
                        </label>
                      )
                    }
                  })}
                </div>
              </div>
            </div>
            </>}


          {/*  Pant---------------------------------------- */}
          {/* {value === 2 && useShirt_code ==='' && window.alert("choose shirt first") } */}
          {value === 2 &&
            <><div className='gender_container'>
              <div id='gender_heading'>
                Select Pant Fabrics
              </div>
              <div className='fabric_container'>
                <div id='fabric_box'>

                  {fabric && fabric.map((fabric) => {

                    // male pant
                    if (model === 'male' && fabric.gender === 'male' && fabric.type === 'pant') {
                      return (
                        <label>
                          <input id='Fabric_checkbox' type="radio" name="collor" onClick={() => { setPant_code(fabric.fabric_Code); setPant_price(fabric.price); setPant(fabric.fabric_name); setPant_price_temp(fabric.price); setPant_size('') }} />
                          <div id='fabric_img_box'>
                            <img alt='s' src={fabric.img} />
                            <h3>{fabric.fabric_name}</h3>
                            <h3>₹ {fabric.price}</h3>
                          </div>
                        </label>
                      )
                    }

                    // female pant
                    if (model === 'female' && fabric.gender === 'female' && fabric.type === 'pant') {
                      return (
                        <label>
                          <input id='Fabric_checkbox' type="radio" name="collor" onClick={() => { setPant_code(fabric.fabric_Code); setPant_price(fabric.price); setPant(fabric.fabric_name); setPant_price_temp(fabric.price); setPant_size('') }} />
                          <div id='fabric_img_box'>
                            <img alt='s' src={fabric.img} />
                            <h3>{fabric.fabric_name}</h3>
                            <h3>₹ {fabric.price}</h3>
                          </div>
                        </label>
                      )
                    }
                  })}
                </div>
              </div>
            </div>
            </>}


          {/* Collor cuff----------------------------------------------------- */}
          {/* {value === 3 && usePant_code ==='' &&  window.alert("choose pant first")} */}
          {value === 3 &&
            <><div className='gender_container'>
              <div id='gender_heading'>
                Select Collar
              </div>
              <div id='Collor-box'>
                <label>
                  <input id='Collor_cuff_radio' type="radio" name="collor" value="collor1" onClick={() => { setCollor_code('1'); setCollor('chinese collor') }} />
                  <img alt='s' id='Collor_cuff_img' src={collor1} />
                </label>
                <label>
                  <input id='Collor_cuff_radio' type="radio" name="collor" value="collor2" onClick={() => { setCollor_code('2'); setCollor('french collor') }} />
                  <img alt='s' id='Collor_cuff_img' src={collor2} />
                </label>
                <label>
                  <input id='Collor_cuff_radio' type="radio" name="collor" value="collor3" onClick={() => { setCollor_code('3'); setCollor('japnese collor') }} />
                  <img alt='s' id='Collor_cuff_img' src={collor3} />
                </label>
              </div>

              <div id='gender_heading'>
                Select Cuff
              </div>
              <div id='Cuff-box'>
                <label>
                  <input id='Collor_cuff_radio' type="radio" name="cuff" value="cuff1" onClick={() => { setCuff_code('1'); setCuff('chinese cuff') }} />
                  <img alt='s' id='Collor_cuff_img' src={cuff1} />
                </label>
                <label>
                  <input id='Collor_cuff_radio' type="radio" name="cuff" value="cuff2" onClick={() => { setCuff_code('2'); setCuff('french cuff') }} />
                  <img alt='s' id='Collor_cuff_img' src={cuff2} />
                </label>
                <label>
                  <input id='Collor_cuff_radio' type="radio" name="cuff" value="cuff3" onClick={() => { setCuff_code('3'); setCuff('japnese cuff') }} />
                  <img alt='s' id='Collor_cuff_img' src={cuff3} />
                </label>

              </div>
            </div></>}


          {/* Details----------------------------------------------------- */}
          {/* {value === 4 && useCuff === '' &&  window.alert("choose cuff and collor first")} */}
          {value === 4 &&
            <><div className='gender_container'>
              <div id='gender_heading'>
                Details
              </div>

              <table>
                <tr>
                  <th>Type</th>
                  <th>Selected</th>
                  <th>prices</th>
                </tr>
                <tr>
                  <td>Model</td>
                  <td>{model}</td>
                  <td> - </td>
                </tr>
                <tr>
                  <td>Shirt
                    <button className={`Size_btn ${useShirt_size === 'S' && 'Size_btn_active'}`} style={{ marginLeft: '10px' }} onClick={() => setShirt_size('S')}>S</button>
                    <button className={`Size_btn ${useShirt_size === 'M' && 'Size_btn_active'}`} onClick={() => setShirt_size('M')}>M</button>
                    <button className={`Size_btn ${useShirt_size === 'L' && 'Size_btn_active'}`} onClick={() => setShirt_size('L')}>L</button>
                  </td>
                  <td>{useShirt}</td>
                  <td>₹ {shirt_price}</td>
                </tr>
                <tr>
                  <td>Pant
                    <button className={`Size_btn ${usePant_size === '28' && 'Size_btn_active'}`} style={{ marginLeft: '10px' }} onClick={() => { setPant_size('28'); setPant_price(pant_price_temp) }}>28</button>
                    <button className={`Size_btn ${usePant_size === '30' && 'Size_btn_active'}`} onClick={() => { setPant_size('30'); setPant_price(pant_price_temp) }}>30</button>
                    <button className={`Size_btn ${usePant_size === '32' && 'Size_btn_active'}`} onClick={() => { setPant_size('32'); setPant_price(pant_price_temp) }}>32</button>
                    <button className={`Size_btn ${usePant_size === 'No' && 'Size_btn_active'}`} onClick={() => { setPant_size('No'); setPant_price(0) }}>No</button>
                  </td>
                  <td>{usePant}</td>
                  <td>₹ {pant_price}</td>
                </tr>
                <tr>
                  <td>Collar</td>
                  <td>{useCollor}</td>
                  <td> - </td>
                </tr>
                <tr>
                  <td>Cuff</td>
                  <td>{useCuff}</td>
                  <td> - </td>
                </tr>
                <tr>
                  <td>Stitching</td>
                  <td>  </td>
                  <td> ₹ 400 </td>
                </tr>
                <tr>
                  <th>Total Price</th>
                  <th></th>
                  <th> ₹ {shirt_price + pant_price + 400}</th>
                  {/* <th>{setTotalPrice(shirt_price + pant_price + 400)}</th> */}
                </tr>
              </table>
            </div></>}

          {/* address----------------------------------------------------- */}

          {value === 5 &&
            <>
              <div className="cart_savedadd_cont">
                {Addr1 &&
                  <div className="vr_savedadd_box" >
                    <p>home</p>
                    <h4>{addr.Address1_name}</h4>
                    <h4> {addr.Address1_phone}</h4>
                    <p>address :{addr.Address1_add} , {addr.Address1_city}, {addr.Address1_state} - {addr.Address1_pincode}</p>
                    <button id='deliver_here_btn' onClick={() => displayRazorpay(1)}>Deliver Here</button> <Link id='deliver_edit_btn' to='/me/editadd1'>edit</Link>
                  </div>}

                {Addr2 &&
                  <div className="vr_savedadd_box">
                    <p>home</p>
                    <h4>{addr.Address2_name}</h4>
                    <h4> {addr.Address2_phone}</h4>
                    <p>address :{addr.Address2_add} , {addr.Address2_city}, {addr.Address2_state} - {addr.Address2_pincode}</p>
                    <button id='deliver_here_btn' onClick={() => displayRazorpay(2)}>Deliver here</button> <Link id='deliver_edit_btn' to='/me/editadd2'>edit</Link>
                  </div>}

                {Addr3 &&
                  <div className="vr_savedadd_box">
                    <p>home</p>
                    <h4>{addr.Address3_name}</h4>
                    <h4> {addr.Address3_phone}</h4>
                    <p>address :{addr.Address3_add} , {addr.Address3_city}, {addr.Address3_state} - {addr.Address3_pincode}</p>
                    <button id='deliver_here_btn' onClick={() => displayRazorpay(3)}>Deliver here</button> <Link id='deliver_edit_btn' to='/me/editadd3'>edit</Link>
                  </div>}
              </div>
              <div className={`useAddrNew_container_vr ${selectAddr}`} onClick={() => setselectAddr('useAddrNew_container_active_vr')} >
                <h4 style={{ background: 'orange', color: 'white', height: '40px', padding: '5px 20px' }}> + Add a New Address</h4>
                <Box component="form"
                  sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} noValidateautoComplete="off" style={{ padding: '10px' }}>
                  <div className="c1" style={{ display: 'flex', alignItems: 'center' }}>
                    <h3 style={{ width: '130px', padding: '10px' }}>Name : </h3> <input type="text" className="user_detail_input" name="name" onChange={(e) => setName(e.target.value)} style={{ width: '32%', marginRight: '20px' }} />
                    <h3 style={{ width: '130px', padding: '10px' }}>Phone : </h3> <input type="text" className="user_detail_input" name="name" onChange={(e) => setPhoneNumber(e.target.value)} style={{ width: '30%', marginRight: '20px' }} />
                  </div>
                  <div className="c1" style={{ display: 'flex', alignItems: 'center' }} >
                    <h3 style={{ width: '130px', padding: '10px' }}>Address : </h3> <input type="text" className="user_detail_input" name="name" onChange={(e) => setAddress(e.target.value)} style={{ width: '32%', marginRight: '20px' }} />
                    <h3 style={{ width: '130px', padding: '10px' }}>State : </h3>  <input type="text" className="user_detail_input" name="name" onChange={(e) => setState(e.target.value)} style={{ width: '30%', marginRight: '20px' }} />
                  </div>

                  <div className="c1" style={{ display: 'flex', alignItems: 'center' }} >
                    <h3 style={{ width: '130px', padding: '10px' }}>City : </h3>  <input type="text" className="user_detail_input" name="name" onChange={(e) => setCity(e.target.value)} style={{ width: '32%', marginRight: '20px' }} />
                    <h3 style={{ width: '130px', padding: '10px' }}>pincode : </h3> <input type="text" className="user_detail_input" name="name" onChange={(e) => setZipcode(e.target.value)} style={{ width: '30%', marginRight: '20px' }} />
                  </div>

                  <h5 id="err" style={{ color: 'red', marginLeft: '50px', display: 'none' }}>Enter all fields</h5>
                  <div className="edit_btn">

                    <button id="deliver_here_btn" onClick={(e) => { e.preventDefault(); displayRazorpay(4) }}>Deliver Here</button>
                    <button id="deliver_edit_btn" >cancel</button>
                  </div>
                </Box>
              </div>
            </>}

          {value > 0 && value < 4 &&
            <Button id='next_button' onClick={() => setValue(value - 1)} variant="contained" color="primary" sx={{ width: '170px', fontSize: '15px', letterSpacing: '4px', position: 'absolute', right: '500px', bottom: '-20px' }}> Previous </Button>
          }
          {value < 4 &&
            <Button id='next_button' onClick={() => setValue(value + 1)} variant="contained" color="primary" sx={{ width: '170px', fontSize: '15px', letterSpacing: '4px', position: 'absolute', right: '280px', bottom: '-20px' }}> Next </Button>
          }

          {value === 4 && useShirt_size != '' && usePant_size != '' && <>
            <Button id='next_button' onClick={() => setValue(value - 1)} variant="contained" color="primary" sx={{ width: '170px', fontSize: '15px', letterSpacing: '4px', position: 'absolute', right: '500px', bottom: '-20px' }}> Previous </Button>
            <Button id='next_button' onClick={() => setValue(value + 1)} variant="contained" color="primary" sx={{ width: '170px', fontSize: '15px', letterSpacing: '4px', position: 'absolute', right: '280px', bottom: '-20px' }}> Order Now </Button>
          </>}
          {value === 4 && useShirt_size === '' &&
            <Button id='next_button' onClick={() => window.alert("choose shirt  size")} variant="contained" color="primary" sx={{ width: '170px', fontSize: '15px', letterSpacing: '4px', position: 'absolute', right: '280px', bottom: '-20px' }}> order</Button>
          }
          {value === 4 && usePant_size === '' &&
            <Button id='next_button' onClick={() => window.alert("choose pant  size")} variant="contained" color="primary" sx={{ width: '170px', fontSize: '15px', letterSpacing: '4px', position: 'absolute', right: '280px', bottom: '-20px' }}> order</Button>
          }

          {value === 5 &&
            <>
              <Button id='next_button' onClick={() => setValue(value - 1)} variant="contained" color="primary" sx={{ width: '170px', fontSize: '15px', letterSpacing: '4px', position: 'absolute', right: '500px', bottom: '-80px' }}> Previous </Button>
              {/* {usePant_size==='' &&  <Button id='next_button' onClick={()=> window.alert("select size")} variant="contained" color="primary" sx={{ width: '170px', fontSize: '15px', letterSpacing: '4px', position: 'absolute', right: '280px', bottom: '-80px' }}> Order Now </Button>} */}
              {/* <Button id='next_button' onClick={displayRazorpay} variant="contained" color="primary" sx={{ width: '170px', fontSize: '15px', letterSpacing: '4px', position: 'absolute', right: '280px', bottom: '-80px' }}> Payment</Button> */}
            </>
          }

        </div>
      </div>

      <div>

      </div>

    </>
  );

  function makeOrder(razorpayPaymentId, a) {


    if (a === 1) {
      const data = {
        gender: model,
        shirt: useShirt,
        shirt_size: useShirt_size,
        pant: usePant,
        pant_size: usePant_size,
        collor: useCollor,
        cuff: useCuff,
        totalPrice: shirt_price + pant_price + 400,
        payment: "done",
        phone_number: addr.Address1_phone,
        razorpayPaymentId: razorpayPaymentId,
        deliveryStatus: "processed",
        shipping: {
          name: addr.Address1_name,
          address: addr.Address1_add,
          state: addr.Address1_state,
          city: addr.Address1_city,
          zipcode: addr.Address1_pincode
        }
      }
      axios.post(`http://localhost:4000/api/v1/vr/order`, data, { withCredentials: true }).then((response) => {
        console.log(response);
      });

      window.location.replace("./payment/success")
    }
    if (a === 2) {
      const data = {
        gender: model,
        shirt: useShirt,
        shirt_size: useShirt_size,
        pant: usePant,
        pant_size: usePant_size,
        collor: useCollor,
        cuff: useCuff,
        totalPrice: shirt_price + pant_price + 400,
        payment: "done",
        phone_number: addr.Address2_phone,
        razorpayPaymentId: razorpayPaymentId,
        deliveryStatus: "processed",
        shipping: {
          name: addr.Address2_name,
          address: addr.Address2_add,
          state: addr.Address2_state,
          city: addr.Address2_city,
          zipcode: addr.Address2_pincode
        }
      }
      axios.post(`http://localhost:4000/api/v1/vr/order`, data, { withCredentials: true }).then((response) => {
        console.log(response);
      });

      window.location.replace("./payment/success")
    }
    if (a === 3) {
      const data = {
        gender: model,
        shirt: useShirt,
        shirt_size: useShirt_size,
        pant: usePant,
        pant_size: usePant_size,
        collor: useCollor,
        cuff: useCuff,
        totalPrice: shirt_price + pant_price + 400,
        payment: "done",
        phone_number: addr.Address3_phone,
        razorpayPaymentId: razorpayPaymentId,
        deliveryStatus: "processed",
        shipping: {
          name: addr.Address3_name,
          address: addr.Address3_add,
          state: addr.Address3_state,
          city: addr.Address3_city,
          zipcode: addr.Address3_pincode
        }
      }
      axios.post(`http://localhost:4000/api/v1/vr/order`, data, { withCredentials: true }).then((response) => {
        console.log(response);
      });

      window.location.replace("./payment/success")
    }
    if (a === 4) {
      const data = {
        gender: model,
        shirt: useShirt,
        shirt_size: useShirt_size,
        pant: usePant,
        pant_size: usePant_size,
        collor: useCollor,
        cuff: useCuff,
        totalPrice: shirt_price + pant_price + 400,
        payment: "done",
        phone_number: phoneNumber,
        razorpayPaymentId: razorpayPaymentId,
        deliveryStatus: "processed",
        shipping: {
          name: name,
          address: address,
          state: state,
          city: city,
          zipcode: zipcode
        }
      }
      axios.post(`http://localhost:4000/api/v1/vr/order`, data, { withCredentials: true }).then((response) => {
        console.log(response);
      });

      window.location.replace("./payment/success")
    }


    // const data = {
    //   gender: model,
    //   shirt: useShirt,
    //   shirt_size: useShirt_size,
    //   pant: usePant,
    //   pant_size: usePant_size,
    //   collor: useCollor,
    //   cuff: useCuff,
    //   totalPrice: shirt_price + pant_price + 400,
    //   payment: "done",
    //   phone_number: phoneNumber,
    //   razorpayPaymentId: razorpayPaymentId,
    //   deliveryStatus: "processed",
    //   shipping: {
    //     name: name,
    //     address: address,
    //     state: state,
    //     city: city,
    //     zipcode: zipcode
    //   }
    // }
    // axios.post(`http://localhost:4000/api/v1/vr/order`, data, { withCredentials: true }).then((response) => {
    //   console.log(response);
    // });

    // window.location.replace("./payment/success")

    setOpen(false);
  }





}
export default ModelHome;
