import React from 'react';
import './Frames.css';

export default function Frame({ arabicText, listOfOptions, onClickAction }) {
  const FrameItem = ({ item, index }) => {
    const [buttonBg, setButtonBg] = React.useState(false);
    const handleClick = (event) => {
      const result = onClickAction(event);
      if(result) {
        setButtonBg('#ff6663');
      }
    }
    return (
      <div className="item" key={index} style={{ background: buttonBg ?? '#ff6663' }} onClick={handleClick}>
        {item}
      </div>
    );
  };
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

