import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL='media/images/kite.png'
        productName='Kike'
        productDescription='Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.'
        tryDemo='Try Demo'
        learnMore='Learn More'
        googlePlay='googleplay'
        appStore='appStore'
      />
      <RightSection
        imageURL='media/images/console.png'
        productName='Console'
        productDescription='The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.'
        learnMore='learn More'
      />
      <LeftSection
        imageURL='media/images/coin.png'
        productName='Coin'
        productDescription='Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.'
        tryDemo=''
        learnMore=''
        googlePlay=''
        appStore=''
      />
      <RightSection
        imageURL='media/images/kiteconnect.png'
        productName='Kite Connect API'
        productDescription='Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.'
        learnMore='Kite Connect API'
      />
      <LeftSection
        imageURL='media/images/varsity.png'
        productName='Varsity mobile'
        productDescription='An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.'
        tryDemo=''
        learnMore=''
        googlePlay=''
        appStore=''
      />
      <p
        className='h4 text-center  text-muted'
        style={{ textDecoration: "none", marginTop: "80px" }}
      >
        Want to know more about our technology stack? Check out the &nbsp;
        <a
          href='http://'
          target='_blank'
          rel='noopener noreferrer'
          style={{ textDecoration: "none" }}
        >
          Zerodha.tech &nbsp;
        </a>
        blog.
      </p>
      <Universe />
    </>
  );
}

export default ProductPage;
