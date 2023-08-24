
import './paymentSuccess.css'
import React, { useState, useEffect } from 'react'
import axios from "axios";
import tick from './img/tick.png'

export default function PaymentSuccess() {

    useEffect(() => {
        axios.get("http://localhost:4000/api/v1/me/bag/orders", { withCredentials: true }).then((response) => {
            let ln = response.data.orderItems.length;
            setOrders(response.data.orderItems[ln - 1]);
        }).catch((err) => {
            console.log(err);
        });
        axios.get("http://localhost:4000/api/v1/me", { withCredentials: true }).then((response) => {
            setMe(response.data.user)
        })
    }, []);

    const [orders, setOrders] = useState({});
    const items = orders.items
    const [me, setMe] = useState({})
    const date = new Date().toString();
    console.log(orders);

    return (
        <>


            <div className="payment">
                <div className="discription">

                    <div className="dis" >

                        <h2>Success</h2>
                        <p>We received your purchase request;<br /> we'll be in touch shortly!</p>
                        <img src={tick} />
                        <a href='/me/OrderList'> <p style={{ color: 'blue', fontWeight: '600', marginTop: '4px', opacity: '0.9' }}>View Orders</p></a>
                        <a href='/'> <p style={{ color: 'blue', fontWeight: '600', marginTop: '4px', opacity: '0.9' }}>Continue shopping</p></a>
                    </div>
                    {/* <button className="order_btn"><h3 id="order_text">Order Details</h3></button> */}


                </div>
                <div className="success-img">

                    <div className="img_conta">
                        <h1 style={{ textAlign: 'center' }}>Thank you for purchase</h1>
                        <div className='ordersD'>
                            <h3 >{me.name}</h3>
                            <p style={{ opacity: 0.6 }}>Order Id: #{orders._id}</p>
                            <p style={{ opacity: 0.6 }}>Payment Id: #{orders.razorpayPaymentId}</p>
                            <p>{date.slice(0, 3)}, {date.slice(4, 8)} {date.slice(8, 10)}</p>
                            <br />


                            {items && items.reverse().map((items) => {
                                return (
                                    <><div className='orderN'>
                                        <p>{items.name} </p>
                                        <p style={{ fontWeight: '500' }}>₹{items.price}</p>
                                    </div></>)
                            })}

                            <hr style={{ height: '2px', backgroundColor: 'rgba(0, 0, 0, 0.227)', border: 'none' }} />
                            <div className='orderN'>
                                <p style={{ fontWeight: '600' }}>Total Price </p>
                                <p style={{ fontWeight: '600' }}>₹{orders.totalPrice}</p>
                            </div>
                            <hr style={{ height: '4px', backgroundColor: 'rgba(0, 0, 0, 0.227)', border: 'none' }} />

                        </div>
                        <h3 style={{ marginLeft: '40px' }}>Mail has been sent to    <span style={{ color: 'blue' }}>{me.email}</span></h3>
                    </div>

                </div>
            </div>
        </>
    )
}