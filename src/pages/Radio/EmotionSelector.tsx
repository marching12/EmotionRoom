import React, { useState, useRef } from 'react';
import './EmotionSelector.css';

interface EmotionSelectorProps {
  onSelectEmotion: (emotion: 'joy' | 'sadness' | 'angry' | 'relaxed' | 'happiness' | 'anxiety' | 'depression' | 'tiredness') => void;
}

const EmotionSelector: React.FC<EmotionSelectorProps> = ({ onSelectEmotion }) => {
  const [barPosition, setBarPosition] = useState(0);
  const [lineOffset, setLineOffset] = useState(0);
  const radioButtonsRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (radioButtonsRef.current) {
      const rect = radioButtonsRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      setBarPosition(mouseX);

      const radioButtonsWidth = rect.width;
      const maxDialMovement = 100;

      const newOffset = (mouseX / radioButtonsWidth) * maxDialMovement;
      setLineOffset(newOffset);
    }
  };

  const handleMouseLeave = () => {
    setBarPosition(0);
    setLineOffset(0);
  };

  return (
    <div className="radio-section">
      <div className="radio-top">
        <div className="antenna"></div>
        <div className="dial" style={{ backgroundPositionX: `${lineOffset}px` }}></div>
        <div
          className="radio-buttons"
          ref={radioButtonsRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="mouse-bar" style={{ left: `${barPosition}px` }}></div>
          <button className="blank"></button>
          <button onClick={() => onSelectEmotion('joy')}>기쁨</button>
          <button onClick={() => onSelectEmotion('sadness')}>슬픔</button>
          <button onClick={() => onSelectEmotion('angry')}>분노</button>
          <button onClick={() => onSelectEmotion('relaxed')}>여유</button>
          <button onClick={() => onSelectEmotion('happiness')}>행복</button>
          <button onClick={() => onSelectEmotion('anxiety')}>불안</button>
          <button onClick={() => onSelectEmotion('depression')}>우울</button>
          <button onClick={() => onSelectEmotion('tiredness')}>피곤</button>
        </div>
      </div>
      <div className="radio-bottom">
        <div className="speaker">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
};

export default EmotionSelector;
