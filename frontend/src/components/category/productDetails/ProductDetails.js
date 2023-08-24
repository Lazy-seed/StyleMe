import React, { useState, useEffect } from 'react'
import axios from "axios";
import './ProductDetails.css'
import { useParams } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";
import { Alert } from '@mui/material';
import Lodr from '../../loader/Lodr'

function setScroll(params) {
    console.log("setScroll has run");
    window.scrollTo(0, 0);
}


export default function ProductDetails() {


    const { id } = useParams();
    const productURL = `http://localhost:4000/api/v1/product/${id}`

    // see img
    const [seeImg, setSeeImg] = useState(1);

    // alerts
    const [alert, setAlert] = useState(false);
    const [warning, setWarning] = useState(false);

    // review form
    const [rate_btn, setRate_btn] = useState(false);
    const [comment, setComment] = useState('')
    const [starValue, setStarValue] = useState(0);
    const [itemSize, setItemSize] = useState('');

    // review data
    const [pro, setPro] = useState(null);
    const [reviews, setReviews] = useState(null);

    // login check
    const [Login, setLogin] = useState(false);
    useEffect(() => {
        axios.get("http://localhost:4000/api/v1/me", { withCredentials: true }).then((response) => {
            setLogin(true);

        }).catch((err) => {
            setLogin(false);
        })

        axios.get(productURL, { withCredentials: true }).then((response) => {
            console.log(response.data.product);
            setPro(response.data.product);
            setReviews(response.data.product.Reviews);
        }).catch((err) => {
            console.log(err.response.data.message);
        })
        setScroll()

    }, []);


    setTimeout(() => {
        setAlert(false);
        setWarning(false);
    }, 5000);


    if (!pro) return (<><Lodr /></>);

    return (
        <>

            <div className='alert_box'>
                {alert && <Alert severity="success">The product has added — check it out!</Alert>}
            </div>

            <div className='alert_box'>
                {warning && <Alert severity="error">Select <b>Size</b> of product</Alert>}
            </div>

            <div className="container_productDetails" >

                <div className="producd_wrap">
                    {/* <!-- left container --> */}

                    <div className="left_container_outer">
                        <div className="left_img_box">
                            {seeImg === 1 && <img src={pro.img1} alt="" />}
                            {seeImg === 2 && <img src={pro.img2} alt="" />}
                            {seeImg === 3 && <img src={pro.img3} alt="" />}
                            {seeImg === 4 && <img src={pro.img4} alt="" />}
                        </div>

                        <hr style={{ width: '70%', margin: 'auto', marginBottom: '10px' }} />
                        <div className='mini-img'>
                            <img src={pro.img1} alt="" onClick={() => setSeeImg(1)} />
                            <img src={pro.img2} alt="" onClick={() => setSeeImg(2)} />
                            <img src={pro.img3} alt="" onClick={() => setSeeImg(3)} />
                            <img src={pro.img4} alt="" onClick={() => setSeeImg(4)} />
                        </div>
                    </div>

                    {/* <!-- right container --> */}
                    <div className="right_container">
                        <div className="product_detail">
                            <h3 id="product_name">{pro.name}</h3>
                            <h4 id="product_desc">{pro.desc}</h4>
                            <div className="product_rating">
                                <span id="star_number">{Math.round(pro.ratings)} <ReactStars count={1} size={20} value={1} activeColor="#ffd700" /></span> | <span id="noOfratings">{pro.numOfReviews} Reviews</span>
                            </div>
                        </div>
                        <hr />
                        <div className="product_price">
                            <div id="price"> ₹ {pro.price} </div>
                            <div id="cut_price">MRP ₹{pro.og_price}</div>
                            <div id="off">({Math.round(100-(pro.price /pro.og_price)*100)}% off)</div>
                            <h4 id="include_all_taxes" style={{ marginLeft: '10px' }}> include all taxes</h4>
                        </div>
                        <h2 id="size_text">SELECT SIZE </h2>
                        <div className="product_size">
                            <label>
                                <input id='size_radio' type="radio" name="test" value="S" />
                                <div id="size" onClick={() => setItemSize("S")}>S</div>
                            </label>
                            <label>
                                <input id='size_radio' type="radio" name="test" value="M" />
                                <div id="size" onClick={() => setItemSize("M")}>M</div>
                            </label>
                            <label>
                                <input id='size_radio' type="radio" name="test" value="L" />
                                <div id="size" onClick={() => setItemSize("L")} >L</div>
                            </label>
                        </div>

                        <div className="buttons">
                            {(!Login) && <button id="add_to_bag" onClick={() => window.alert("please login")} >ADD TO BAG</button>}

                            {(Login) && <button id="add_to_bag" onClick={addBag} >ADD TO BAG</button>}
                        </div>

                        <hr />

                        {/* <div className="delivery">
                            <h3>Delivery options</h3>
                            <input type="text" placeholder="Enter pincode" />
                            <button id="check_btn">ckeck</button>
                            <h6>
                                Please enter PIN code to check deluvery time & pay on Delivery
                                Available
                            </h6>
                            <div id="delivery"></div>
                        </div> */}

                        {(Login) && <a href='#rateBox' id='rate_btn' onClick={rate_onOff} >Review Product</a>}
                        {(!Login) && <button id='rate_btn' onClick={() => window.alert("please login")} >Rate</button>}

                    </div>
                </div>


                <hr id="hr" />


                {/* <!-- bottom container review --> */}

                {/* review form */}

                {rate_btn && <><div className='review_form_container' id="rateBox">
                    <ReactStars readonly={true} count={5} size={25} value={starValue} activeColor="#ffd700" onChange={(newRating) => setStarValue(newRating)} />
                    <textarea id='review_comment' placeholder='comment....' onChange={(e) => setComment(e.target.value)} />
                    <button id='review_submit' onClick={submit_review} >Submit</button>
                </div></>}



                <div className="reviews_container">
                    <h1>Reviews</h1>
                    <div className='flex_reviews_container'>
                        {reviews && reviews.map((review) => {
                            const d = new Date(review.reviewAt).getDate() + '/' + new Date(review.reviewAt).getMonth() + 1 + '/' + new Date(review.reviewAt).getFullYear();
                            return (
                                <>
                                    <div className="review_box">
                                        <h4>{review.name}</h4>
                                        <h3>{review.comment}</h3>
                                        <span id='review_rating_star'> {d} </span>
                                        <div id="star"><ReactStars readonly={true} count={5} size={20} value={review.rating} edit={false} activeColor="#ffd700" /></div>
                                    </div>
                                </>
                            )
                        })}
                    </div></div>
            </div>
        </>
    )


    // add to bag
    function addBag(e) {
        axios.get("http://localhost:4000/api/v1/me", { withCredentials: true }).then((response) => {
            setLogin(true);
        }).catch((err) => {
            setLogin(false);
        })

        if (itemSize === '') {
            setWarning(true);
            return console.log("select size")
        }
        e.preventDefault();
        axios.post("http://localhost:4000/api/v1/bag/new", {
            "productID": id,
            "name": pro.name,
            "price": pro.price,
            "img": pro.img1,
            "quantity": 1,
            "size": itemSize,
            "og_price":pro.og_price,
        }, { withCredentials: true }).then((response) => {
            console.log(response.data);
            setAlert(true);
            window.location.replace('/me/bag')

        });
    }


    // rate btn
    function rate_onOff() {
        if (rate_btn) {
            setRate_btn(false)
        } else {
            setRate_btn(true)
        }
    }

    // submit review
    function submit_review() {
        if (!(comment.trim() === "")) {
            axios.put("http://localhost:4000/api/v1/product/review", {
                "productId": id,
                "comment": comment,
                "rating": starValue
            }, { withCredentials: true }).then((response) => {
                axios.get(productURL, { withCredentials: true }).then((response) => {
                    setRate_btn(false)
                    setReviews(response.data.product.Reviews);
                })
            })
            const l = (window.location.href)
            console.log(l);
            window.location.reload()
        }
        else {
            window.alert("review cannot be blank");
        }

    }
}