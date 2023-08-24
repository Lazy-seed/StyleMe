import React, { useState, useEffect } from 'react'

import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import './D1.css';
import tick_img from './img/tick.png'
import axios from "axios";


export default function Changepass() {
  useEffect(() => {
    axios.get("http://localhost:4000/api/v1/me", { withCredentials: true }).then((response) => {
      console.log(response.data);
      setMe(response.data.user)
    }).catch((err) => {
      console.log(err);
    })
  }, []);
  const [me, setMe] = useState({})

  const [password, setPassword] = useState('');
  const [NewPassword, setNewPassword] = useState('');
  const [Cpassword, setCPassword] = useState('');
  const [Is_match, setIs_match] = useState(false);
  const og_pass = me.password;


  return (
    <>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div class="personal_information">
          <div class="profile_info">
            <div class="profile_info2 " style={{ width: '662px', height: '645px' }}>
              <h1 id="heading">change password</h1>
              <div class="cl" style={{ padding: '5px 40px' }}>



                {!Is_match && <>
                  <div class="inputDiv">
                    <label class="inputLabel" for="password">Enter Password</label><h6 id="incorrect">Incorrect password</h6>
                    <input type="password" id="password" name="password" required onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  <button id="edit_button" style={{ margin: '20px 0px 0px 130px' }} onClick={CheckPAss}>Proceed</button>
                </>}

                {Is_match && <>
                  <div class="inputDiv" id='inputDivBox'>

                    <h6 id="incorrect" >Incorrect password</h6>
                    <label class="inputLabel" for="NewPassword">New Password</label>
                    <input type="password" id="password" name="NewPassword" required onChange={(e) => setNewPassword(e.target.value)} />
                    <label class="inputLabel" for="CPassword">Confirm Password</label>
                    <input type="password" id="password" name="CPassword" required onChange={(e) => setCPassword(e.target.value)} />
                    <button id="submit_button" style={{ margin: '20px 0px 0px 80px' }} onClick={UpdatePass}>Update</button>

                  </div>

                </>}

              </div>

            </div>
          </div>
        </div>
      </Box>
    </>
  );

  function CheckPAss(e) {
    e.preventDefault();
    const inputBox = document.getElementById('password');
    const incorrect_text = document.getElementById('incorrect');


    if (og_pass === password) {
      setIs_match(true);
      console.log("matched");
    }
    if (og_pass != password) {
      setIs_match(false);
      inputBox.style.borderColor = 'red';
      incorrect_text.style.display = 'block';
      console.log("not match");
    }

  }


  function UpdatePass(e) {
    e.preventDefault();

    const Np = document.getElementsByName("NewPassword");
    const Cp = document.getElementsByName("CPassword");
    const inputBox = document.getElementById('password');
    const error_text = document.getElementById('incorrect');
    const inputDivBox = document.getElementById("inputDivBox");



    if (NewPassword != Cpassword) {
      error_text.style.display = 'block';
      error_text.innerText = "Password not match"
      console.log("compare not match");
    }

    if (NewPassword === '' || Cpassword === '') {
      error_text.style.display = 'block';
      error_text.innerText = "Enter all fields"
      Np[0].style.borderColor = 'red';
      Cp[0].style.borderColor = 'red';
    }

    if (NewPassword === Cpassword) {

      if (NewPassword.length <= 7 || Cpassword.length <= 7) {
        error_text.style.display = 'block';
        error_text.innerText = "Password must be 8 or more than 8 characters"
        Np[0].style.borderColor = 'red';
        Cp[0].style.borderColor = 'red';
      }

      else {

        Np[0].style.borderColor = 'green';
        Cp[0].style.borderColor = '#ccc';
        error_text.style.display = 'none';
        // inputDivBox.innerHTML = <img src={tick_img} style={{width:"150px"}} />;

        console.log("com[pare matched");

        const updateInfo = {
          password: NewPassword
        }

        axios.put("http://localhost:4000/api/v1/me/update", updateInfo, { withCredentials: true }).then((response) => {
          console.log("updated password");
          window.location.replace('/me/profile')
          console.log(response);
        }).catch((err) => {
          console.log(err);
        })

      }

    }


  }


  function updateMe(e) {
    e.preventDefault()

    const updateInfo = {

      password
    }

    axios.put("http://localhost:4000/api/v1/me/update", updateInfo, { withCredentials: true }).then((response) => {
      console.log(response);
      console.log("updated");
      window.location.replace('/me/changePassword')

    }).catch((err) => {
      console.log(err);
    })
  }
}
