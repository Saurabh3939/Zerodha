import React from "react";

function CreateTicket() {
  return (
    <div className='container'>
      <div className='row' id='open-support'>
        <div className='col-8' id='support-account'>
          <div>
            <span id='support-icon'>
              <i className='fa-solid fa-plus'></i>
            </span>
            <span id='text'>Account Opening</span>
            <span id='support-link'>
              <i className='fa-solid fa-angle-down'></i>
            </span>
          </div>
          <div>
            <span id='support-icon'>
              <i className='fa-solid fa-circle-radiation'></i>
            </span>
            <span id='text'>Your Zerodha Account</span>
            <span id='support-link'>
              <i className='fa-solid fa-angle-down'></i>
            </span>
          </div>
          <div>
            <span id='support-icon'>
              <i className='fa-brands fa-creative-commons-zero'></i>
            </span>
            <span id='text'>Kite</span>
            <span id='support-link'>
              <i className='fa-solid fa-angle-down'></i>
            </span>
          </div>
          <div>
            <span id='support-icon'>
              <i className='fa-solid fa-compact-disc'></i>
            </span>
            <span id='text'>Funds</span>
            <span id='support-link'>
              <i className='fa-solid fa-angle-down'></i>
            </span>
          </div>
          <div>
            <span id='support-icon'>
              <i className='fa-solid fa-circle-radiation'></i>
            </span>
            <span id='text'>Console</span>
            <span id='support-link'>
              <i className='fa-solid fa-angle-down'></i>
            </span>
          </div>
          <div>
            <span id='support-icon'>
              <i className='fa-solid fa-coins'></i>
            </span>
            <span id='text'>Coin</span>
            <span id='support-link'>
              <i className='fa-solid fa-angle-down'></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
