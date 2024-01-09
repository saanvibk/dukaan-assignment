import React from 'react';
import Pages from './Pages';
import { FaAngleDown } from 'react-icons/fa';

function Navbar() {
  return (
    <>
      <div className='navbar'>
        <div className='nav-top'>
          <div className='company-logo'>
            <div className='img'>
              <img src='./assets/dukaan-icon1.png' alt='' />
            </div>
            <div className='company-name'>
              <p>Nishyan</p>
              <a href='home'>visit store</a>
            </div>
            <div className='down-arrow'>
              <FaAngleDown />
            </div>
          </div>
          <div className='link-pages'>
            <Pages />
          </div>
        </div>
        <div className='nav-bottom'>
          <div className='wallet'>
            <img src='./assets/wallet.png' alt='' />
          </div>
          <div className='credits'>
            <p>Available credits</p>
            <h5>222.10</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
