/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react';
import { Link } from 'react-router-dom';
import "./login.css"
import login from "./img/i2.jpg";
import { useParams } from 'react-router-dom'
import Login from './Login';
import Signup from './SignUp';



export default function LoginSingUP() {
    const { what } = useParams();


    return (<>
        <div className='main-page'>
            <div className='sidebar-logSin'>
                <Link class="side-txt">home</Link>


                <Link class="side-txt" to="/user/login">SignIn</Link>
                <Link class="side-txt" to="/user/signup">SingUp</Link>
            </div>
            {what === 'login' && <Login />}
            {what === 'signup' && <Signup />}
        </div>
    </>
    );
}