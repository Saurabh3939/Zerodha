import React from "react";

function Universe() {
  return (
    <div className='container mb-5  p-5 text-center'>
      <div className='row universe p-2'>
        <h2 className='text-center text-muted mt-5'>The Zerodha Universe</h2>
        <p className='text-center text-muted mt-3 mb-5'>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className='row universe-img1'>
          <div className='col images1'>
            <img
              id='uniImg'
              src='media\images\zerodhaFundhouse.png'
              alt='zerodha'
              style={{ width: "55%" }}
            />
            <p>
              Our asset management venture <br /> that is creating simple and
              transparent index <br /> funds to help you save for your goals.
            </p>
          </div>
          <div className='col images2'>
            <img
              id='uniImg'
              src='media\images\sensiBullLogo.svg'
              alt='zerodha'
              style={{ width: "65%" }}
            />
            <p className='text-muted'>
              Options trading platform that lets you <br /> create strategies,
              analyze positions, and examine <br /> data points like open
              interest, FII/DII, and more.
            </p>
          </div>
          <div className='col images3'>
            <img
              id='uniImg'
              src='media\images\tijoriLogo.svg'
              alt='zerodha'
              style={{ width: "40%" }}
            />
            <p>
              Investment research platform <br /> that offers detailed insights
              on stocks, <br /> sectors, supply chains, and more.
            </p>
          </div>
        </div>
        <div className='row universe-img2 mt-3'>
          <div className='col images1'>
            <img
              id='uniImg'
              src='media\images\streaklogo.png'
              alt='zerodha'
              style={{
                width: "50%",
              }}
            />
            <p>
              Systematic trading platform <br /> that allows you to create and
              backtest <br />
              strategies without coding.
            </p>
          </div>
          <div className='col images2'>
            <img
              id='uniImg'
              src='media\images\smallcaseLogo.png'
              alt='zerodha'
              style={{ width: "60%" }}
            />
            <p>
              Thematic investing platform <br /> that helps you invest in
              diversified <br />
              baskets of stocks on ETFs.
            </p>
          </div>
          <div className='col images3'>
            <img
              id='uniImg'
              src='media\images\dittoLogo.png'
              alt='zerodha'
              style={{ width: "40%" }}
            />
            <p>
              Personalized advice on life <br /> and health insurance. No spam
              <br />
              and no mis-selling.
            </p>
          </div>
        </div>
        <button
          className='p-2 mt-5 btn btn-primary fs-5'
          style={{ width: "20%" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

// function Universe() {
//   return (
//     <div className='container'>
//       <div className='row mb-5'>
//         <h1 className='fs-3 universe-row'>The Zerodha Universe</h1>
//         <p className='mt-4 universe-row'>
//           Extend your trading and investment experience even further with our
//           partner platforms
//         </p>
//       </div>
//       <div className='row text-center text-muted' id='universe-img'>
//         <div className='col'>
//           <img
//             id='uniImg'
//             src='media\images\zerodhaFundhouse.png'
//             alt='zerodha'
//             style={{ width: "50%" }}
//           />
//           <p>
//             Our asset management venture <br /> that is creating simple and
//             transparent index <br /> funds to help you save for your goals.
//           </p>
//         </div>
//         <div className='col'>
// <img
//   id='uniImg'
//   src='media\images\sensiBullLogo.svg'
//   alt='zerodha'
//   style={{ width: "50%" }}
// />
// <p>
//   Options trading platform that lets you <br /> create strategies,
//   analyze positions, and examine <br /> data points like open
//   interest, FII/DII, and more.
// </p>
//         </div>
//         <div className='col'>
// <img
//   id='uniImg'
//   src='media\images\tijoriLogo.svg'
//   alt='zerodha'
//   style={{ width: "40%" }}
// />
// <p>
//   Investment research platform <br /> that offers detailed insights on
//   stocks, <br /> sectors, supply chains, and more.
// </p>
//         </div>
//       </div>
//       <div className='row  text-center text-muted' id='universe-img'>
//         <div className='col'>
//{
/* <img
  id='uniImg'
  src='media\images\streaklogo.png'
  alt='zerodha'
  style={{ width: "50%" }}
/>
<p>
  Systematic trading platform <br /> that allows you to create and
  backtest <br />
  strategies without coding.
</p> */
//}
//         </div>
//         <div className='col'>
// <img
//   id='uniImg'
//   src='media\images\smallcaseLogo.png'
//   alt='zerodha'
//   style={{ width: "50%" }}
// />
// <p>
//   Thematic investing platform <br /> that helps you invest in
//   diversified <br />
//   baskets of stocks on ETFs.
// </p>
//         </div>
//         <div className='col'>
// <img
//   id='uniImg'
//   src='media\images\dittoLogo.png'
//   alt='zerodha'
//   style={{ width: "40%" }}
// />
// <p>
//   Personalized advice on life <br /> and health insurance. No spam
//   <br />
//   and no mis-selling. Sign up for free
// </p>
//         </div>
//       </div>
//     </div>
//   );
// }

export default Universe;
