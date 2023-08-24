/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react'
import axios from "axios";

import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


import '../product/AdminList.css';
import './list.css'



function setScroll() {
    console.log("setScroll has run");
    window.scrollTo(0, 0);
}

export default function Order() {
    const [ofilter, setofilter] = useState("all");
    const [orders, setOrders] = useState(null);
    const [items, setItems] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPrePage, setPostPrePage] = useState(20);
    const [noOfItems, setNoOfItems] = useState(0);
    useEffect(() => {
        axios.get('http://localhost:4000/api/v1/admin/orders').then((response) => {
            setOrders(response.data.orderItems);
            console.log(response.data.orderItems);
            setNoOfItems(response.data.orderItems.length);

        });
    }, []);

    if (!orders) {
        return null
    }


    const totalPages = Math.ceil(noOfItems / postPrePage);
    let noOfPages = []
    for (let i = 0; i < totalPages; i++) {
        noOfPages[i] = i + 1;

    }

    const lastPostIndex = currentPage * postPrePage;
    const firstPostIndex = lastPostIndex - postPrePage;
    const currentPosts = orders.slice(firstPostIndex, lastPostIndex);

    return (
        <>
            <div class="right-cont">
                <div class="dashboard-heading">
                    <div class="block">
                        <h4>All Orders</h4>
                        <p>Total Orders : {orders.length}</p>
                    </div>
                    <Stack direction="row" spacing={2} style={{ marginLeft: '600px',marginTop: '1       00px' }}>

                            <Button variant="contained" color="secondary" onClick={() => { setofilter("all"); setScroll() }} > All</Button>
                            <Button variant="contained" color="success" onClick={() => { setofilter("delivered"); setScroll() }}> Delivered</Button>
                            <Button variant="contained" color="primary" onClick={() => { setofilter("processed"); setScroll() }}>processed</Button>
                            <Button variant="contained" color="primary" onClick={() => { setofilter("route"); setScroll() }}>route</Button>
                            <Button variant="contained" color="primary" onClick={() => { setofilter("arrived"); setScroll() }}>arrived</Button>
                            <Button variant="contained" color="error" onClick={() => { setofilter("cancel"); setScroll() }}>cancled</Button>
                        </Stack>
                </div>
                <div class="dashboard-heading">


                    <div class="container">
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 850 }} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow sx={{ backgroundColor: 'grey' }}>
                                        <TableCell sx={{ color: 'white' }}>Order ID </TableCell>
                                        <TableCell sx={{ color: 'white' }}>Product ID </TableCell>
                                        <TableCell sx={{ color: 'white' }}>name</TableCell>
                                        <TableCell sx={{ color: 'white' }} align="right">Status</TableCell>
                                        <TableCell sx={{ color: 'white' }} align="right">Amount</TableCell>
                                        <TableCell sx={{ color: 'white' }} align="right">Qty</TableCell>
                                        <TableCell sx={{ color: 'white' }} align="right">Date</TableCell>
                                        <TableCell sx={{ color: 'white' }} align="right">Action</TableCell>
                                    </TableRow>
                                </TableHead>


                                <TableBody>
                                    {currentPosts && currentPosts.reverse().map((orders,index) => {
                                        const items = orders.items;

                                        if (ofilter==="all") {
                                            return (<>

                                                {items && items.reverse().map((items) => {
                                                        return (<>
                                                            <TableRow
                                                                key={items.name}>
                                                                <TableCell component="th" scope="row">{index+1}</TableCell>
                                                                <TableCell component="th" scope="row">{items._id}</TableCell>
                                                                <TableCell component="th" scope="row">{items.name}</TableCell>
                                                                <TableCell align="right">
                                                                    {items.deliveryStatus === 'processed' && <div class="col col-2" data-label="Customer Name" style={{ color: 'orange', fontWeight: '600' }}> {items.deliveryStatus}</div>}
                                                                    {items.deliveryStatus === 'arrived' && <div class="col col-2" data-label="Customer Name" style={{ color: 'blue', fontWeight: '600' }} >{items.deliveryStatus}</div>}
                                                                    {items.deliveryStatus === 'delivered' && <div class="col col-2" data-label="Customer Name" style={{ color: 'green', fontWeight: '600' }}>{items.deliveryStatus}</div>}
                                                                    {items.deliveryStatus === 'route' && <div class="col col-2" data-label="Customer Name" style={{ color: 'blue', fontWeight: '600' }}>{items.deliveryStatus}</div>}
                                                                    {items.deliveryStatus === 'cancel' && <div class="col col-2" data-label="Customer Name" style={{ color: 'red', fontWeight: '600' }}>{items.deliveryStatus}</div>}
                                                                </TableCell>
                                                                <TableCell align="right">&#8377;{items.price}</TableCell>
                                                                <TableCell align="right">{items.quantity}</TableCell>
                                                                <TableCell align="right">{items.OrderDate.slice(0, 10)}</TableCell>
                                                                <TableCell align="right"><Link to={`/admin/order/update/${orders._id}/${items.productID}`}> <button id="edit">Edit</button></Link></TableCell>
                                                            </TableRow>
                                                        </>
                                                        )
                                                    })
                                                }
                                                
                                            </>)
                                        }
                                        return (<>

                                            {items && items.reverse().map((items) => {

                                                if(items.deliveryStatus===ofilter){
                                                    return (<>
                                                        <TableRow
                                                            key={items.name}>
                                                            <TableCell component="th" scope="row">{index+1}</TableCell>
                                                            <TableCell component="th" scope="row">{items._id}</TableCell>
                                                            <TableCell component="th" scope="row">{items.name}</TableCell>
                                                            <TableCell align="right">
                                                                {items.deliveryStatus === 'processed' && <div class="col col-2" data-label="Customer Name" style={{ color: 'orange', fontWeight: '600' }}> {items.deliveryStatus}</div>}
                                                                {items.deliveryStatus === 'arrived' && <div class="col col-2" data-label="Customer Name" style={{ color: 'blue', fontWeight: '600' }} >{items.deliveryStatus}</div>}
                                                                    {items.deliveryStatus === 'route' && <div class="col col-2" data-label="Customer Name" style={{ color: 'blue', fontWeight: '600' }}>{items.deliveryStatus}</div>}
                                                                {items.deliveryStatus === 'delivered' && <div class="col col-2" data-label="Customer Name" style={{ color: 'green', fontWeight: '600' }}>{items.deliveryStatus}</div>}
                                                                {items.deliveryStatus === 'cancel' && <div class="col col-2" data-label="Customer Name" style={{ color: 'red', fontWeight: '600' }}>{items.deliveryStatus}</div>}
                                                            </TableCell>
                                                            <TableCell align="right">&#8377;{items.price}</TableCell>
                                                            <TableCell align="right">{items.quantity}</TableCell>
                                                            <TableCell align="right">{items.OrderDate.slice(0, 10)}</TableCell>
                                                            <TableCell align="right"><Link to={`/admin/order/update/${orders._id}/${items.productID}`}> <button id="edit">Edit</button></Link></TableCell>
                                                        </TableRow>
                                                    </>
                                                    )}
                                                })
                                            }
                                            
                                        </>)
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                    <div className='pagination_box'>
                        <ul class="pagination modal-1">
                            <li><a href="#" class="prev">&laquo;</a></li>
                            {noOfPages && noOfPages.map((noOfPages) => {
                                return (
                                    <li onClick={() => { setCurrentPage(noOfPages); setScroll() }} > {noOfPages}</li>
                                )
                            })
                            }
                            <li>&raquo;</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
