import React from "react";

function Hero() {
  return (
    <div className='container-fluid mb-5'>
      <div className='row' id='supportHero'>
        <h1>Support Portal</h1>
        <span>
          <button>My tickets</button>
        </span>
        <input
          type='text'
          placeholder='Eg: How Do I Open my account, How do i activate F&O...'
        />
      </div>
    </div>
  );
}

export default Hero;
