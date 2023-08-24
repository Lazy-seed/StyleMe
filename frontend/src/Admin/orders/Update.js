import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'
import axios from "axios";

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



export default function Update() {
    const { id, num } = useParams();

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };



    useEffect(() => {
        axios.get(`http://localhost:4000/api/v1/me/order/details/${id}`).then((response) => {
            setOrder(response.data.singleOrder);
            setItems(response.data.singleOrder.items[num]);
            // console.log(response.data);
        });
    }, []);

    const [order, setOrder] = useState();
    const [items, setItems] = useState();
    const [delv, setDelv] = useState('');


    if (!order) {
        return null
    }
    // console.log(items);
    return (
        <>

            <div className="right-cont" >
                <div className="product-a" style={{ paddingLeft: '100px', paddingTop: '50px' }}>

                    <div className="update_order_cont" >

                    <h2>update order</h2>




                        <div className='update_order_box'>
                            <div className='update_order_box_img'>
                                <img src={items.img} />
                            </div>
                            <div className='update_order_box_detail'>
                                <h4>{items.name}</h4>
                                <h4>Price : ₹{items.price}</h4>
                                <h4>Size : {items.size}</h4>
                                <h4>Quantity : {items.quantity}</h4>
                                <h4>Date : {items.OrderDate}</h4>
                                <h4>Payment : {order.payment}</h4>
                                <h4>Payment ID : {order.razorpayPaymentId}</h4>
                                <h4>Delivery Status : {items.deliveryStatus}</h4>
                            </div>
                            <div className='update_order_box_radio'>
                                <h3>Status : {items.deliveryStatus}</h3>
                                <div className='status_box' onChange={(e) => setDelv(e.target.value)}>
                                    <span>
                                        <input type="radio" id={`processed`} name="type" value="processed" />
                                        <label htmlFor="processed">processed</label></span>

                                    <span><input type="radio" id={`route`} name="type" value="route" />
                                        <label htmlFor="route">route</label></span>

                                    <span><input type="radio" id={`arrived`} name="type" value="arrived" />
                                        <label htmlFor="arrived">arrived</label></span>

                                    <span><input type="radio" id={`delivered`} name="type" value="delivered" />
                                        <label htmlFor="delivered">delivered</label></span>
                                    <span><input type="radio" id={`cancel`} name="type" value="cancel" />
                                        <label htmlFor="cancel">cancel</label></span>
                                </div>
                            </div>
                            <div className='update_order_box_button'>
                                <Button variant="contained" color="success" onClick={() => { updateStatus(items._id) }}>
                                    update
                                </Button>


                            </div>
                        </div>





                        <Stack direction="row" spacing={2} style={{ marginLeft: '600px',marginTop: '1       00px' }}>

                            <Button variant="contained" color="error" onClick={() => window.location.replace('/admin/order')}>
                                cancel
                            </Button>
                            <Button variant="contained" color="success" >
                                Total Price : ₹ {order.totalPrice}
                            </Button>
                        </Stack>
                    </div>
                </div>
            </div>
        </>
    )


    function updateStatus(Idd) {
        console.log("updateStatus run");

        let newItems = []
        let newOrder = order
        for (let i = 0; i < order.items.length; i++) {
            // const element = array[i];
            newItems[i] = order.items[i]
        }

        for (let i = 0; i < newItems.length; i++) {
            if (newItems[i]._id === Idd) {
                console.log(i, "item found");
                newItems[i].deliveryStatus = delv
            }
        }

        newOrder.items = newItems

        console.log(newOrder);

        axios.put(`http://localhost:4000/api/v1/me/order/update/${id}`, { newItems }, { withCredentials: true }).then((response) => {
            console.log(response.data);
            window.location.reload();
            axios.get(`http://localhost:4000/api/v1/me/order/details/${id}`).then((response) => {
                setOrder(response.data.singleOrder);
                setItems(response.data.singleOrder.items[num]);
                // console.log(response.data);
            });
        });



    }
}
