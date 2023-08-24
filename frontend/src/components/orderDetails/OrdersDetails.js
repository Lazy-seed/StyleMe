import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect, useState } from 'react'
import './orderDetails.css'

import delivery from './gif/delivery.gif'
import processed from './gif/processed.gif'
import tick from './gif/tick.png'
import cross from './gif/cross.png'

import route from './gif/route.gif'
import axios from "axios";
import { useParams } from 'react-router-dom'



export default function OrdersDetails() {
    const { id, productID } = useParams();
    const [useOrderItem, setOrderItem] = useState()
    const [useOrder, setOrder] = useState();
    const [date, setDate] = useState(null)
    const [Ddate, setDdate] = useState(null)
    const [useDeliveryStatus, setDeliveryStatus] = useState();

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        axios.get(`http://localhost:4000/api/v1/me/order/details/${id}`, { withCredentials: true }).then((response) => {
            console.log(response.data.singleOrder.items);
            setDate(response.data.singleOrder.items[0].OrderDate);
            setDdate(response.data.singleOrder.items[0].deliveryDate);


            setOrderItem(response.data.singleOrder.items[productID])
            setOrder(response.data.singleOrder)

        }).catch((err) => {
            console.log(err);
        })
    }, []);

    const orderDate = new Date(date).getDate() + 1 +' / '+ new Date(date).getMonth() + 1 +' / ' + new Date(date).getFullYear() ;
    console.log(orderDate);

    if (!useOrderItem) {
        return null
    }

    if (!useOrder) {
        return null
    }
    // console.log(date.getDate());
    // const current = new Date(new Date(date).getTime()+(2*24*60*60*1000));
    // const datee = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    // console.log(datee);


    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">
                    {"Do you want to cancel order?"}
                </DialogTitle>
                {/* <DialogContent>

                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.

                </DialogContent> */}
                <DialogActions>
                    <Button onClick={handleClose}>No</Button>
                    <Button onClick={updateStatus} autoFocus>Yes</Button>
                </DialogActions>
            </Dialog>


            <div className="details">

                <div className="products_order_details">
                    <img src={useOrderItem.img} alt="" className="img_detials" style={{ width: '30%' }} />
                    <div className="order_details">
                        <h1>{useOrderItem.name}</h1>
                        {/* <p>color: Gold,Black</p> */}
                        <p>size: {useOrderItem.size}</p>
                        <p>quantity: {useOrderItem.quantity}</p>
                        <p>Rupees: ₹{useOrderItem.price}</p>
                        <p>Payment: {useOrder.payment}</p>
                        <p>Order date: {orderDate}</p>
                        <p>Delivery date: {Ddate.slice(0, 10)}</p>

                    </div>
                </div>

                <div className="address">
                    <h1>Delivery Address</h1>
                    <span>Name : {useOrder.shipping.name}</span>
                    <p> Address : {useOrder.shipping.address}, <br />

                        City : {useOrder.shipping.city} <br />
                        Pincode : {useOrder.shipping.zipcode} <br />
                        State : {useOrder.shipping.state}
                    </p>
                    <h4>Contact Number : {useOrder.phone_number}</h4>
                </div>


            </div>
            {useOrderItem.deliveryStatus != 'delivered' && useOrderItem.deliveryStatus != 'cancel' &&
                <button id="cancel_order_button" onClick={handleClickOpen} >cancel Order</button>}



            {useOrderItem.deliveryStatus === 'processed' &&
                <div className="row">
                    <div className="pt45 ">
                        <div className="row justify-content-between">
                            <div className="order-tracking completed">
                                <span className="is-complete"></span>
                                {/* <p>Ordered<br /></p> */}
                                <p>Ordered<br /></p>
                            </div>

                            <div className="order-tracking ">
                                <span className="is-complete"></span>
                                <p>In Route<br /></p>
                            </div>
                            <div className="order-tracking ">
                                <span className="is-complete"></span>
                                <p>Shipped<br /></p>
                            </div>
                            <div className="order-tracking ">
                                <span className="is-complete"></span>
                                <p>Delivered<br /></p>
                            </div>
                        </div>
                    </div>
                </div>}

            {useOrderItem.deliveryStatus === 'route' &&
                <div className="row">
                    <div className="pt45 ">
                        <div className="row justify-content-between">
                            <div className="order-tracking completed">
                                <span className="is-complete"></span>
                                <p>Ordered<br /></p>
                            </div>

                            <div className="order-tracking completed">
                                <span className="is-complete"></span>
                                <p>In Route<br /></p>
                            </div>
                            <div className="order-tracking ">
                                <span className="is-complete"></span>
                                <p>Shipped<br /></p>
                            </div>
                            <div className="order-tracking ">
                                <span className="is-complete"></span>
                                <p>Delivered<br /></p>
                            </div>
                        </div>
                    </div>
                </div>}

            {useOrderItem.deliveryStatus === 'arrived' &&
                <div className="row">
                    <div className="pt45 ">
                        <div className="row justify-content-between">
                            <div className="order-tracking completed">
                                <span className="is-complete"></span>
                                <p>Ordered<br /></p>
                            </div>

                            <div className="order-tracking completed">
                                <span className="is-complete"></span>
                                <p>In Route<br /></p>
                            </div>
                            <div className="order-tracking completed">
                                <span className="is-complete"></span>
                                <p>Shipped<br /></p>
                            </div>
                            <div className="order-tracking ">
                                <span className="is-complete"></span>
                                <p>Delivered<br /></p>
                            </div>
                        </div>
                    </div>
                </div>}

            {useOrderItem.deliveryStatus === 'delivered' &&
                <div className="row">
                    <div className="pt45 ">
                        <div className="row justify-content-between">
                            <div className="order-tracking completed">
                                <span className="is-complete"></span>
                                <p>Ordered<br /></p>
                            </div>

                            <div className="order-tracking completed">
                                <span className="is-complete"></span>
                                <p>In Route<br /></p>
                            </div>
                            <div className="order-tracking completed">
                                <span className="is-complete"></span>
                                <p>Shipped<br /></p>
                            </div>
                            <div className="order-tracking completed">
                                <span className="is-complete"></span>
                                <p>Delivered<br /></p>
                            </div>
                        </div>
                    </div>
                </div>}

            {useOrderItem.deliveryStatus === 'cancel' &&
                <div className="row">
                    <div className="pt45">
                        <div className="row justify-content-between" >
                            <div className="order-tracking completed" style={{ width: '50%' }}>
                                <span className="is-complete"></span>
                                <p>Ordered<br /></p>
                            </div>

                            <div className="order-tracking" style={{ width: '50%' }}>
                                <span className="is-complete" style={{ backgroundColor: 'red' }}></span>
                                <p>Cancel<br /></p>
                            </div>
                        </div>
                    </div>
                </div>}
        </>
    );

    function updateStatus(Idd) {
        console.log("updateStatus run");

        let newItems = []
        let newOrder = useOrder;
        console.log(useOrderItem.productID);

        for (let i = 0; i < newOrder.items.length; i++) {
            newItems[i] = newOrder.items[i]
        }

        console.log(newItems);
        console.log(newOrder);


        for (let i = 0; i < newItems.length; i++) {
            if (newItems[i].productID === productID) {
                console.log(i, "item found");
                newItems[i].deliveryStatus = "cancel"
            }
        }

        newOrder.items = newItems

        console.log(newOrder);

        axios.put(`http://localhost:4000/api/v1/me/order/update/${id}`, { newItems }, { withCredentials: true }).then((response) => {
            console.log(response.data);
            window.location.reload();
        });



    }

}
