import React from 'react';
import pageData from './page-data';

function Pages() {
  return (
    <div className='pages'>
      {pageData.map((page) => {
        console.log(page);

        const { id, icon, title } = page;
        return (
          <div className='page' key={id}>
            <img src={icon} alt='' className='page-icon' />
            <p className='page-title'>{title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Pages;
