import React from 'react';
import Overview from './Overview';
import Table from './Table';

function Mainframe() {
  return (
    <>
      <Overview />

      <section className='transactions'>
        <div className='tansac-heading'>
          <h3>Transactions | This Month</h3>
        </div>
        <Table />
      </section>
    </>
  );
}

export default Mainframe;
