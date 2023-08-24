import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../D1.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from "axios";

export default function Editadd() {

    useEffect(() => {
        axios.get("http://localhost:4000/api/v1/me", { withCredentials: true }).then((response) => {
            console.log(response.data.user);
            setAddr(response.data.user)
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    const [addr, setAddr] = useState({})

    const [Address3_name, setAddress3_Name] = useState()
    const [Address3_phone, setAddress3_Phone] = useState()
    const [Address3_add, setAddress3_Add] = useState()
    const [Address3_city, setAddress3_City] = useState()
    const [Address3_state, setAddress3_State] = useState()
    const [Address3_pincode, setAddress3_Pincode] = useState()


    return (
        <>
            <div className="personal_information">
                <div className="profile_info ">

                    <h1 id="heading">Edit Address OTHER</h1>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                        style={{ padding: '10px' }}>
                        <h6 id="incorrect">Error</h6>


                        <div className="c1" style={{ display: 'flex', alignItems: 'center' }}>
                            <h3 style={{ width: '130px', padding: '10px' }}>Name : </h3> <input type="text" className="user_detail_input" name="aname" defaultValue={addr.Address3_name} onChange={(e) => setAddress3_Name(e.target.value)} style={{ width: '32%', marginRight: '20px' }} />
                            <h3 style={{ width: '130px', padding: '10px' }}>Phone : </h3> <input type="number" className="user_detail_input" name="aphone" defaultValue={addr.Address3_phone} onChange={(e) => setAddress3_Phone(e.target.value)} style={{ width: '30%', marginRight: '20px' }} />
                        </div>
                        <div className="c1" style={{ display: 'flex', alignItems: 'center' }} >
                            <h3 style={{ width: '130px', padding: '10px' }}>Address : </h3> <input type="text" className="user_detail_input" name="aadd" defaultValue={addr.Address3_add} onChange={(e) => setAddress3_Add(e.target.value)} style={{ width: '32%', marginRight: '20px' }} />
                            <h3 style={{ width: '130px', padding: '10px' }}>State : </h3>  <input type="text" className="user_detail_input" name="astate" defaultValue={addr.Address3_state} onChange={(e) => setAddress3_State(e.target.value)} style={{ width: '30%', marginRight: '20px' }} />
                        </div>

                        <div className="c1" style={{ display: 'flex', alignItems: 'center' }} >
                            <h3 style={{ width: '130px', padding: '10px' }}>City : </h3>  <input type="text" className="user_detail_input" name="acity" defaultValue={addr.Address3_city} onChange={(e) => setAddress3_City(e.target.value)} style={{ width: '32%', marginRight: '20px' }} />
                            <h3 style={{ width: '130px', padding: '10px' }}>pincode : </h3> <input type="number" className="user_detail_input" name="apincode" defaultValue={addr.Address3_pincode} onChange={(e) => setAddress3_Pincode(e.target.value)} style={{ width: '30%', marginRight: '20px' }} />
                        </div>
                        <div className="edit_btn">
                            <button id="submit_button" onClick={updateAddress3}>submit</button>
                            <Link id="cancel_button" to="/me/saveAdd">cancel</Link>
                        </div>

                    </Box>
                </div>
            </div>
        </>
    );


    function updateAddress3(e) {
        e.preventDefault()
        let err_msg = document.getElementById('incorrect');

        let aname = document.getElementsByName('aname')[0].value
        let aphone = document.getElementsByName('aphone')[0].value
        let aadd = document.getElementsByName('aadd')[0].value
        let astate = document.getElementsByName('astate')[0].value
        let acity = document.getElementsByName('acity')[0].value
        let apincode = document.getElementsByName('apincode')[0].value

        if (aname.trim() === '' || aphone.trim() === '' || aadd.trim() === '' ||astate.trim() === '' || acity.trim() === '' ||apincode.trim() === '') {
            console.log("phone emprty");
            err_msg.style.display = 'block';
            err_msg.innerHTML = 'Enter all fields';
            return null
        }
        err_msg.style.display = 'none';

        if ( aphone.length != 10) {
            console.log("invalid phone ");
            err_msg.style.display = 'block';
            err_msg.innerHTML = 'invalid phone';
            return null
        }
        err_msg.style.display = 'none';

        if ( apincode.length != 6) {
            console.log("invalid pincode ");
            err_msg.style.display = 'block';
            err_msg.innerHTML = 'invalid pincode';
            return null
        }




        err_msg.style.display = 'none';
        console.log("outside");


        const updateInfo = {

            Address3_name,
            Address3_phone,
            Address3_add,
            Address3_pincode,
            Address3_city,
            Address3_state
        }

        axios.put("http://localhost:4000/api/v1/me/update", updateInfo, { withCredentials: true }).then((response) => {
            console.log(response);
            console.log("updated");
            window.location.replace('/me/saveAdd')
        }).catch((err) => {
            console.log(err);
        })
    }


}
