import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className='container p-5'>
      <div className='row'>
        <div
          className='col-6'
          style={{
            marginTop: "30px",
          }}
        >
          <div
            style={{
              lineHeight: "1.8rem",
              marginRight: "130px",
              marginLeft: "120px",
            }}
          >
            <h1 className='mt-4'>{productName}</h1>
            <p>{productDescription}</p>
            <a href='http://' target='_blank' rel='noopener noreferrer'>
              {learnMore}→
            </a>
          </div>
        </div>

        <div className='col-6'>
          <img src={imageURL} alt='right' style={{ marginTop: "-100px" }} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
