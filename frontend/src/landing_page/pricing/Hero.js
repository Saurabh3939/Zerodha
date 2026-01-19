import React from "react";

function Hero() {
  return (
    <div className='container mt-5  text-center'>
      <div className='row mt-5 p-5'>
        <h1 className='text-center mt-5'>Charges</h1>
        <h5 className='text-center text-muted mt-3 mb-5'>
          List of all charges and taxes
        </h5>
      </div>
      <div className='row mt-5 p-5' id='pricing-row'>
        <div className='col mt-5'>
          <img src='media/images/pricing0.svg' alt='0.png' />
          <h1 className='fs-2'>Free equity delivery</h1>
          <p className='text-muted'>
            All equity delivery investments (NSE, BSE), <br /> are absolutely
            free — ₹ 0 brokerage.
          </p>
        </div>
        <div className='col mt-5'>
          <img src='media/images/price20.svg' alt='0.png' />
          <h1 className='fs-2'>Intraday and F&O trades</h1>
          <p className='text-muted'>
            Flat ₹ 20 or 0.03% (whichever is lower) per <br /> executed order on
            intraday trades across <br /> equity, currency, and commodity
            trades. Flat <br />
            ₹20 on all option trades.
          </p>
        </div>
        <div className='col mt-5'>
          <img src='media/images/pricing0.svg' alt='0.png' />
          <h1 className='fs-2'>Free direct MF</h1>
          <p className='text-muted'>
            All direct mutual fund investments are <br /> absolutely free — ₹ 0
            commissions & DP <br /> charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
