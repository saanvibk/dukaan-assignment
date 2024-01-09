import React from 'react';

function Header() {
  return (
    <section className='header'>
      <div className='frame-1'>
        <div className='help'>
          <img src='./assets/question-icon.png' alt='' height='15px' />
          <p className='help-text'>How it works</p>
        </div>
      </div>
      <div className='frame-2'>
        <div className='search'>
          <img src='./assets/search.png' alt='' />
          <p>Search features, tutorials, etc..</p>
        </div>
      </div>
      <div className='frame-3'>
        <div className='ellipse ellipse-1'>
          <img src='./assets/header-icon-1.png' alt='' />
        </div>
        <div className='ellipse ellipse-2'>
          <img src='./assets/header-icon-2.png' alt='' />
        </div>
      </div>
    </section>
  );
}

export default Header;
