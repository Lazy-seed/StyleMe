import React, { useState, useEffect } from 'react'
import './D1.css'
import { Link } from 'react-router-dom';
import sidebar_home from "./img/man.png";
import { useParams } from 'react-router-dom'
import axios from "axios";
import OrderList from './orderList/OrderList'
import Profiledetails from './Profiledetails';
import Saveadd from './address/Saveadd';
import Changepass from './Changepass';
import Editprofile from './Editprofile';
import Editadd from './address/Editadd';
import Editadd2 from './address/Editadd2';
import Editadd3 from './address/Editadd3';
import Help from './Help';
export default function Profile() {
    const [me, setMe] = useState({})

    useEffect(() => {
        axios.get("http://localhost:4000/api/v1/me", { withCredentials: true }).then((response) => {
            console.log(response.data);
            setMe(response.data.user)
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    const { my } = useParams();

    return (
        <>
            <div class="main_profile_container">

                <div class="main_profile_left">
                    <div class="card_profile">
                        <div class="profile_id">
                            <img style={{ paddingLeft: '5px', paddingTop: '5px', width: '30%' }} id="profile_avtar" src={sidebar_home} />
                            <p style={{ paddingLeft: '10px', marginBottom: '15px' }}>{me.name}</p>
                        </div>
                        <div class="link_profile ">
                            <Link id="profile_sidebar" to="/me/profile">personal information</Link>
                            <Link id="profile_sidebar" to="/me/saveAdd">Manage address</Link>
                            <Link id="profile_sidebar" to="/me/OrderList">order list</Link>
                            <Link id="profile_sidebar" to="/me/orderAvatar">vr order list</Link>
                            <Link id="profile_sidebar" to="/me/changePassword">change password</Link>
                            <Link id="profile_sidebar" to="/me/helpcenter">help center</Link>
                            <Link id="profile_sidebar" onClick={logout} >logout</Link>
                        </div>
                    </div>
                </div>

                <div class="main_profile_right">
                    {my === "profile" && <Profiledetails />}
                    {my === "editprofile" && <Editprofile />}
                    {my === "saveAdd" && <Saveadd me={me} />}
                    {my === "editadd1" && <Editadd />}
                    {my === "editadd2" && <Editadd2 />}
                    {my === "editadd3" && <Editadd3 />}
                    {my === "changePassword" && <Changepass />}
                    {my === "OrderList" && <OrderList />}
                    {my === "helpcenter" && <Help />}
                </div>

            </div>

        </>
    );

    function logout(e) {
        e.preventDefault();
        axios.get("http://localhost:4000/api/v1/logout", { withCredentials: true }).then((response) => {

            window.location.replace('/')
        })
    }
}
