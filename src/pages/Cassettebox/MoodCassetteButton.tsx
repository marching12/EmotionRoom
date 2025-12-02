import React from 'react';
import JoyCassette from '../../images/JoyCassette.png';
import SadnessCassette from '../../images/SadnessCassette.png';
import AngryCassette from '../../images/AngryCassette.png';
import RelaxedCassette from '../../images/RelaxedCassette.png';
import HappinessCassette from '../../images/HappinessCassette.png';
import AnxietyCassette from '../../images/AnxietyCassette.png';
import DepressionCassette from '../../images/DepressionCassette.png';
import TirednessCassette from '../../images/TirednessCassette.png';
import './MoodCassetteButton.css';

interface MoodCassetteButtonProps {
  mood: 'joy' | 'sadness' | 'angry' | 'relaxed' | 'happiness' | 'anxiety' | 'depression' | 'tiredness';
  onClick: (mood: 'joy' | 'sadness' | 'angry' | 'relaxed' | 'happiness' | 'anxiety' | 'depression' | 'tiredness') => void;
}

const moodAssets: { [key in MoodCassetteButtonProps['mood']]: { image: string; text: string } } = {
  joy: { image: JoyCassette, text: '기쁨 카세트' },
  sadness: { image: SadnessCassette, text: '슬픔 카세트' },
  angry: { image: AngryCassette, text: '분노 카세트' },
  relaxed: { image: RelaxedCassette, text: '여유 카세트' },
  happiness: { image: HappinessCassette, text: '행복 카세트' },
  anxiety: { image: AnxietyCassette, text: '불안 카세트' },
  depression: { image: DepressionCassette, text: '우울 카세트' },
  tiredness: { image: TirednessCassette, text: '피곤 카세트' },
};

const MoodCassetteButton: React.FC<MoodCassetteButtonProps> = ({ mood, onClick }) => {
  const { image, text } = moodAssets[mood];

  return (
    <div className='mood-cassette'>
      <button onClick={() => onClick(mood)}>
        <img src={image} alt={text} />
        <p>{text}</p>
      </button>
    </div>
  );
};

export default MoodCassetteButton;
