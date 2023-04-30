import React from 'react';
import './Frames.css';

export default function Frame({
  arabicText,
  listOfOptions,
  onClickAction,
  englishTransliteration,
}) {
  const FrameItem = ({ item, index }) => {
    const [buttonBg, setButtonBg] = React.useState(false);
    const handleClick = (event) => {
      const result = onClickAction(event);
      if (result) {
        setButtonBg('#ff6663');
      }
    };
    return (
      <div
        className="item"
        key={index}
        style={{ background: buttonBg ?? '#ff6663' }}
        onClick={handleClick}
      >
        {item}
      </div>
    );
  };
  return (
    <div>
      <div className="card">
        <div dir="rtl" style={{ paddingTop: "2em" }}>{arabicText}</div>
        <div className='card-item-english' >
          {englishTransliteration}
        </div>
      </div>
      <div className="container">
        {listOfOptions.map((item, index) => (
          <FrameItem item={item} index={index} />
        ))}
      </div>
    </div>
  );
}
