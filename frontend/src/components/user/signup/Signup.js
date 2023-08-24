import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import axios from "axios";
import "./signup.css";




function Signup() {
  const [alert, setAlert] = useState(true);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('rio@gmail.com');
  const [password, setPassword] = useState('0000000000');
  const [phoneNumber, setPhoneNumber] = useState('');

  console.log(email);


  function signupUser(e) {
    e.preventDefault();
    if (name==='' | email==='' | password==='' ) {
      return setAlert(false);
    }


    axios.post('http://localhost:4000/api/v1/register', {
    "name":name,  
    "email": email,
      "password": password,
      "phone":phoneNumber
      
    }, { withCredentials: true }).then((response) => {
      console.log(response.data);
      if (response.data.success) {
        window.location.replace('/login');
      }
    }).catch((err) => {
      console.log(err);
    })

  }


 

 
  return (

    <>
      <div className='alert_box'>

        {!alert && <Alert severity="error" onClose={() => { setAlert(true) }}>please enter all details — signup failed!</Alert>}
      </div>
      <div className="login_container">

        <div className="login_main">
          <p className="login_sign" align="center">Login</p>

          <form className="login_form1">

            <input className="login_un " type="text" align="center" placeholder="Name"  onChange={(e) => setName(e.target.value)} />
            <input className="login_un " type="text" align="center" placeholder="E-mail"  onChange={(e) => setEmail(e.target.value)} />
            <input className="login_un " type="text" align="center" placeholder="Phone"  onChange={(e) => setPhoneNumber(e.target.value)} />
            <input className="login_pass" type="text" align="center" placeholder="Password"  onChange={(e) => setPassword(e.target.value)} />
            <div className="login_submit" align="center" onClick={signupUser}>Login</div>

            {/* <button className="btn btn-lg btn-primary btn-block" onClick={me}>Me</button> */}
            {/* <button className="btn btn-lg btn-primary btn-block" onClick={logout}>Log out</button> */}

          </form>
          <div className='sign_up_link' align="center">Already have an account?  <Link to='/login'><snap style={{ color: 'blue' }}> Log in now</snap></Link> </div>
        </div>
      </div>
    </>
  );

}

export default Signup;