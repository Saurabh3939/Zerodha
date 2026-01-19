import React from "react";

function Awards() {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-6 p-5'>
          <img src='media/images/largestBroker.svg' alt='broker' />
        </div>
        <div className='col-6 p-5 mt-5'>
          <h1>Largest stock broker in india</h1>
          <p className='mb-5'>
            2+ million zerodha clients contribute to over 15% of all retail
            <br />
            volumes in india daily by trading and investing in:
          </p>
          <div className='row'>
            <div className='col-6'>
              <ul>
                <li>
                  <p>Future And Options</p>
                </li>
                <li>
                  <p>Commodity deritives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className='col-6'>
              <ul>
                <li>
                  <p> Stock & IPOs </p>
                </li>
                <li>
                  <p> Direct mutul funds </p>
                </li>
                <li>
                  <p> Bonds and Goverment securities </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
