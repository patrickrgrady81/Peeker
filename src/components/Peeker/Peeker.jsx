import React from 'react';
import './Peeker.css';

function Peeker() {
  return (
    <div className='peeker-grid-container'>
      <div className="odds orange-border"></div>
      <div className="table orange-border">
        <div className="cards blue-border"></div>
        <div className="buttons blue-border"></div>
      </div>
      <div className="pay-table orange-border"></div>
      <div className="bet orange-border"></div>
      <div className="result orange-border"></div>
      <div className="best-plays orange-border"></div>
    </div>
  )
}

export default Peeker