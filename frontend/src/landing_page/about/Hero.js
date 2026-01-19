import React from "react";

function Hero() {
  return (
    <div className='container p-3 mt-5'>
      <div className='row mb-5  text-center p-5'>
        <h1 className='fs-3'>
          We pioneered the discount broking model in India. <br /> Now, we are
          breaking ground with our technology.
        </h1>
      </div>
      <hr />
      <div className='row mt-5 p-3' id='about-row'>
        <div className='col-6 mt-5 ' id='about-col-1'>
          <p>
            We kick-started operations on the 15th of August, 2010 <br />
            with the goal of breaking all barriers that traders and <br />
            investors face in India in terms of cost, support, <br /> and
            technology. We named the company Zerodha, a <br /> combination of
            Zero and "Rodha", the Sanskrit word for <br />
            barrier.
          </p>
          <p>
            Today, our disruptive pricing models and in-house <br /> technology
            have made us the biggest stock broker in <br /> India.
          </p>
          <p>
            Over 1.6+ crore clients place billions of orders every year <br />
            through our powerful ecosystem of investment <br /> platforms,
            contributing over 15% of all Indian retail <br /> trading volumes.
          </p>
        </div>
        <div className='col-6 mt-5  about-col-2' id='about-link'>
          <p>
            In addition, we run a number of popular open online <br />
            educational and community initiatives to empower retail <br />
            traders and investors.
          </p>
          <p>
            <a href='http://' target='_blank' rel='noopener noreferrer'>
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested <br /> in several
            fintech startups with the goal of growing the <br /> Indian capital
            markets.
          </p>
          <p>
            And yet, we are always up to something new every day. <br /> Catch
            up on the latest updates on our &nbsp;
            <a href='http://' target='_blank' rel='noopener noreferrer'>
              blog
            </a>
            &nbsp; or see what <br /> the media is &nbsp;
            <a href='http://' target='_blank' rel='noopener noreferrer'>
              saying about us
            </a>
            &nbsp; or learn more about our <br /> business and product &nbsp;
            <a href='http://' target='_blank' rel='noopener noreferrer'>
              philosophies.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
