import React from 'react';
import OrderInfo from './OrderInfo';
import Footer from './Footer';

const Table = () => {
  // Define an array of 4 different values

  return (
    <>
      <div className='table'>
        <div className='search-bar'>
          <div className='transac-search'>
            <img src='./assets/search.png' alt='' />
            <p>Search by order ID...</p>
          </div>
          <div className='transac-btns'>
            <div className='sort-btn'>
              <p>Sort</p>
              <img src='./assets/sort.png' alt='' />
            </div>
            <div className='download-btn'>
              <img src='./assets/download.png' alt='' />
            </div>
          </div>
        </div>
        <div className='table-headings'>
          <div className='cell-header'>
            <p>Order ID</p>
          </div>
          <div className='cell-header'>
            <div className='order-date'>
              <p>Order date</p>
              <img src='./assets/filled-arrow.png' alt=''></img>
            </div>
          </div>
          <div className='cell-header right'>
            <p>Order amount</p>
          </div>
          <div className='cell-header right'>
            <div className='fee '>
              <p>Transaction fee</p>
              <img src='./assets/fee.png' alt='' />
            </div>
          </div>
        </div>

        <div className='orders'>
          <OrderInfo />
          <OrderInfo />
          <OrderInfo />
          <OrderInfo />
          <OrderInfo />
          <OrderInfo />
          <OrderInfo />
          <OrderInfo />
          <OrderInfo />
          <OrderInfo />
          <OrderInfo />
          <OrderInfo />
          <OrderInfo />
          <OrderInfo />
          <OrderInfo />
          <OrderInfo />
          <OrderInfo />
          <OrderInfo />
        </div>
        <div className='table-bottom'>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Table;
