import React from 'react';

function Footer() {
  return (
    <>
      <section className='footer'>
        <div className='previous'>
          <img src='./assets/prev.png' alt='' />
          <p>Previous</p>
        </div>
        <div className='page-num'>
          <div className='num'>
            <p>1</p>
          </div>
          <div className='num num-dot'>
            <p>...</p>
          </div>
          <div className='num background-blue'>
            <p>10</p>
          </div>
          <div className='num'>
            <p>11</p>
          </div>
          <div className='num'>
            <p>12</p>
          </div>
          <div className='num'>
            <p>13</p>
          </div>
          <div className='num'>
            <p>14</p>
          </div>
          <div className='num'>
            <p>15</p>
          </div>
          <div className='num'>
            <p>16</p>
          </div>
          <div className='num'>
            <p>17</p>
          </div>
          <div className='num'>
            <p>18</p>
          </div>
        </div>
        <div className='next'>
          <p>Next</p>
          <img src='./assets/next.png' alt='' />
        </div>
      </section>
    </>
  );
}
export default Footer;
