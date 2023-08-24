import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import axios from "axios";
import "./login.css";




function Login() {
  const [alert, setAlert] = useState(true);

  const [email, setEmail] = useState('rio@gmail.com');
  const [password, setPassword] = useState('0000000000');
  console.log(email);


  const baseURL = "http://localhost:4000/api/v1/login";
 
  function loginUser(e) {
    e.preventDefault();
    axios.post(baseURL, {
      "email": email,
      "password": password
    }, { withCredentials: true }).then((response) => {
      console.log(response.data);
      setAlert(response.data.success);
      if (response.data.success) {
        window.location.replace('/');
      }

    }).catch((err) => {
      console.log(err);
    })

  }




  return (

    <>
      <div className='alert_box'>

        {!alert && <Alert severity="error" onClose={() => { setAlert(true) }}>invalid Login Credentials — Login failed!</Alert>}
      </div>
      <div className="login_container">

        <div className="login_main">
          <p className="login_sign" align="center">Login</p>

          <form className="login_form1">

            <input className="login_un " type="text" align="center" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input className="login_pass" type="text" align="center" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <div className="login_submit" align="center" onClick={loginUser}>Login</div>
            <p className="forgot" align="center">Forgot Password?</p>

            

          </form>
          <div className='sign_up_link' align="center">Don’t have an account? <Link to='/signup'><snap style={{ color: 'blue' }}> Sign up now </snap></Link> </div>
        </div>
      </div>
    </>
  );

}

export default Login;