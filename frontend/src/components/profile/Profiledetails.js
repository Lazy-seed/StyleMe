import React, { useState, useEffect } from 'react'
import axios from "axios";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import './D1.css';
export default function Profiledetails() {

  useEffect(() => {
    axios.get("http://localhost:4000/api/v1/me", { withCredentials: true }).then((response) => {
      console.log(response.data);
      setMe(response.data.user)
      setbday(response.data.user.BOD)
    }).catch((err) => {
      console.log(err);
    })
  }, []);
  const [me, setMe] = useState({})
  const [bday, setbday] = useState()
  const bod = new Date(bday).getDate() +' / '+ ((new Date(bday).getMonth())+1 )+' / ' + new Date(bday).getFullYear() ;
  console.log(bday);
  console.log(bod);


  return (
    <>
      <div className="profile_info">
        <div className="profile_info2 " style={{ width: '662px', height: '645px' }}>
          <h1 id="heading">Personal information</h1>
          <div class="cl" style={{ padding: '5px 40px' }}>
            <div class="inputDiv">
              <label class="inputLabel" for="name">Full Name</label><h6 id="incorrect">Incorrect password</h6>
              <input type="text" className="user_detail_input" name="name" value={me.name} disabled style={{cursor:'no-drop'}} />
              <label class="inputLabel" for="name">Mobile Number</label><h6 id="incorrect">Incorrect password</h6>
              <input type="text" className="user_detail_input" name="name" value={me.phone} disabled style={{cursor:'no-drop'}} />
              <label class="inputLabel" for="name">Email</label><h6 id="incorrect">Incorrect password</h6>
              <input type="text" className="user_detail_input" name="name" value={me.email} disabled style={{cursor:'no-drop'}} />
              <label class="inputLabel" for="name">BirthDate</label><h6 id="incorrect">Incorrect password</h6>
              <input type="text" className="user_detail_input" name="name" value={bod} disabled style={{cursor:'no-drop'}} />
            </div>

              <Link id="edit_button" to="/me/editprofile" style={{marginLeft:'140px',marginTop:'30px'}}>edit</Link>
          </div>

        </div>
      </div>


    </>
  )
}
