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
          <FrameItem item={item} index={index} />
        ))}
      </div>
    </div>
  );
}

const FrameItem = ({ item, index }) => {
  const [buttonBg, setButtonBg] = React.useState('transparent');
  return (
    <div className="item" key={index} style={{ background: buttonBg }}>
      {item}
    </div>
  );
};
