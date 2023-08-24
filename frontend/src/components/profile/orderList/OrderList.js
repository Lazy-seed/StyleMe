/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react'
import axios from "axios";
import './order.css'
import { Link } from 'react-router-dom';

export default function OrderList() {

  const [ordersID, setOrderID] = useState(null);
  const [productID, setProductID] = useState(null);
  const [orders, setOrders] = useState(null);
  const [ordersItems, setOrdersItems] = useState(null);
  const [date, setDate] = useState(null)
  useEffect(() => {
    axios.get("http://localhost:4000/api/v1/me/bag/orders", { withCredentials: true }).then((response) => {
      // console.log(response.data.orderItems);
      // setDate(response.data.orderItems[0].items[0].OrderDate.toString());

      setOrders(response.data.orderItems);
      setOrdersItems(response.data.orderItems.items);
    }).catch((err) => {
      console.log(err);
    })
  }, []);

  if (!orders) {
    return (null)
  }

  return (
    <>
      <div class="profile_info">

        <div className="order_container">

          {orders && orders.reverse().map((orders) => {
            const items = orders.items;

            return (<>
              <div style={{ display: 'flex', marginTop: '20px' }}>{orders.items[0].OrderDate.slice(0, 10)}      <p style={{ marginLeft: '40px' }}>Total Price : ₹{orders.totalPrice}</p></div>
              {
                items && items.reverse().map((items) => {
                  return (
                    <>  <Link to={`/me/order/details/${orders._id}/${items.productID}`} >
                      <div className='order_box' key={items.productID}>
                        <div className='order_img'> <img src={items.img} /></div>
                        <div className='order_name'>{items.name}</div>
                        <div className='order_price' >₹{items.price}</div>

                        {items.deliveryStatus === 'processed' &&
                          <div className='order_status' style={{ color: 'black', fontWeight: '600' }}>{items.deliveryStatus}</div>}

                        {items.deliveryStatus === 'delivered' &&
                          <div className='order_status' style={{ color: 'green', fontWeight: '600' }}>{items.deliveryStatus}</div>}

                        {items.deliveryStatus === 'cancel' &&
                          <div className='order_status' style={{ color: 'red', fontWeight: '600' }}>{items.deliveryStatus}</div>}

                        {items.deliveryStatus === 'route' &&
                          <div className='order_status' style={{ color: 'orange', fontWeight: '600' }}>{items.deliveryStatus}</div>}

                        {items.deliveryStatus === 'arrived' &&
                          <div className='order_status' style={{ color: 'orange', fontWeight: '600' }}>{items.deliveryStatus}</div>}

                      </div></Link>
                    </>)

                })}
              <hr style={{ height: "1px", backgroundColor: "black" }} />

            </>
            )

          })}

          {/* {orders.} */}



        </div>
      </div>

    </>
  )
}
