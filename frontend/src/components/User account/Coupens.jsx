import React, { useState, useEffect } from 'react';

const Coupens=()=> {
    const [coupens, setCoupens] = useState([]);

    useEffect(() => {
        // Fetch coupens data from API
        fetch('/api/coupens')
            .then(response => response.json())
            .then(data => setCoupens(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h2>Available Coupens</h2>
            <ul>
                {coupens.map(coupon => (
                    <li key={coupon.id}>
                        <h3>{coupon.title}</h3>
                        <p>{coupon.description}</p>
                        <p>Discount: {coupon.discount}%</p>
                        <p>Valid until: {coupon.validUntil}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Coupens;
