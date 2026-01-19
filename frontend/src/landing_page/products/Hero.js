import React from "react";

function Hero() {
  return (
    <div
      className='container mt-5 text-center border-bottom mb-5'
      id='product-hero'
    >
      <div className='row p-5 mt-5'>
        <h1 className='fs-2'>Zerodha Products</h1>
        <h5 className='mt-3 text-muted'>
          Sleek, modern, and intuitive trading platforms
        </h5>
        <p className='mt-3 text-muted mb-5'>
          Check out our &nbsp;
          <a href='http://' target='_blank' rel='noopener noreferrer'>
            investment offerings →
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
