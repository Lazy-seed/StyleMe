import React, { useState, useEffect } from 'react'
import axios from "axios";
import './orders_home.css'
import '../admin.css';

import money from './img/money.gif'
import order_gif from './img/orders_gif.gif'

// account
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

import { } from 'recharts';

// tables
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
export default function Orders_home() {
    useEffect(() => {
        axios.get('http://localhost:4000/api/v1/admin/orders').then((response) => {
            setOrders(response.data.orderItems);
            console.log(response.data.orderItems);
        });

    }, []);

    const [orders, setOrders] = useState();

    if (!orders) {
        return null;
    }

    // console.log(orders);
    // // console.log(orders[0].items[0].OrderDate);
    // const ddate = new Date(orders[0].items[0].OrderDate).getDate() + '/' + new Date(orders[0].items[0].OrderDate).getMonth() + '/' + new Date(orders[0].items[0].OrderDate).getFullYear();
    // console.log(ddate);



    // daet
   


    let data = [];
    for (let i = 0; i < 20; i++) {
        data[i] = orders[i];
    }
    let order_total_amt = 0; let order_success_amt = 0; let order_cancel_amt = 0; let order_route_amt = 0;
    // let m1 = 0; let m2 = 0; let m3 = 0; let m4 = 0; let m5 = 0; let m6 = 0; let m7 = 0; let m8 = 0; let m9 = 0; let m10 = 0; let m11 = 0; let m12 = 0;
    let w1 = 0; let w2 = 0; let w3 = 0; let w4 = 0; let w5 = 0; let w6 = 0; let w7 = 0;
    for (let i = 0; i < orders.length - 1; i++) {
        order_total_amt += orders[i].totalPrice;


        for (let j = 0; j < orders[i].items.length; j++) {
            if (orders[i].items[j].deliveryStatus === 'delivered') {
                order_success_amt += orders[i].items[j].price;
            }
            if (orders[i].items[j].deliveryStatus === 'cancel') {
                order_cancel_amt += orders[i].items[j].price;
            }
            if (orders[i].items[j].deliveryStatus === 'route' || orders[i].items[j].deliveryStatus === 'processed') {
                order_route_amt += orders[i].items[j].price;
            }

            let dd = new Date(orders[i].items[j].deliveryDate).getDay() + 1;
            if (dd === 1) {
                w1 += orders[i].items[j].price;
            }
            if (dd === 2) {
                w2 += orders[i].items[j].price;
            }
            if (dd === 3) {
                w3 += orders[i].items[j].price;
            }
            if (dd === 4) {
                w4 += orders[i].items[j].price;
            }
            if (dd === 5) {
                w5 += orders[i].items[j].price;
            }
            if (dd === 6) {
                w6 += orders[i].items[j].price;
            }
            if (dd === 7) {
                w7 += orders[i].items[j].price;
            }


        }

    }
    console.log(w1, w2, w3, w4, w5, w6, w7);

    const weekly=[
        {wk:"sunday",value:w1},
        {wk:"monday",value:w2},
        {wk:"tuesday",value:w3},
        {wk:"wednesday",value:w4},
        {wk:"thursday",value:w5},
        {wk:"friday",value:w6},
        {wk:"saturday",value:w7}
    ]
    console.log(order_total_amt, order_success_amt, order_cancel_amt, order_route_amt);




    return (
        <>

            <div className="order_hone" style={{ margin: '30px 100px' }}>
                {/* <h1 style={{ backgroundColor: '#90CAF9', textAlign: 'center' }}>Orders Details</h1> */}



                    



                <div className='graph_cont'>
                
                    <div>

                        <h3 style={{ margin: '30px 10px 10px 50px' }}>Recent orders bills</h3>
                        <LineChart width={800} height={300} data={data}>
                            <Line type="monotone" dataKey="totalPrice" stroke="#8884d8" />
                            <CartesianGrid stroke="#ccc" />
                            <XAxis />
                            <YAxis dataKey="totalPrice" />
                        </LineChart>
                    </div>
                    <div className='graph_details'>
                        <img src={money} width={100} />
                        <h3>Total Revenue</h3>
                        <h2>₹ {order_total_amt}</h2>
                    </div>
                </div>


                {/* <BarChart
                        width={500}
                        height={500}
                        data={weekly}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="1 1" />
                        <XAxis dataKey="wk" />
                        <YAxis />
                        <Legend />
                        <Bar dataKey="value" fill="#A020F1" />
                    </BarChart> */}

                <hr className='short_hr' />
                <div className='graph_cont'>


                    <div className='graph_details2'>
                        <img src={order_gif} width={200} />
                        <h3>Total Orders</h3>
                        <h2>{orders.length}</h2>
                    </div>



                    <div>
                        <h3 style={{ margin: '30px 10px 10px 50px' }}>recent orders     <a href='/admin/order' style={{ margin: '30px 10px 10px 50px', color: 'blue' }}>View all</a></h3>

                        <Table sx={{ maxWidth: 1000 }} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow sx={{ backgroundColor: 'grey' }}>
                                    <TableCell sx={{ color: 'white' }}>Order ID </TableCell>
                                    <TableCell sx={{ color: 'white' }}>Product ID </TableCell>
                                    <TableCell sx={{ color: 'white' }} align="right">Status</TableCell>
                                    <TableCell sx={{ color: 'white' }} align="right">Amount</TableCell>
                                    <TableCell sx={{ color: 'white' }} align="right">Qty</TableCell>
                                    <TableCell sx={{ color: 'white' }} align="right">Date</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {orders && orders.reverse().slice(0, 10).map((orders, index) => {
                                    const items = orders.items;
                                    return (<>
                                        {items && items.reverse().map((items) => {
                                            return (<>
                                                <TableRow
                                                    key={items.name}>
                                                    <TableCell component="th" scope="row">{index + 1}</TableCell>
                                                    <TableCell component="th" scope="row">{items._id}</TableCell>
                                                    <TableCell align="right">
                                                        {items.deliveryStatus === 'processed' && <div className="col col-2" data-label="Customer Name" style={{ color: 'orange', fontWeight: '600' }}> {items.deliveryStatus}</div>}
                                                        {items.deliveryStatus === 'route' && <div className="col col-2" data-label="Customer Name" style={{ color: 'blue', fontWeight: '600' }} >{items.deliveryStatus}</div>}
                                                        {items.deliveryStatus === 'arrived' && <div className="col col-2" data-label="Customer Name" style={{ color: 'blue', fontWeight: '600' }} >{items.deliveryStatus}</div>}
                                                        {items.deliveryStatus === 'delivered' && <div className="col col-2" data-label="Customer Name" style={{ color: 'green', fontWeight: '600' }}>{items.deliveryStatus}</div>}
                                                        {items.deliveryStatus === 'cancel' && <div className="col col-2" data-label="Customer Name" style={{ color: 'red', fontWeight: '600' }}>{items.deliveryStatus}</div>}
                                                    </TableCell>
                                                    <TableCell align="right">&#8377;{items.price}</TableCell>
                                                    <TableCell align="right">{items.quantity}</TableCell>
                                                    <TableCell align="right">{items.OrderDate.slice(0, 10)}</TableCell>
                                                </TableRow>
                                            </>)
                                        })}
                                    </>)
                                })}
                            </TableBody>
                        </Table>
                    </div>

                </div>
            </div>




















        </>
    )
}
