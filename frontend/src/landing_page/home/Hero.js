import React from "react";

function Hero() {
  return (
    <div className='container p-5 mb-5'>
      <div className='row text-center'>
        <img
          id='heroImg'
          src='media/images/landing.svg'
          alt='homeHero'
          className='mb-5'
        />
        <h1 className='mt-5 fs-2'>Invest in everything</h1>
        <p className='fs-5 text-muted mt-3'>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          className='p-2 btn btn-primary fs-5 mt-3'
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Hero;
