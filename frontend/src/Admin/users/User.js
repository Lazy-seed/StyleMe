/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react'
import axios from "axios";


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

// table
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../product/AdminList.css';
import './UserList.css';


function setScroll() {
    console.log("setScroll has run");
    window.scrollTo(0, 0);
}

export default function User() {

    const [users, setUsers] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPrePage, setPostPrePage] = useState(5);
    const [noOfItems, setNoOfItems] = useState(0);
    const [ID, setId] = useState('')
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
        axios.get('http://localhost:4000/api/v1/admin/allUsers').then((response) => {
            setUsers(response.data.user);
            console.log(response.data.user);
            setNoOfItems(response.data.user.length)
        });
    }, []);
    if (!users) {
        return null
    }

    
    const totalPages = Math.ceil(noOfItems / postPrePage);
    let noOfPages = []
    for (let i = 0; i < totalPages; i++) {
        noOfPages[i] = i + 1;

    }

    const lastPostIndex = currentPage * postPrePage;
    const firstPostIndex = lastPostIndex - postPrePage;
    const currentPosts = users.slice(firstPostIndex, lastPostIndex);
    return (

        <div class="right-cont">

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
        <Button onClick={() => deleteuser(ID)} autoFocus>
            Yes
        </Button>
    </DialogActions>
</Dialog>
</div>

            <div class="dashboard-heading">
                <div class="block">
                    <h4>All Users</h4>
                    <p>Total Users :  {users.length}</p>

                </div>
            </div>

            <div class="dashboard-heading">
                <div class="container">

                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 850 }} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow sx={{ backgroundColor: 'grey' }}>
                                    <TableCell sx={{ color: 'white' }}>User ID </TableCell>
                                    <TableCell sx={{ color: 'white' }}  >Name</TableCell>
                                    <TableCell sx={{ color: 'white' }} >email</TableCell>
                                    <TableCell sx={{ color: 'white' }} align="right">passowrd</TableCell>
                                    <TableCell sx={{ color: 'white' }} align="right">phone</TableCell>
                                    <TableCell sx={{ color: 'white' }} align="right">Action</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>


                                {currentPosts && currentPosts.map((users, index) => {
                                    return (<>


                                        <TableRow key={index}>
                                            <TableCell component="th" scope="row">{users._id}</TableCell>
                                            <TableCell component="th" scope="row">{users.name}</TableCell>
                                            <TableCell component="th" scope="row">{users.email}</TableCell>
                                            <TableCell component="th" scope="row" align="right">{users.password}</TableCell>
                                            <TableCell component="th" scope="row" align="right">{users.phone}</TableCell>
                                            <TableCell align="right"> <button id="edit" onClick={()=>{handleClickOpen(); setId(users._id)}}>delete</button></TableCell>
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
        </div >


    )

    function deleteuser(id) {
        console.log(ID);
        axios.delete(`http://localhost:4000/api/v1/deleteUser/${id}`, { withCredentials: true }).then((response) => {
            console.log(response.data);
        });
       window.location.reload();
        handleClose()
    }
}
