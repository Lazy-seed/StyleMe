/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import "./login.css";
import login from "./img/i3.jpg";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';


export default function Login() {

  return (
    <div className='main-page'>
      <div className='login-cont'>
        <div className='login-img animate-top'>
          <img id='login-img' src={login} />
        </div>
      </div>
      <div className='login-cont-form'>
        <div className='login-form  animate-bottom '>
          <div className='login-box'>
            <TextField style={{ marginBottom: '30px' }} id="filled-basic" label="Email" variant="filled" />
            <TextField
              style={{ marginBottom: '30px' }}
              id="filled-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="filled"
            />
            <Link to="/"><Button style={{ marginBottom: '30px', width: '100%' }} variant="contained">Sign In</Button></Link>
            <Link to="/"><Button style={{ marginBottom: '30px' }} href="#text-buttons">forget password ?</Button></Link>


          </div>

        </div>
      </div>
    </div>
  )
}
