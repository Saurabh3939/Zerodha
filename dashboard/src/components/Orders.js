import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <div className='orders'>
      <div className='no-orders'>
        <p>You Haven't Placed Any Orders Today</p>
        <Link to={"/"} className='btn'>
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Orders;
