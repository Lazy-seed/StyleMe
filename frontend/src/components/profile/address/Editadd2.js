import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../D1.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from "axios";
import { debounce } from '@mui/material';

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

    const [Address2_name, setAddress2_Name] = useState()
    const [Address2_phone, setAddress2_Phone] = useState()
    const [Address2_add, setAddress2_Add] = useState()
    const [Address2_city, setAddress2_City] = useState()
    const [Address2_state, setAddress2_State] = useState()
    const [Address2_pincode, setAddress2_Pincode] = useState()


    return (
        <>
            <div className="personal_information">
                <div className="profile_info ">

                    <h1 id="heading">Edit Address WORK</h1>
                    <Box component="form"
                        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} noValidateautoComplete="off" style={{ padding: '10px' }}>
                        <h6 id="incorrect">Error</h6>

                        <div className="c1" style={{ display: 'flex', alignItems: 'center' }}>
                            <h3 style={{ width: '130px', padding: '10px' }}>Name : </h3> <input type="text" className="user_detail_input " name="aname" defaultValue={addr.Address2_name} onChange={(e) => setAddress2_Name(e.target.value)} style={{ width: '32%', marginRight: '20px' }} />
                            <h3 style={{ width: '130px', padding: '10px' }}>Phone : </h3> <input type="number" className="user_detail_input" name="aphone" defaultValue={addr.Address2_phone} onChange={(e) => setAddress2_Phone(e.target.value)} style={{ width: '30%', marginRight: '20px' }} />
                        </div>
                        <div className="c1" style={{ display: 'flex', alignItems: 'center' }} >
                            <h3 style={{ width: '130px', padding: '10px' }}>Address : </h3> <input type="text" className="user_detail_input" name="aadd" defaultValue={addr.Address2_add} onChange={(e) => setAddress2_Add(e.target.value)} style={{ width: '32%', marginRight: '20px' }} />
                            <h3 style={{ width: '130px', padding: '10px' }}>State : </h3>  <input type="text" className="user_detail_input" name="astate" defaultValue={addr.Address2_state} onChange={(e) => setAddress2_State(e.target.value)} style={{ width: '30%', marginRight: '20px' }} />
                        </div>

                        <div className="c1" style={{ display: 'flex', alignItems: 'center' }} >
                            <h3 style={{ width: '130px', padding: '10px' }}>City : </h3>  <input type="text" className="user_detail_input" name="acity" defaultValue={addr.Address2_city} onChange={(e) => setAddress2_City(e.target.value)} style={{ width: '32%', marginRight: '20px' }} />
                            <h3 style={{ width: '130px', padding: '10px' }}>pincode : </h3> <input type="number" className="user_detail_input" name="apincode" defaultValue={addr.Address2_pincode} onChange={(e) => setAddress2_Pincode(e.target.value)} style={{ width: '30%', marginRight: '20px' }} />
                        </div>
                        <div className="edit_btn">
                            <button id="submit_button" onClick={updateAddress2}>submit</button>
                            <Link id="cancel_button" to="/me/saveAdd">cancel</Link>
                        </div>

                    </Box>
                </div>
            </div>
        </>
    );


    function updateAddress2(e) {
        e.preventDefault()
        let err_msg = document.getElementById('incorrect');

        let aname = document.getElementsByName('aname')[0].value
        let aphone = document.getElementsByName('aphone')[0].value
        let aadd = document.getElementsByName('aadd')[0].value
        let astate = document.getElementsByName('astate')[0].value
        let acity = document.getElementsByName('acity')[0].value
        let apincode = document.getElementsByName('apincode')[0].value

        if (aname.trim() === '' || aphone.trim() === '' || aadd.trim() === '' || astate.trim() === '' || acity.trim() === '' || apincode.trim() === '') {
            console.log("phone emprty");
            err_msg.style.display = 'block';
            err_msg.innerHTML = 'Enter all fields';
            return null
        }
        err_msg.style.display = 'none';

        if (aphone.length != 10) {
            console.log("invalid phone ");
            err_msg.style.display = 'block';
            err_msg.innerHTML = 'invalid phone';
            return null
        }
        err_msg.style.display = 'none';

        if (apincode.length != 6) {
            console.log("invalid pincode ");
            err_msg.style.display = 'block';
            err_msg.innerHTML = 'invalid pincode';
            return null
        }




        err_msg.style.display = 'none';
        console.log("outside");

        const updateInfo = {

            Address2_name,
            Address2_phone,
            Address2_add,
            Address2_pincode,
            Address2_city,
            Address2_state
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
