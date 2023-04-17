import React from 'react';
import './Frames.css';

export default function Frame({ arabicText, listOfOptions }) {
  return (
    <div>
      <div dir="rtl" className="card">
        {arabicText}
      </div>
      <div className="container">
        {listOfOptions.map((item, index) => (
          <div className="item" key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
