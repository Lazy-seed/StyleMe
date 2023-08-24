import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Alert from '@mui/material/Alert';

import './D1.css';
import axios from "axios";


export default function Editprofile() {

  useEffect(() => {
    axios.get("http://localhost:4000/api/v1/me", { withCredentials: true }).then((response) => {
      console.log(response.data);
      setMe(response.data.user);
    }).catch((err) => {
      console.log(err);
    })

  }, []);

  const [showAlert, setshowAlert] = useState(false);

  const [me, setMe] = useState({})
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();
  const [gender, setGender] = useState();
  const [BOD, setBOD] = useState();


  if (!me) {
    return null;
  }


  return (
    <>
      <div className="personal_information">
        {showAlert &&
          <Alert severity="error" onClose={() => { setshowAlert(false) }}>Please fill all details</Alert>}

        <div className="profile_info">
          <div className="profile_info2 " style={{ width: '662px', height: '645px' }}>
            <h1 id="heading">Edit personal information</h1>
            <div className="cl" style={{ padding: '5px 40px' }}>
              <h6 id="incorrect">Error</h6>
              <div className="inputDiv">
                <label className="inputLabel" for="name">Full Name</label>
                <input type="text" className="user_detail_input" name="pname" defaultValue={me.name} onChange={(e) => setName(e.target.value)} maxLength='20' />
                <label className="inputLabel" for="name">Mobile Number</label><h6 id="incorrect">Incorrect password</h6>
                <input type="number" className="user_detail_input" name="pphone" defaultValue={me.phone} onChange={(e) => setPhone(e.target.value)} />
                <label className="inputLabel" for="name">Email</label><h6 id="incorrect">Incorrect password</h6>
                <input type="text" className="user_detail_input" name="name" defaultValue={me.email} disabled style={{ cursor: 'no-drop' }} />
                <label className="inputLabel" for="name">BirthDate</label><h6 id="incorrect">Incorrect password</h6>
                <input type="date" className="user_detail_input" name="name" placeholder={me.BOD}  onChange={(e) => setBOD(e.target.value)} min="1950-01-01" max="2010-12-31"/>
              </div>

              <div className="edit_btn">
                <button id="submit_button" onClick={updateMe}>submit</button>
                <Link id="cancel_button" to="/me/profile">Back</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );



  function updateMe(e) {
    e.preventDefault()

    let err_msg = document.getElementById('incorrect');

    let pname = document.getElementsByName('pname')[0].value
    let pphone = document.getElementsByName('pphone')[0].value


    if (pname.trim() === '' || pphone.trim() === '') {
      console.log("enter all fields");
      err_msg.style.display = 'block';
      err_msg.innerHTML = 'Enter all fields';
      return null
    }
    err_msg.style.display = 'none';
    if (pphone.length != 10) {
      console.log("invalid phone ");
      err_msg.style.display = 'block';
      err_msg.innerHTML = 'invalid phone';
      return null
    }

    err_msg.style.display = 'none';




    const updateInfo = {
      name,
      email,
      password,
      phone,
      gender,
      BOD
    }

    axios.put("http://localhost:4000/api/v1/me/update", updateInfo, { withCredentials: true }).then((response) => {
      console.log(response);
      console.log("updated");
      window.location.replace('/me/profile');

    }).catch((err) => {
      console.log(err);
    })
  }

}