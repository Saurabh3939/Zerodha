import React from "react";

function Education() {
  return (
    <div className='container p-5 mt-5'>
      <div className='row mt-5 p-3'>
        <div className='col-6'>
          <img
            src='media/images/education.svg'
            alt='education'
            style={{ width: "80%" }}
          />
        </div>
        <div className='col-6'>
          <h2 className='mb-5'>Free and open market education</h2>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a
            style={{ textDecoration: "none" }}
            href='http://'
            target='_blank'
            rel='noopener noreferrer'
          >
            Varsity →
          </a>
          <p className='mt-5'>
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a
            style={{ textDecoration: "none" }}
            href='http://'
            target='_blank'
            rel='noopener noreferrer'
          >
            TradingQ&A →
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
