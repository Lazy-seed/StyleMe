import React, { useState, useEffect } from 'react'
import axios from "axios";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import '../D1.css';
import icon1 from "../img/menu.png"


export default function Saveadd() {
    useEffect(() => {
        axios.get("http://localhost:4000/api/v1/me", { withCredentials: true }).then((response) => {
            console.log(response.data);
            setMe(response.data.user)
        }).catch((err) => {
            console.log(err);
        })
    }, []);
    const [me, setMe] = useState({})

    if (!me) {
        return null
    }
    let Addr1 = true;
    let Addr2 = true;
    let Addr3 = true;
    if (me.Address1_name === '' || me.Address1_name === ' ' || (!me.Address1_name)) {
        Addr1 = false
    }
    if (me.Address2_name === '' || me.Address2_name === ' ' || (!me.Address2_name)) {
        Addr2 = false
    }
    if (me.Address3_name === '' || me.Address3_name === ' ' || (!me.Address3_name)) {
        Addr3 = false
    }




    return (
        <>
            <div className="profile_info">
                <div className="profile_info2 " style={{ width: '662px' }}>
                    <h1 id="heading">manage address</h1>

                    <div className="savedadd">

                    {Addr1 === false && <><Link to="/me/editadd1"><Button variant="contained" color="secondary" style={{ marginLeft: '20px' }}>
                            + add HOME Address
                        </Button></Link></>}
                        {Addr1 && <>
                        <div className="savedadd_box">
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <h3>{me.Address1_name}  <span id='add_home'>home</span></h3>
                                <img id="aaa" style={{ width: '20px', height: '20px' }} src={icon1} />
                                <div id='addr_edit_opt'>
                                    <Link to="/me/editadd1"><div id='addr_edit_opt1'>Edit</div></Link>
                                    {/* <div id='addr_edit_opt1'>Delete</div> */}
                                </div>
                            </div>
                            <div><p sty>Address: {me.Address1_add} <br /></p>
                                <p> City:&nbsp;{me.Address1_city} &nbsp; &nbsp;  State:&nbsp;{me.Address1_state} </p>
                                <p>pincode:  {me.Address1_pincode}</p>
                                <p>phone: {me.Address1_phone}</p>
                            </div>
                        </div></>}

                        {Addr2 === false && <><Link to="/me/editadd2"><Button variant="contained" color="secondary" style={{ marginLeft: '20px' }}>
                            + add Work Address
                        </Button></Link></>}
                        {Addr2 && <>
                            <div className="savedadd_box">
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <h3>{me.Address2_name}  <span id='add_home'>Work</span></h3>
                                    <img id="aaa" style={{ width: '20px', height: '20px' }} src={icon1} />
                                    <div id='addr_edit_opt'>
                                        <Link to="/me/editadd2"><div id='addr_edit_opt1'>Edit</div></Link>
                                        <div id='addr_edit_opt1' onClick={delAddress2}>Delete</div>
                                    </div>
                                </div>
                                <div><p sty>Address: {me.Address2_add} <br /></p>
                                    <p> City:&nbsp;{me.Address2_city} &nbsp; &nbsp;  State:&nbsp;{me.Address2_state} </p>
                                    <p>pincode:  {me.Address2_pincode}</p>
                                    <p>phone: {me.Address2_phone}</p>
                                </div>
                            </div></>}

                        {Addr3 === false && <><Link to="/me/editadd3"><Button variant="contained" color="secondary" style={{ marginLeft: '20px' }}>
                            + add Other Address
                        </Button></Link></>}
                        {Addr3 && <>
                            <div className="savedadd_box">
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <h3>{me.Address3_name}  <span id='add_home'>Other</span></h3>
                                    <img id="aaa" style={{ width: '20px', height: '20px' }} src={icon1} />
                                    <div id='addr_edit_opt'>
                                        <Link to="/me/editadd3"><div id='addr_edit_opt1'>Edit</div></Link>
                                        <div id='addr_edit_opt1' onClick={delAddress3}>Delete</div>
                                    </div>
                                </div>
                                <div><p sty>Address: {me.Address3_add} <br /></p>
                                    <p> City:&nbsp;{me.Address3_city} &nbsp; &nbsp;  State:&nbsp;{me.Address3_state} </p>
                                    <p>pincode:  {me.Address3_pincode}</p>
                                    <p>phone: {me.Address3_phone}</p>
                                </div>
                            </div></>}
                    </div>
                </div>
            </div>
        </>
    );


    function delAddress2(e) {
        e.preventDefault()
        const updateInfo = {

            Address2_name: "",
            Address2_phone: "",
            Address2_add: "",
            Address2_pincode: "",
            Address2_city: "",
            Address2_state: ""
        }

        axios.put("http://localhost:4000/api/v1/me/update", updateInfo, { withCredentials: true }).then((response) => {
            console.log(response);
            console.log("updated");
            window.location.replace('/me/saveAdd')
        }).catch((err) => {
            console.log(err);
        })
    }
    function delAddress3(e) {
        e.preventDefault()
        const updateInfo = {

            Address3_name: "",
            Address3_phone: "",
            Address3_add: "",
            Address3_pincode: "",
            Address3_city: "",
            Address3_state: ""
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
