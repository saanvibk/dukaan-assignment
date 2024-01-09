import React from 'react';

function Order() {
  const data = [
    {
      id: '#281209',
      date: '7 July, 2023',
      amount: '₹1,278.23',
      fees: '₹22',
    },
  ];
  return (
    <div className='orders'>
      {data.map((item) => {
        const { id, date, amount, fees } = item;
        return (
          <>
            <div className='order-info'>
              <p className='info blue'>{id} </p>
              <p className='info'>{date}</p>
              <p className='info right'>{amount}</p>
              <p className='info right'>{fees}</p>
            </div>
            <div className='underline'></div>
          </>
        );
      })}
    </div>
  );
}

export default Order;
