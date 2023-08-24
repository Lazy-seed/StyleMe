/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react'
import axios from "axios";



// modal
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

// table
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Link } from 'react-router-dom';

import './AdminList.css';
import './ProductList.css'



function setScroll() {
    console.log("setScroll has run");
    window.scrollTo(0, 0);
}
export default function Products() {






    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // delete product ifd
    const [ID, setId] = useState('')

    const [pro, setPost] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPrePage, setPostPrePage] = useState(10);
    const [noOfItems, setNoOfItems] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:4000/api/v1/products').then((response) => {
            setPost(response.data.product);
            console.log(response.data.product);
            setNoOfItems(response.data.product.length);

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
                        <Button onClick={() => deleteProduct(ID)} autoFocus>
                            Yes
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>


            <div className="right-cont">
                <div className="dashboard-heading">
                    <div className="block">
                        <h4>Product</h4>
                        <br />
                        <p>StyleME</p>
                        <Link to="/admin/product/addProduct" style={{ position: 'absolute', left: '1200px', top: '70px' }} > <Button variant="contained" color="success" >
                            Add Product
                        </Button></Link>
                        <p>Total Products : {pro.length}</p>
                    </div>
                </div>


                <div class="dashboard-heading">

                    <div class="container">
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 850 }} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow sx={{ backgroundColor: 'grey' }}>
                                    <TableCell sx={{ color: 'white' }}>sr no </TableCell>
                                        <TableCell sx={{ color: 'white' }}>Product ID </TableCell>
                                        <TableCell sx={{ color: 'white' }} align="right">Img</TableCell>
                                        <TableCell sx={{ color: 'white' }} align="right">Name</TableCell>
                                        <TableCell sx={{ color: 'white' }} align="right">catg</TableCell>
                                        <TableCell sx={{ color: 'white' }} align="right">type</TableCell>
                                        <TableCell sx={{ color: 'white' }} align="right">Price</TableCell>
                                        <TableCell sx={{ color: 'white' }} align="right">Action</TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>

                                    {currentPosts && currentPosts.map((pro, index) => {
                                        return (<>


                                            <TableRow key={index}>
                                            <TableCell component="th" scope="row">{index+1}</TableCell>
                                                <TableCell component="th" scope="row">{pro._id}</TableCell>
                                                <TableCell component="th" scope="row"><img src={pro.img1} style={{ width: '40px' }} /></TableCell>
                                                <TableCell component="th" scope="row">{pro.name}</TableCell>
                                                <TableCell component="th" scope="row">{pro.category}</TableCell>
                                                <TableCell component="th" scope="row">{pro.type}</TableCell>
                                                <TableCell align="right">&#8377;{pro.price}</TableCell>
                                                <TableCell align="right"><Link to={`/admin/product/update/${pro._id}`}> <button id="edit">Edit</button></Link></TableCell>
                                            </TableRow>
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

    function deleteProduct(id) {
        console.log(ID);
        axios.delete(`http://localhost:4000/api/v1/admin/product/delete/${id}`, { withCredentials: true }).then((response) => {
            console.log(response.data);

            axios.get('http://localhost:4000/api/v1/products').then((response) => {
                setPost(response.data.product);
                console.log(response.data.product);
            });
        })
        handleClose()
    }
}
