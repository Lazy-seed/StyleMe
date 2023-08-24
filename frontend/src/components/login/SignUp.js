/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import "./login.css";
import login from "./img/i1.jpg";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';
export default function SingUp() {
  return (
    <div className='main-page'>
        <div className='sign-cont'>
          <div className='sign-img animate-top'>
            <img id='sign-img' src={login} />
          </div>
        </div>
        <div className='sign-cont-form'>
          <div className='sign-form animate-bottom'>
            <div className='sign-box '>
              <TextField style={{ marginBottom: '20px' }} id="filled-basic" label="username" variant="filled" />
              <TextField style={{ marginBottom: '20px' }} id="filled-basic" label="Email" variant="filled" />
              <TextField
                style={{ marginBottom: '20px' }}
                id="filled-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="filled"
              />
              <Link to="/"><Button style={{ marginBottom: '20px', width: '100%' }} variant="contained">Sing Up</Button></Link>


            </div>


          </div>
        </div>
    </div>
  )
}
