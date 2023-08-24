import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
import './add_products.css';
import Box from '@mui/material/Box';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Update() {


    useEffect(() => {
        const pros = axios.get(`http://localhost:4000/api/v1/product/${id}`).then((response) => {
            setPost(response.data.product);
            console.log(response.data.product);
        });
    }, []);

    const { id } = useParams();

    const [pro, setPost] = useState({});

    const [name, setName] = useState(pro.name);
    const [desc, setDesc] = useState(pro.desc);
    const [price, setPrice] = useState(pro.price);
    const [og_price, setOg_Price] = useState(pro.og_price);
    const [catg, setCatg] = useState(pro.category);
    const [Type, setType] = useState(pro.type);
    const [stock, setStock] = useState('')
    const [homeFeatured, sethomeFeatured] = useState(0)

    const [img1, setImg1] = useState('');
    const [img2, setImg2] = useState('');
    const [img3, setImg3] = useState('');
    const [img4, setImg4] = useState('');

    if (!pro) {
        return null
    }








    return (

        <>
            <div className="right-cont">

                <div className="product-a">

                    <div className="cont-product">
                        <h2>Update product </h2>

                        <Box component="form"
                            sx={{ '& .MuiTextField-root': { m: 2, width: '25ch' }, }} noValidateautoComplete="off" style={{ padding: '10px', margin: '30px 40px' }}>

                            <h3 style={{ padding: '0px' }}>Product Name : </h3>
                            <input type="text" className="user_detail_input" name="pname" defaultValue={pro.name} onChange={(e) => { setName(e.target.value) }} style={{ width: '32%', marginRight: '20px' }} />


                            <div className='radio_container'>

                                <div className='catg_box'><h4 htmlFor="fname" id="lbl">Category: {pro.category}</h4>
                                    <div className="categorey" onChange={(e) => setCatg(e.target.value)} >
                                        <span>
                                            <input type="radio" id="mens" name="catg" value="mens" />
                                            <label htmlFor="mens">Mens</label></span>

                                        <span><input type="radio" id="women" name="catg" value="womens" />
                                            <label htmlFor="women">Womens</label></span>

                                        <span><input type="radio" id="kids" name="catg" value="kids" />
                                            <label htmlFor="kids">Kids</label></span>

                                        <span><input type="radio" id="girl" name="catg" value="girls" />
                                            <label htmlFor="girl">Girls</label></span>

                                        <span><input type="radio" id="boy" name="catg" value="boys" />
                                            <label htmlFor="boy">Boys</label></span>
                                    </div>
                                </div>

                                <div className='catg_box'><h4 htmlFor="fname" id="lbl">Type: {pro.type}</h4>
                                    <div className="categorey" onChange={(e) => setType(e.target.value)}>
                                        <span>
                                            <input type="radio" id="shirt" name="type" value="shirt" />
                                            <label htmlFor="shirt">Shirt</label></span>

                                        <span><input type="radio" id="tshirt" name="type" value="tshirt" />
                                            <label htmlFor="tshirt">T-shirt</label></span>

                                        <span><input type="radio" id="pant" name="type" value="pant" />
                                            <label htmlFor="pant">Pant</label></span>

                                        <span><input type="radio" id="hoodies" name="type" value="hoodie" />
                                            <label htmlFor="hoodies">Hoodies</label></span>
                                    </div>
                                </div>

                                <div className='catg_box'><h4 htmlFor="fname" id="lbl">Featured home: {pro.homeFeatured} </h4>
                                    <div className="categorey" onChange={(e) => sethomeFeatured(e.target.value)}>
                                        <span>
                                            <input type="radio" id="yes" name="homeFeatured" value={1} />
                                            <label htmlFor="yes">yes</label></span>
                                        <span>
                                            <input type="radio" id="no" name="homeFeatured" value={0} />
                                            <label htmlFor="no">No</label></span>
                                    </div>
                                </div>

                            </div>

                            <h3 style={{ padding: '0px' }}>Description : </h3>
                            <input type="text" className="user_detail_input " name="pdec" defaultValue={pro.desc} onChange={(e) => setDesc(e.target.value)} style={{ width: '45%', marginRight: '20px' }} />

                            <div className="c1" style={{ display: 'flex', alignItems: 'center' }} >
                                <div><h3 style={{ width: '130px' }}>orignal price : </h3>
                                    <input type="number" className="user_detail_input" name="ogprice" id="ogprice" defaultValue={pro.og_price} onChange={(e) => setOg_Price(e.target.value)} style={{ width: '100%' }} /></div>
                                <div><h3 style={{ width: '130px', marginLeft: '20px' }}>Price : </h3>
                                    <input type="number" className="user_detail_input" name="dcprice" id="dcprice" defaultValue={pro.price} onChange={(e) => setPrice(e.target.value)} style={{ width: '100%', marginLeft: '20px' }} /></div>
                                    <h6 id="incorrect">Error</h6>
                            </div>



                            <h4 style={{ paddingTop: '20px' }}>Product Image1 : </h4>
                            <input type="text" className="user_detail_input " name="name" placeholder={pro.img1} onChange={(e) => setImg1(e.target.value)} style={{ width: '45%', marginRight: '20px' }} />
                            <h4 style={{ paddingTop: '20px' }}>Product Image2 : </h4>
                            <input type="text" className="user_detail_input " name="name" placeholder={pro.img2} onChange={(e) => setImg2(e.target.value)} style={{ width: '45%', marginRight: '20px' }} />
                            <h4 style={{ paddingTop: '20px' }}>Product Image3 : </h4>
                            <input type="text" className="user_detail_input " name="name" placeholder={pro.img3} onChange={(e) => setImg3(e.target.value)} style={{ width: '45%', marginRight: '20px' }} />
                            <h4 style={{ paddingTop: '20px' }}>Product Image4 : </h4>
                            <input type="text" className="user_detail_input " name="name" placeholder={pro.img4} onChange={(e) => setImg4(e.target.value)} style={{ width: '45%', marginRight: '20px' }} />




                            <div style={{ display: 'flex' }}>
                                <img src={pro.img1} style={{ width: '110px' }} />
                                <img src={pro.img2} style={{ width: '110px' }} />
                                <img src={pro.img3} style={{ width: '110px' }} />
                                <img src={pro.img4} style={{ width: '110px' }} />
                            </div>

                            <div>
                                <Stack direction="row" spacing={2} style={{ marginTop: '20px' }}>
                                    <Button variant="contained" color="success" onClick={update}>
                                        Update
                                    </Button>
                                    <Button variant="outlined" color="primary" onClick={clear} >
                                        Clear
                                    </Button>
                                    <Button variant="outlined" color="error" onClick={deleteProduct} >
                                        delete
                                    </Button>
                                </Stack>
                            </div>
                        </Box>
                    </div>
                </div>
            </div>
        </>
    )


    function update() {

        let err_msg = document.getElementById('incorrect');

        let pname = document.getElementsByName('pname')[0].value
        let pdec = document.getElementsByName('pdec')[0].value
        var ogprice = document.getElementsByName('ogprice')[0].value
        var dcprice = document.getElementsByName('dcprice')[0].value
        ogprice = parseFloat(ogprice);
        dcprice = parseFloat(dcprice);
        let ogpriceid = document.getElementById('ogprice').value;
        let dcpriceid = document.getElementById('dcprice').value;

        

        if (pname.trim()=='' || pdec.trim()==''|| ogpriceid.trim()=='' || dcpriceid.trim()=='') {
            return window.alert("enter all fields");
        }
        console.log(ogprice + dcprice);
        if( ogprice < dcprice){
            err_msg.style.display = 'block';
            err_msg.innerHTML = 'invalid orignal price and discount price';
            return  null;
        }

        // err_msg.style.display = 'none';
        // return  null;



        const imgUrl = [{ url: img1 }, { url: img2 }, { url: img3 }, { url: img4 }]
        
        const product = {
            name: name,
            desc: desc,
            price: price,
            og_price: og_price,
            type: Type,
            category: catg,
            stock: 10,
            homeFeatured: homeFeatured,
            // img: imgUrl
        }

        axios.put(`http://localhost:4000/api/v1/admin/product/update/${id}`, product, { withCredentials: true }).then((response) => {
            console.log(response.data)
            if (response.data.success === true) {
                window.location.replace('/admin/product');
            }
        })

    }


    function clear() {
        window.location.reload();
    }
    function deleteProduct(params) {
        console.log(id);
        axios.delete(`http://localhost:4000/api/v1/admin/product/delete/${id}`).then((response) => {
        });
        window.location.replace('http://localhost:3000/admin/product')
    }
}