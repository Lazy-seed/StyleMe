import React, { useState } from 'react'
import axios from "axios";
import './add_products.css'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function AddProduct() {

    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [og_price, setOg_Price] = useState('');
    const [catg, setCatg] = useState('');
    const [Type, setType] = useState('');
    const [stock, setStock] = useState('')
    const [homeFeatured, sethomeFeatured] = useState(0)

    const [img1, setImg1] = useState('');
    const [img2, setImg2] = useState('');
    const [img3, setImg3] = useState('');
    const [img4, setImg4] = useState('');
    console.log(name);
    return (
        <>
            <div class="right-cont">

                <div class="product-a">

                    <div class="cont-product">
                        <h2>ADD PRODUCT </h2>

                        <Box component="form"
                            sx={{ '& .MuiTextField-root': { m: 2, width: '25ch' }, }} noValidateautoComplete="off" style={{ padding: '10px', margin: '30px 40px' }}>

                            <h3 style={{ padding: '0px' }}>Product Name : </h3>
                            <input type="text" className="user_detail_input " name="name" onChange={(e) => { setName(e.target.value) }} style={{ width: '32%', marginRight: '20px' }} />


                            <div className='radio_container'>

                                <div className='catg_box'>  <h4 htmlFor="fname" id="lbl">Category: </h4>
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

                                <div className='catg_box'><h4 htmlFor="fname" id="lbl">Type: </h4>
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

                                <div className='catg_box'><h4 htmlFor="fname" id="lbl">Featured home:  </h4>
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
                            <input type="text" className="user_detail_input " name="name" onChange={(e) => setDesc(e.target.value)} style={{ width: '45%', marginRight: '20px' }} />

                            <div className="c1" style={{ display: 'flex', alignItems: 'center' }} >
                                <div><h3 style={{ width: '130px' }}>orignal price : </h3>
                                    <input type="text" className="user_detail_input" name="ogprice" id="ogprice" onChange={(e) => setOg_Price(e.target.value)} style={{ width: '100%' }} /></div>
                                <div><h3 style={{ width: '130px', marginLeft: '20px' }}>Price : </h3>
                                    <input type="text" className="user_detail_input" name="dcprice" id="dcprice" onChange={(e) => setPrice(e.target.value)} style={{ width: '100%', marginLeft: '20px' }} /></div>
                            </div>
                            <h6 id="incorrect">Error</h6>
                            <h4 style={{ paddingTop: '20px' }}>Product Image1 : </h4>
                            <input type="text" className="user_detail_input " name="name" onChange={(e) => setImg1(e.target.value)} style={{ width: '45%', marginRight: '20px' }} />
                            <h4 style={{ paddingTop: '20px' }}>Product Image2 : </h4>
                            <input type="text" className="user_detail_input " name="name" onChange={(e) => setImg2(e.target.value)} style={{ width: '45%', marginRight: '20px' }} />
                            <h4 style={{ paddingTop: '20px' }}>Product Image3 : </h4>
                            <input type="text" className="user_detail_input " name="name" onChange={(e) => setImg3(e.target.value)} style={{ width: '45%', marginRight: '20px' }} />
                            <h4 style={{ paddingTop: '20px' }}>Product Image4 : </h4>
                            <input type="text" className="user_detail_input " name="name" onChange={(e) => setImg4(e.target.value)} style={{ width: '45%', marginRight: '20px' }} />


                            <Stack direction="row" spacing={2} style={{ margin: '20px 30px' }}>
                                <Button variant="contained" color="success" onClick={createProduct}  style={{ padding: '10px 60px' }}>
                                    ADD
                                </Button>
                                <Button variant="outlined" color="error" onClick={clear} >
                                    Clear
                                </Button>
                            </Stack>
                            
                        </Box>

                    </div>
                </div>
            </div>
        </>
    )


    function createProduct() {
        let err_msg = document.getElementById('incorrect');

          var ogprice = document.getElementsByName('ogprice')[0].value
        var dcprice = document.getElementsByName('dcprice')[0].value
        ogprice = parseFloat(ogprice);
        dcprice = parseFloat(dcprice);
   
        if (name === '' || desc === '' || price === '' || og_price === '' || Type === '' || catg === '') {
            return window.alert("enter all fields")
        }

       console.log(ogprice + dcprice);
        if( ogprice < dcprice){
            err_msg.style.display = 'block';
            err_msg.innerHTML = 'invalid orignal price and discount price';
            return  null;
        }
        err_msg.style.display = 'none';

        // return null


        const product = {
            name: name,
            desc: desc,
            price: price,
            og_price: og_price,
            type: Type,
            category: catg,
            stock: 10,
            img1: img1,
            img2: img2,
            img3: img3,
            img4: img4,
            homeFeatured: homeFeatured

        }

        axios.post("http://localhost:4000/api/v1/product/new", product, { withCredentials: true }).then((response) => {
            console.log(response.data)
            if (response.data.success) {
                window.location.reload();
            }
        })

    }


    function clear() {
        window.location.reload();
    }
}