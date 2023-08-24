import React, { useState, useEffect } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import ReactStars from "react-rating-stars-component";
import axios from "axios";
import { Link } from 'react-router-dom'
import './allProducts.css'
import Lodr from '../../loader/Lodr'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import { useParams } from 'react-router-dom'

function setScroll() {
    console.log("setScroll has run");
    window.scrollTo(0, 0);
}

export default function Mens(props) {
    const [Typevalue, setTypeValue] = useState('all');
    const [Pricevalue, setPriceValue] = useState('price_filter_off');
    const [Min_price, setMin_price] = useState(0);
    const [Max_price, setMax_price] = useState(9999999);
    const [ReturnValue, setReturnValue] = useState(true);
    const [DropDown, setDropDown] = useState('featured');

    const handleChangeDropDown = (event) => {
        setDropDown(event.target.value);
    };
    const handleChangeTypeValue = (event) => {
        setTypeValue(event.target.value);
        let rr = [];
        if (event.target.value === 'all') {
            for (let i = 0, j = 0; i < pro.length; i++) {

                rr[j] = pro[i];
                j++;
            }
        }
        else {
            for (let i = 0, j = 0; i < pro.length; i++) {
                if (pro[i].type === event.target.value) {
                    rr[j] = pro[i];
                    j++;
                }
            }
        }

        setNoOfItems(rr.length);
    };

    const handleChangePriceValue = (event) => {
        setPriceValue(event.target.value);
        // let rr = [];

        // for (let i = 0, j = 0; i < pro.length; i++) {

        //     if (pro[i].price >= Min_price && pro[i].price <= Max_price) {
        //         if (pro[i].type === event.target.value) {
        //             console.log(pro[i]);
        //             rr[j] = pro[i];
        //             j++;
        //         }
        //     }
        //     if (pro[i].price >= Min_price && pro[i].price <= Max_price) {
        //         console.log(pro[i]);
        //         rr[j] = pro[i];
        //         j++;
        //     }
        // }


        // console.log(rr.length);
        // setNoOfItems(rr.length);
    };
    const { catg } = useParams();

    const [pro, setPost] = useState(null);
    const [load, setLoad] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPrePage, setPostPrePage] = useState(12);
    const [noOfItems, setNoOfItems] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:4000/api/v1/products').then((response) => {
            setScroll()
            // setPost(response.data.product);
            console.log(response.data.product);
            setLoad(false);

            let pp = [];
            for (let i = 0, j = 0; i < response.data.product.length; i++) {
                if (response.data.product[i].category === catg) {
                    pp[j] = response.data.product[i];
                    j++;
                }
            }
            setPost(pp);
            setNoOfItems(pp.length);
            console.log(pp);
        });
    }, []);

    if (!pro) {
        return null;
    }

    const totalPages = Math.ceil(noOfItems / 12 );
    let noOfPages = []
    for (let i = 0; i < totalPages; i++) {
        noOfPages[i] = i + 1;

    }

    const lastPostIndex = currentPage * postPrePage;
    const firstPostIndex = lastPostIndex - postPrePage;
    const currentPosts = pro.slice(firstPostIndex, lastPostIndex);

    // console.log(pro.length);

    return (
        <>
            <div className='products_main_div'>
                {/* left container------------------------------------------------------------------------------------------- */}
                <div className='products_left_div'>
                    <h1>Filters</h1>
                    <hr />
                    {/* drop down ---------- */}
                    <FormControl sx={{ m: 1, minWidth: 180, margin: '20px 30px' }} size="small">
                        <InputLabel id="demo-select-small">Shot By</InputLabel>
                        <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={DropDown}
                            label="Shot By"
                            onChange={handleChangeDropDown}>


                            <MenuItem value='featured' onClick={() => { window.location.reload() }}>Featured</MenuItem>
                            <MenuItem value='n-o'>New to Old</MenuItem>
                            <MenuItem value='h-l'>price--High to Low</MenuItem>
                            <MenuItem value='l-h'>price--Low to High</MenuItem>
                        </Select>
                    </FormControl>

                    <hr style={{ width: '80%', margin: 'auto' }} />

                    <FormControl style={{ height: '200px', margin: '0 40px', marginTop: '20px' }}>
                        <FormLabel id="demo-controlled-radio-buttons-group" >Type</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group1"
                            value={Typevalue}
                            onChange={handleChangeTypeValue} sx={{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 18,
                                },
                            }} >
                            <FormControlLabel value="all" control={<Radio />} label="All" />
                            <FormControlLabel value="shirt" control={<Radio />} label="Shirt" />
                            <FormControlLabel value="hoodie" control={<Radio />} label="Hoodies" />
                            <FormControlLabel value="pant" control={<Radio />} label="Pant" />
                            <FormControlLabel value="tshirt" control={<Radio />} label="T-shirt" />
                        </RadioGroup>
                    </FormControl>
                    <hr style={{ width: '80%', margin: 'auto' }} />

                    <FormControl style={{ height: '200px', margin: '0 40px', marginTop: '20px' }} >
                        <FormLabel id="demo-controlled-radio-buttons-group" >Price</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group2"
                            value={Pricevalue}
                            onChange={handleChangePriceValue} sx={{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 18,
                                },
                            }}>
                            <FormControlLabel value="price_filter_on1" onClick={() => { setMin_price(0); setMax_price(499) }} control={<Radio />} label="₹0 - ₹499" />
                            <FormControlLabel value="price_filter_on2" onClick={() => { setMin_price(500); setMax_price(799) }} control={<Radio />} label="₹500 - ₹799" />
                            <FormControlLabel value="price_filter_on3" onClick={() => { setMin_price(800); setMax_price(1099) }} control={<Radio />} label="₹800 - ₹1099" />
                            <FormControlLabel value="price_filter_on4" onClick={() => { setMin_price(1100); setMax_price(999999) }} control={<Radio />} label="< ₹1200 " />
                            <FormControlLabel value="price_filter_off" onClick={() => { setMin_price(0); setMax_price(9999999) }} control={<Radio />} label="All " />
                        </RadioGroup>
                    </FormControl>

                    <hr style={{ width: '80%', margin: 'auto' }} />
                </div>

                {/* right container------------------------------------------------------------------------------------------- */}
                <div className='products_right_div'>
                    <div className="product_container" >

                        <h1>{catg} </h1>
                        <div className="products_wrap">

                            {/* condictind of SHORT BY  featured*/}
                            {DropDown === 'featured' && <>

                                {currentPosts && currentPosts.map((pro) => {
                                    // check catg
                                    if (pro.category === catg) {

                                        // all products || Type value
                                        if (Typevalue === 'all' | pro.type === Typevalue) {

                                            // price filter products || price value

                                            if (pro.price >= Min_price && pro.price <= Max_price) {
                                                return (
                                                    <Link to={`/category/${catg}/product/${pro._id}`} key={pro._id}>
                                                        <div className="product_cart"  >
                                                            <img src={pro.img1} alt="" />
                                                            <div className="product_info">
                                                                <div className="product_title">{pro.name}</div>
                                                                <div className='rating_star_wrap'>
                                                                    <span className="review_star"><ReactStars count={5} size={15} activeColor="#ffd700" value={pro.ratings} edit={false} /></span>
                                                                    <span className="product_review">{pro.numOfReviews} Reviews</span></div>
                                                                <div className="products_price">₹{pro.price}
                                                                    <span className="cut_price">₹{pro.og_price}</span> <span className="off_price">({Math.round(100 - (pro.price / pro.og_price) * 100)}%off)</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                )
                                            }
                                        }
                                    }
                                })
                                }
                            </>}

                            {/* condictind of SHORT BY  high to low*/}
                            {DropDown === 'h-l' && <>
                                {currentPosts && currentPosts.sort((a, b) => b.price - a.price).map((pro) => {
                                    // check catg
                                    if (pro.category === catg) {

                                        // all products || Type value
                                        if (Typevalue === 'all' | pro.type === Typevalue) {

                                            // price filter products || price value

                                            if (pro.price >= Min_price && pro.price <= Max_price) {
                                                return (
                                                    <Link to={`/category/${catg}/product/${pro._id}`} key={pro._id}>
                                                        <div className="product_cart"  >
                                                            <img src={pro.img1} alt="" />
                                                            <div className="product_info">
                                                                <div className="product_title">{pro.name}</div>
                                                                <div className='rating_star_wrap'>
                                                                    <span className="review_star"><ReactStars count={5} size={15} activeColor="#ffd700" value={pro.ratings} edit={false} /></span>
                                                                    <span className="product_review">{pro.numOfReviews} Reviews</span></div>
                                                                <div className="products_price">₹{pro.price}
                                                                    <span className="cut_price">₹{pro.og_price}</span> <span className="off_price">({Math.round(100 - (pro.price / 10))}%off)</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                )
                                            }
                                        }
                                    }
                                })
                                }
                            </>}

                            {/* condictind of SHORT BY  low to high*/}
                            {DropDown === 'l-h' && <>
                                {currentPosts && currentPosts.sort((a, b) => a.price - b.price).map((pro) => {
                                    // check catg
                                    if (pro.category === catg) {

                                        // all products || Type value
                                        if (Typevalue === 'all' | pro.type === Typevalue) {

                                            // price filter products || price value

                                            if (pro.price >= Min_price && pro.price <= Max_price) {
                                                return (
                                                    <Link to={`/category/${catg}/product/${pro._id}`} key={pro._id}>
                                                        <div className="product_cart"  >
                                                            <img src={pro.img1} alt="" />
                                                            <div className="product_info">
                                                                <div className="product_title">{pro.name}</div>
                                                                <div className='rating_star_wrap'>
                                                                    <span className="review_star"><ReactStars count={5} size={15} activeColor="#ffd700" value={pro.ratings} edit={false} /></span>
                                                                    <span className="product_review">{pro.numOfReviews} Reviews</span></div>
                                                                <div className="products_price">₹{pro.price}
                                                                    <span className="cut_price">₹{pro.og_price}</span> <span className="off_price">({Math.round(100 - (pro.price / 10))}%off)</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                )
                                            }
                                        }
                                    }
                                })
                                }
                            </>}

                            {/* condictind of SHORT BY  low to high*/}
                            {DropDown === 'n-o' && <>
                                {currentPosts && currentPosts.reverse().map((pro) => {
                                    // check catg
                                    if (pro.category === catg) {

                                        // all products || Type value
                                        if (Typevalue === 'all' | pro.type === Typevalue) {

                                            // price filter products || price value

                                            if (pro.price >= Min_price && pro.price <= Max_price) {
                                                return (
                                                    <Link to={`/category/${catg}/product/${pro._id}`} key={pro._id}>
                                                        <div className="product_cart"  >
                                                            <img src={pro.img1} alt="" />
                                                            <div className="product_info">
                                                                <div className="product_title">{pro.name}</div>
                                                                <div className='rating_star_wrap'>
                                                                    <span className="review_star"><ReactStars count={5} size={15} activeColor="#ffd700" value={pro.ratings} edit={false} /></span>
                                                                    <span className="product_review">{pro.numOfReviews} Reviews</span></div>
                                                                <div className="products_price">₹{pro.price}
                                                                    <span className="cut_price">₹{pro.og_price}</span> <span className="off_price">({Math.round(100 - (pro.price / 10))}%off)</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                )
                                            }
                                        }
                                    }
                                })
                                }
                            </>}

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
                                <li><a href="#" class="next">&raquo;</a></li>
                            </ul>
                        </div>
                    </div>
                    {
                        load && <Lodr />
                    }
                </div>
            </div>
        </>
    )
}
