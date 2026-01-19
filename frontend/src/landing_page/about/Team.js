import React from "react";

function Team() {
  return (
    <div className='container mt-5 p-5'>
      <div className='row mb-5 text-center'>
        <h1 className='fs-3'>People</h1>
      </div>
      <div className='row' id='team-img'>
        <div className='col-6  ceo-img text-center'>
          <img src='media/images/nithinKamath.jpg' alt='ceo' />
          <h6 className='p-2' id='founder-name'>
            Nithin Kamath
          </h6>
          <p className='text-muted' id='founder'>
            Founder, CEO
          </p>
        </div>
        <div className='col-6' id='ceo-info'>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            <br />
            hurdles he faced during his decade long stint as a trader. Today,
            <br />
            Zerodha has changed the landscape of the Indian broking industry.
            <br />
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            <br />
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on &nbsp;
            <a href='http://' target='_blank' rel='noopener noreferrer'>
              Homepage / TradingQnA / Twitter
            </a>
          </p>
        </div>
      </div>
      <div className='row' id='team-members'>
        <div className='col' id='team-1'>
          <img src='media/images/Nikhil.jpg' alt='nikhil' />
          <h5>Nikhil Kamath</h5>
          <p>Co-founder & CFO</p>
          <img src='media/images/Hanan.jpg' alt='nikhil' />
          <h5>Hanan Delvi</h5>
          <p>CCO</p>
          <img src='media/images/Austin.jpg' alt='nikhil' />
          <h5>Austin Prakesh</h5>
          <p>Director Strategy</p>
        </div>
        <div className='col' id='team-2'>
          <img src='media/images/Kailash.jpg' alt='nikhil' />
          <h5>Dr. Kailash Nadh</h5>
          <p>CTO</p>
          <img src='media/images/Seema.jpg' alt='nikhil' />
          <h5>Seema Patil</h5>
          <p>Director</p>
        </div>
        <div className='col' id='team-3'>
          <img src='media/images/Venu.jpg' alt='nikhil' />
          <h5>Venu Madhav</h5>
          <p>COO</p>
          <img src='media/images/Karthik.jpg' alt='nikhil' />
          <h5>Karthik Rangappa</h5>
          <p>Chief of Education</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
