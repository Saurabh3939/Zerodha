import React from "react";
function Pricing() {
  return (
    <div className='container mt-5 '>
      <div className='row' id='pricing-row'>
        <div className='col-6 mt-5' id='unbeatable'>
          <h1 className='mb-3 fs-3'>Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price <br />
            transparency in India. Flat fees and no hidden charges.
          </p>
          <a
            style={{ textDecoration: "none" }}
            href='http://'
            target='_blank'
            rel='noopener noreferrer'
          >
            See pricing →
          </a>
        </div>
        <div className='col-6 pricing-container'>
          <div className='col pricing-item'>
            <img src='media/images/pricing0.svg' alt='20' />
            <p>Free account opening</p>
          </div>
          <div className='col pricing-item'>
            <img src='media/images/pricing0.svg' alt='20' />
            <p>Free equity delivery and direct mutual funds</p>
          </div>
          <div className='col pricing-item'>
            <img src='media/images/price20.svg' alt='20' />
            <p>Intraday and F&O</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;

// function Pricing() {
//   return (
//     <div class='container'>
//       <div class='row align-items-center'>
//         <div class='col-md-5'>
//           <h1>Unbeatable pricing</h1>
//           <p>
//             We pioneered the concept of discount broking and price transparency
//             in India. Flat fees and no hidden charges.
//           </p>
//           <a href='#'>See pricing &rarr;</a>
//         </div>
//         <div class='col-md-7'>
//           <div class='row'>
//             <div class='col-4 d-flex'>
//               <img src='media/images/pricing0.svg' alt='20' />
//               <p>Free account opening</p>
//             </div>

//             <div class='col-4 d-flex'>
//               <img src='media/images/pricing0.svg' alt='20' />
//               <p>Free equity delivery...</p>
//             </div>

//             <div class='col-4 d-flex'>
//               <img src='media/images/price20.svg' alt='20' />
//               <p>Intraday and F&O</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Pricing;
