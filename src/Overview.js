import React from 'react';
import { FaAngleDown } from 'react-icons/fa';

function Overview() {
  return (
    <section className='overview'>
      <div className='overview-header'>
        <div className='heading'>
          <h3>Overview</h3>
        </div>
        <div className='button'>
          <button className='last-month'>
            Last month
            <FaAngleDown />
          </button>
        </div>
      </div>
      <div className='overview-main'>
        <div className='main-box online-orders'>
          <p>Online orders</p>
          <h3>231</h3>
        </div>
        <div className='main-box amount-recieved'>
          <p>Amount recieved</p>
          <h3>₹23,92,312.19</h3>
        </div>
      </div>
    </section>
  );
}

export default Overview;
