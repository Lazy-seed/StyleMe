/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react'
import axios from "axios";

import './product/AdminList.css';

// table
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

// modal
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


function setScroll() {
    console.log("setScroll has run");
    window.scrollTo(0, 0);
}


export default function Reviews() {

    const [pro, setPost] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPrePage, setPostPrePage] = useState(20);
    const [noOfItems, setNoOfItems] = useState(0);

    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        axios.get('http://localhost:4000/api/v1/products').then((response) => {
            setPost(response.data.product);
            console.log(response.data.product);


            let total_reviwes_are = 0;
            for (let i = 0; i < pro.length; i++) {
                total_reviwes_are += pro[i].Reviews.length;
            }
            setNoOfItems(total_reviwes_are);
        });
    }, []);



    if (!pro) {
        return null
    }




    const totalPages = Math.ceil(noOfItems / postPrePage);
    let noOfPages = []
    for (let i = 0; i < totalPages; i++) {
        noOfPages[i] = i + 1;

    }

    const lastPostIndex = currentPage * postPrePage;
    const firstPostIndex = lastPostIndex - postPrePage;
    const currentPosts = pro.slice(firstPostIndex, lastPostIndex);






    return (
        <>
            <div>

                <Dialog
                    fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">

                    <DialogTitle id="responsive-dialog-title">
                        {"Really want to delete?"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>

                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose}>
                            No
                        </Button>
                        <Button onClick={() => setOpen} autoFocus>
                            Yes
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>





            <div class="right-cont">
                <div class="dashboard-heading">
                    <div class="block">
                        <h4>All Reviews</h4>
                        {/* <p>Total Reviews : {noOfItems}</p> */}
                    </div>
                </div>
                <div class="dashboard-heading">
                    <div class="container">

                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 850 }} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow sx={{ backgroundColor: 'grey' }}>
                                        <TableCell sx={{ color: 'white' }}>review ID </TableCell>
                                        <TableCell sx={{ color: 'white' }}>user</TableCell>
                                        <TableCell sx={{ color: 'white' }} >comment</TableCell>
                                        <TableCell sx={{ color: 'white' }} align="right">rating</TableCell>
                                        <TableCell sx={{ color: 'white' }} align="right">Date</TableCell>
                                        {/* <TableCell sx={{ color: 'white' }} align="right">Action</TableCell> */}
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    {currentPosts && currentPosts.map((pro, index) => {
                                        const revie = pro.Reviews;


                                        return (<>
                                            {revie && revie.map((revie, index) => {
                                                return (<>


                                                    <TableRow key={index}>
                                                        <TableCell component="th" scope="row">{revie._id}</TableCell>
                                                        <TableCell component="th" scope="row">{revie.name}</TableCell>
                                                        <TableCell component="th" scope="row">{revie.comment}</TableCell>
                                                        <TableCell component="th" scope="row" align="right">{revie.rating}</TableCell>
                                                        <TableCell component="th" scope="row" align="right">{revie.reviewAt.slice(0, 10)}</TableCell>
                                                        {/* <TableCell align="right"> <button id="edit" onClick={handleClickOpen}>Edit</button></TableCell> */}
                                                        {/* <TableCell align="right"><Link to={`/admin/revieduct/update/${revie._id}`}> <button id="edit">Edit</button></Link></TableCell> */}
                                                    </TableRow>

                                                </>)
                                            })}
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
