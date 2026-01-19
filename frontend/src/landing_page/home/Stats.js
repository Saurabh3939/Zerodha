import React from "react";

function Stats() {
  return (
    <div className='container stats-container p-3 mr-5'>
      <div className='row mx-5'>
        <div className='col-6 p-3'>
          <h1 className='fs-2 mb-5'>Trust with confidence</h1>
          <h2 className='fs-4'>Customer-first always</h2>
          <p className='text-muted mb-5'>
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 <br /> lakh
            crores of equity investments, making us India’s <br /> largest
            broker; contributing to <br /> 15% of daily retail exchange volumes
            in India.
          </p>
          <h2 className='fs-4'>No spam or gimmicks</h2>
          <p className='text-muted mb-5'>
            No gimmicks, spam, "gamification", or annoying push <br />
            notifications. High quality apps that you use at your <br /> pace,
            the way you like. Our philosophies.
          </p>
          <h2 className='fs-4'>The Zerodha universe</h2>
          <p className='text-muted mb-5'>
            Not just an app, but a whole ecosystem. Our investments <br /> in
            30+ fintech startups offer you tailored services <br /> specific to
            your needs.
          </p>
          <h2 className='fs-4'>Do better with money</h2>
          <p className='text-muted'>
            With initiatives like Nudge and Kill Switch, we don't just <br />
            facilitate transactions, but actively help you do better <br /> with
            your money.
          </p>
        </div>
        <div className='col-6 mt-5' id='stats-img'>
          <img
            className='ml-5'
            src='media/images/ecosystem.png'
            alt='ecosystem'
            style={{ width: "120%" }}
          />
          <div className='text-center'>
            <a
              style={{ textDecoration: "none" }}
              className='mx-5'
              href='http://'
              target='_blank'
              rel='noopener noreferrer'
            >
              Explore our products →
            </a>
            <a
              style={{ textDecoration: "none" }}
              href='http://'
              target='_blank'
              rel='noopener noreferrer'
            >
              Try Kite demo →
            </a>
          </div>
        </div>
        <div className='stats-logo'>
          <img
            className='mt-3'
            src='media/images/pressLogos.png'
            alt='presslogo'
          />
        </div>
      </div>
    </div>
  );
}

export default Stats;
