import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import "./navbar.css";
import bag from "./img/bag.png";
import srch from "./img/srch.png";
import user from "./img/account.png";
import logoNav from "./img/logonav.png";
import Alert from '@mui/material/Alert';

import { Link } from 'react-router-dom'
import InventoryIcon from '@mui/icons-material/Inventory';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';

import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import axios from "axios";
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import "../login/login.css";
import "../home/animation.css"
import close from "./img/close.png"
import login from "../login/img/i1.jpg";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};




export default function Navbar() {

  const [showAlert, setshowAlert] = useState(false);
  const [showAlertPass, setshowAlertPass] = useState(false);
  const [showAlertUser, setshowAlertUser] = useState(false);


  const [showForm, setShowForm] = useState('login');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [NewPassword, setNewPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [OTP, setOTP] = useState(0);
  const [userOTP, setuserOTP] = useState(0);

  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false)



  const [me, setME] = useState("false");
  const [items, setItems] = useState()
  const [anchorEl, setAnchorEl] = useState(null);
  const [alert, setAlert] = useState(false);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [Login, setLogin] = useState(true);
  useEffect(() => {

    console.log('nav bar use effect runs every 2 seconds to update bag icon bandage');
    axios.get("http://localhost:4000/api/v1/me", { withCredentials: true }).then((response) => {
      setLogin(true);
      setME(response.data.user);
    }).catch((err) => {
      setLogin(false);
    });

    axios.get('http://localhost:4000/api/v1/bag/me', { withCredentials: true }).then((response) => {
      setItems(response.data.bagItems.length);
    });


  }, []);

  setTimeout(() => {
    setshowAlert(false);
    setshowAlertPass(false);
    setshowAlertUser(false);
}, 10000);

  return (
    <><div>

      <div className="navbar_container">
        <div className="navbar_wrapper">
          <div className="logo_box">
            <a href="/">
              <img src={logoNav} alt='' />
            </a>

          </div>

          <div className="search_box">
            <input type="text" placeholder="search...." />
            <button id="srch_btn">
              <img src={srch} alt="srch-png" />
            </button>
          </div>


          {/* ---------------------modal------------------------------------ */}
          <Modal
            open={openModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"  >
              

            <Box sx={style}>
            {showAlert &&
                <Alert severity="success" onClose={() => { setshowAlert(false) }}>Account has been created. Please login</Alert>
              }
              {showAlertPass &&
                <Alert severity="success" onClose={() => { setshowAlert(false) }}>Passward has been updated</Alert>
              }
              {showAlertUser &&
                <Alert severity="error" onClose={() => { setshowAlert(false) }}>User not found</Alert>
              }
              {/* login form ------------------------------------------------- */}
              

              <button id='cancel-btn-form'>
                <img src={close} onClick={(e) => { setShowForm('login'); handleCloseModal() }} />
              </button>

              <div className='alert_box'>
                {alert && <Alert severity="success">your account has created  — log in!</Alert>}
            </div>
              {showForm === 'login' && <>
                <div className='main-page'>
                  <div className='sign-cont'>
                    <div className='sign-img animate-top'>
                      <img id='sign-img' src={login} />
                    </div>
                  </div>
                  <div className='form_modal'>
                    <h1 id='heading-sign'> Login</h1>
                    <div className='sign-cont-form'>
                      <div className='sign-form animatezoom-sign'>
                        <div className='sign-box '>

                          <h6 id='error_signup_text' name="all">Enter all fields</h6>
                          <label class="field">
                            <span class="field__label" for="Login_email">Email</span>
                            <input class="field__input" type="text" id="Login_email" onChange={(e) => setEmail(e.target.value)} />
                          </label>

                          <label class="field">
                            <span class="field__label" for="Login_password">Password</span>
                            <input class="field__input" type="password" id="Login_password" onChange={(e) => setPassword(e.target.value)} />
                          </label>

                          <Button style={{ marginBottom: '20px', width: '100%' }} variant="contained" onClick={loginUser}>Login</Button>
                          <h5>Don`t  have account?<span onClick={() => { setShowForm('signup'); setEmail(''); setPassword(''); setName('') }}> Sing up</span></h5>
                          <h5 onClick={() => { setShowForm('forgetpass'); setEmail(''); setPassword(''); setName('') }}>Forget password?</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>}


              {/* signup ------------------------------------------------------------------------------ */}
              {showForm === 'signup' && <>
                <div className='main-page'>
                  <div className='form_modal'>
                    <h1 id='heading-sign'> sign up</h1>
                    <div className='sign-cont-form'>
                      <div className='sign-form animatezoom-sign'>

                        <div className='sign-box '>
                          <h6 id='error_signup_text' name="all">Enter all fields</h6>
                          <label class="field">
                            <span class="field__label" for="Login_email">Name</span>
                            <input class="field__input" type="text" id="Login_Name" onChange={(e) => setName(e.target.value)} />
                          </label>

                          <label class="field">
                            <span class="field__label" for="Login_email">Email</span>
                            <input class="field__input" type="text" id="Login_email" onChange={(e) => setEmail(e.target.value)} />
                          </label>

                          <label class="field">
                            <span class="field__label" for="Login_password">Password</span>
                            <input class="field__input" type="password" id="Login_password" onChange={(e) => setPassword(e.target.value)} />
                          </label>

                          <Button style={{ marginBottom: '20px', width: '100%' }} variant="contained" onClick={generateOTP}>Generate otp</Button>
                          <h5>already have account?<span onClick={() => { setShowForm('login'); setEmail(''); setPassword(''); setName('') }}> Log In</span></h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='sign-cont'>
                    <div className='sign-img animate-top'>
                      <img id='sign-img' src={login} />
                    </div>
                  </div>
                </div>
              </>}

              {/*--- opt ------------------------------------------------- */}
              {showForm === 'otp' && <>
                <div className='main-page'>
                  <div className='form_modal'>
                    <button style={{ width: '50px', height: "30px", background: 'none', border: 'solid 1px black' }} onClick={() => { setShowForm('login') }}>{`<`}</button>
                    <h1 id='heading-sign'> otp </h1>
                    <div className='sign-cont-form'>
                      <div className='sign-form animatezoom-sign'>
                        <div className='sign-box '>
                          <h6 id='error_signup_text' name="all">OTP does not match</h6>
                          <label class="field">
                            <span class="field__label" for="Login_email">Enter opt</span>
                            <input class="field__input" type="text" id="Login_Name" onChange={(e) => setuserOTP(e.target.value)} />
                          </label>

                          <Button style={{ marginBottom: '20px', width: '100%' }} variant="contained" onClick={signupUser}>Verify</Button>
                          <h5>already have account?<span onClick={() => { setShowForm('login'); setEmail(''); setPassword(''); setName('') }}>Sign up</span></h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='sign-cont'>
                    <div className='sign-img animate-top'>
                      <img id='sign-img' src={login} />
                    </div>
                  </div>
                </div>
              </>}

              {/* forget password ------------------------------------------ */}
              {showForm === 'forgetpass' && <>
                <div className='main-page'>
                  <div className='sign-cont'>
                    <div className='sign-img animate-top'>
                      <img id='sign-img' src={login} />
                    </div>
                  </div>
                  <div className='form_modal'>
                    <h1 id='heading-sign'> Forget password</h1>
                    <div className='sign-cont-form'>
                      <div className='sign-form animatezoom-sign'>
                        <div className='sign-box '>

                          <h6 id='error_signup_text' name="all">Enter all fields</h6>
                          <label class="field">
                            <span class="field__label" for="Login_email">Email</span>
                            <input class="field__input" type="text" id="Login_email" onChange={(e) => setEmail(e.target.value)} />
                          </label>

                          <Button style={{ marginBottom: '20px', width: '100%' }} variant="contained" onClick={forgetpass_OTP}>get otp</Button>
                          <h5>Don`t  have account?<span onClick={() => { setShowForm('signup'); setEmail(''); setPassword(''); setName('') }}> Sing up</span></h5>
                          {/* <h5  onClick={() => { setShowForm('forgetpass'); setEmail(''); setPassword(''); setName('') }}>Forget password?</h5> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>}


              {/* forget password OTP------------------------------------------ */}
              {showForm === 'forgetpass_OTP' && <>
                <div className='main-page'>
                  <div className='sign-cont'>
                    <div className='sign-img animate-top'>
                      <img id='sign-img' src={login} />
                    </div>
                  </div>
                  <div className='form_modal'>
                    <h1 id='heading-sign'> Forget password</h1>
                    <div className='sign-cont-form'>
                      <div className='sign-form animatezoom-sign'>
                        <div className='sign-box '>

                          <h6 id='error_signup_text' name="all">Enter all fields</h6>
                          <label class="field">
                            <span class="field__label" for="Login_email">Enter OTP</span>
                            <input class="field__input" type="number" id="Login_email" onChange={(e) => setuserOTP(e.target.value)} />
                          </label>

                          <Button style={{ marginBottom: '20px', width: '100%' }} variant="contained" onClick={forgetpass}>Verify</Button>
                          <h5>Don`t  have account?<span onClick={() => { setShowForm('signup'); setEmail(''); setPassword(''); setName('') }}> Sing up</span></h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>}

              {/* forget password OTP------------------------------------------ */}
              {showForm === 'forgetpass_newPass' && <>
                <div className='main-page'>
                  <div className='sign-cont'>
                    <div className='sign-img animate-top'>
                      <img id='sign-img' src={login} />
                    </div>
                  </div>
                  <div className='form_modal'>
                    <h1 id='heading-sign'> Forget password</h1>
                    <div className='sign-cont-form'>
                      <div className='sign-form animatezoom-sign'>
                        <div className='sign-box '>

                          <h6 id='error_signup_text' name="all">Enter all fields</h6>
                          <label class="field">
                            <span class="field__label" for="Login_email">New password</span>
                            <input class="field__input" type="text" id="Login_email" name='NewPassword' onChange={(e) => setNewPassword(e.target.value)} />
                          </label>

                          <Button style={{ marginBottom: '20px', width: '100%' }} variant="contained" onClick={updatepass}>Verify</Button>
                          <h5>Don`t  have account?<span onClick={() => { setShowForm('signup'); setEmail(''); setPassword(''); setName('') }}> Sing up</span></h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>}

            </Box>
          </Modal>
          {/* ---------------------  modal  Close  ------------------------------------ */}


          {/* //////////////////////   menu   /////////////////////////// */}



          <div className="user_box"  >


            <Tooltip title="Account">
              <div id="user_account">

                {!Login && <Button variant="contained" color="success" onClick={handleOpenModal} > Login </Button>}

                {Login && <Button
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}>
                  <img src={user} alt="user" />
                  <h6>{me.name}</h6>
                </Button>}

              </div>
            </Tooltip>



            <Menu
              id="account-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button'
              }}>

              {/* {!Login && <MenuItem onClick={handleClose}> <Link to='/Login'>
                <Button variant="contained" color="success"> Login </Button>  </Link> </MenuItem>} */}


              {Login && <Link to='/me/profile'><MenuItem onClick={handleClose}><ListItemIcon ><AccountCircleIcon fontSize="medium" sx={{ opacity: 0.8 }} /></ListItemIcon> My account</MenuItem></Link>}

              <Divider />
              {/* admin ------------------------------------------------------------------------------------------------------------------- */}
              {me.role === 'admin' && <a href='/admin/home'><MenuItem onClick={handleClose}><ListItemIcon >
              </ListItemIcon>Admin</MenuItem></a>}

              {Login && <> <Link to='/me/OrderList'>
                <MenuItem onClick={handleClose}><ListItemIcon >
                  <InventoryIcon fontSize="small" sx={{ opacity: 0.8 }} />
                </ListItemIcon>Orders</MenuItem> </Link>

                <Link to="/me/bag">
                  <MenuItem onClick={handleClose} ><ListItemIcon >
                    <ShoppingBagTwoToneIcon fontSize="small" sx={{ opacity: 0.8 }} />
                  </ListItemIcon>Bag</MenuItem> </Link>

                <MenuItem onClick={logout}><ListItemIcon >
                  <Logout fontSize="small" sx={{ opacity: 0.8 }} />
                </ListItemIcon>Logout</MenuItem> </>}
            </Menu>





            {Login && <Tooltip title="Bag">
              <Link to="/me/bag">
                <div className="menu_btn" >
                  <img src={bag} alt="shooping bag" />
                  <h6>Bag</h6>
                </div>
              </Link>
            </Tooltip>}






            {!Login && <Tooltip title="Bag" >
              <Link to="/">
                <div className="menu_btn" onClick={handleOpenModal}>
                  <img src={bag} alt="shooping bag" />
                  <h6>Bag</h6>
                </div></Link>
            </Tooltip>}



          </div>
        </div>
      </div>
    </div>

    </>
  );

  function logout(e) {
    e.preventDefault();
    axios.get("http://localhost:4000/api/v1/logout", { withCredentials: true }).then((response) => {
      setLogin(false)
      window.location.replace('/')
    })
  }


  // login user -----------------------------------------------------------------------
  function loginUser(e) {
    e.preventDefault();
    const error_text = document.getElementById('error_signup_text');
    var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email === '' | password === '') {
      return (error_text.style.display = 'block', error_text.innerText = 'Enter all fields')
    }

    if (!(email.match(validRegex))) {
      // return (error_text.style.display = 'block' , error_text.innerHTML = '<h2>i nvalid email</h2>')
      return (error_text.style.display = 'block', error_text.innerText = 'invalid email')
    }


    axios.post('http://localhost:4000/api/v1/login', {
      "email": email,
      "password": password
    }, { withCredentials: true }).then((response) => {
      console.log(response.data);
      if (response.data.success) {
        const user_role = response.data.user.role;
        if (user_role === 'admin') {
          window.location.replace("http://localhost:3000/admin/home")
        }
        else {

          window.location.reload();
        }
        console.log(user_role);
      }

      if (!(response.data.success)) {
        return (error_text.style.display = 'block', error_text.innerText = 'invalid email or password')
      }

    }).catch((err) => {
      console.log(err);
    })

  }

  // create user=----------------------------------------
  function signupUser(e) {
    e.preventDefault();

    if (OTP != userOTP) {
      console.log("otp not match");
      document.getElementById('error_signup_text').style.display = "block";
      document.getElementById('error_signup_text').style.color = "red";
      return;
    }

    axios.post('http://localhost:4000/api/v1/register', {
      "name": name,
      "email": email,
      "password": password,
      "phone": phoneNumber

    }, { withCredentials: true }).then((response) => {
      console.log(response.data);
      if (response.data.success) {
        setShowForm('login');
    setshowAlert(true)

      }
    }).catch((err) => {
      console.log(err);
    })

  }

  // OTP  for register---------------------------------------
  function generateOTP() {

    const inputBox = document.getElementById('Login_Name');
    const error_text = document.getElementById('error_signup_text');
    var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    if (name.trim() === '' | email === '' | password.trim() === '') {
      return error_text.style.display = 'block';
    }

    if (!(email.match(validRegex))) {
      return (error_text.style.display = 'block', error_text.innerText = 'invalid email');
    }

    if (password.trim().length < 8) {
      return (error_text.style.display = 'block', error_text.innerText = 'password muste be 8-20 char');
    }
    if (password.trim().length >= 20) {
      return (error_text.style.display = 'block', error_text.innerText = 'password muste be 8-20 char');
    }


    
    setShowForm('otp');
    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 4; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    axios.post('http://localhost:4000/api/v1/sndMail/otp', {
      "email": email,
      "otp": OTP
    }, { withCredentials: true }).then((response) => {
      console.log(response.data);
    }).catch((err) => {
      console.log(err);
    })
    setOTP(OTP);
    console.log("user regitser otp",OTP);
  }



  // forget pass----------------------------------------------
  function forgetpass_OTP() {
    const error_text = document.getElementById('error_signup_text');
    var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    if ( email === '') {
      return (error_text.style.display = 'block',error_text.innerText = 'enter email');
    }

    if (!(email.match(validRegex))) {
      return (error_text.style.display = 'block', error_text.innerText = 'invalid email');
    }
    error_text.style.display = 'hidden';
   
    let user_found=false;

    axios.post('http://localhost:4000/api/v1/singleUser', {email:email}, { withCredentials: true }).then((response) => {
      console.log(response.data);

      if (response.data.success===true) {
        console.log("found");
        user_found=true;
      }
      if (response.data.success===false) {
          setShowForm('forgetpass');
          setshowAlertUser(true);
      return (error_text.style.display = 'block',error_text.innerText = 'user not found ');

      }
    });

   

    

      // return null;


    setShowForm('forgetpass_OTP');

    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 4; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    axios.post('http://localhost:4000/api/v1/sndMail/otp', {
      "email": email,
      "otp": OTP
    }, { withCredentials: true }).then((response) => {
      console.log(response.data);
    }).catch((err) => {
      console.log(err);
    })
    setOTP(OTP);
    console.log(OTP);

  }

  function forgetpass(params) {

    console.log(OTP);
    console.log(userOTP);
    if (OTP != userOTP) {
      console.log("otp not match");
      document.getElementById('error_signup_text').style.display = "block";
      document.getElementById('error_signup_text').innerText = "invalid otp";
      document.getElementById('error_signup_text').style.color = "red";
      return;
    }
    setShowForm('forgetpass_newPass');

  }

  function updatepass() {
    const error_text = document.getElementById('error_signup_text');

    if (NewPassword.trim() === '') {
      return (error_text.style.display = 'block',error_text.innerText = 'enter password');
    }
    if (NewPassword.trim().length < 8) {
      return (error_text.style.display = 'block', error_text.innerText = 'password muste be 8-20 char');
    }
    if (NewPassword.trim().length >= 20) {
      return (error_text.style.display = 'block', error_text.innerText = 'password muste be 8-20 char');
    }
    console.log(NewPassword);

    const updateInfo = {
      email:email,
      password: NewPassword
    }

    axios.put("http://localhost:4000/api/v1/forgetPass", updateInfo, { withCredentials: true }).then((response) => {
      console.log("updated password run");
      console.log(response);
      window.location.reload();
      setshowAlertPass(true)
    }).catch((err) => {
      console.log(err);
    })

  }
}
