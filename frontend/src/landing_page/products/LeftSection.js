import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className='container p-5 mt-5'>
      <div className='row '>
        <div className='col-6'>
          <img src={imageURL} alt='a' />
        </div>
        <div className='col-6'>
          <div
            style={{
              lineHeight: "1.8rem",
              marginRight: "130px",
              marginLeft: "120px",
            }}
          >
            <h1>{productName}</h1>
            <p>{productDescription}</p>
            <div>
              <a
                href={tryDemo}
                target='_blank'
                rel='noopener noreferrer'
                style={{ marginLeft: "25px" }}
              >
                Try Demo →
              </a>
              <a
                href={learnMore}
                target='_blank'
                rel='noopener noreferrer'
                style={{ marginLeft: "25px" }}
              >
                Learn More →
              </a>
            </div>
          </div>
          <div className='mt-3' style={{ marginLeft: "85px" }}>
            <a href={googlePlay} target='_blank' rel='noopener noreferrer'>
              <img src='media/images/googlePlayBadge.svg' alt='GooglePlay' />
            </a>
            <a href={appStore} target='_blank' rel='noopener noreferrer'>
              <img
                src='media/images/appstoreBadge.svg'
                alt='AppStore'
                className='mx-5'
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
