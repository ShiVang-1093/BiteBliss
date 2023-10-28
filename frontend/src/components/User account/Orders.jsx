import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Orders = () =>{
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get('/api/orders')
            .then(res => {
                setOrders(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <h1>My Orders</h1>
            <ul>
                {orders.map(order => (
                    <li key={order.id}>
                        <p>Order ID: {order.id}</p>
                        <p>Order Date: {order.date}</p>
                        <p>Order Total: {order.total}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Orders;
