import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Radio.css';
import EmotionSelector from '../Radio/EmotionSelector';
import EmotionModal from '../Radio/EmotionModal';
import { useSongRecommender } from '../../hooks/useSongRecommender';
import RadioHeader from '../Radio/RadioHeader';
import RadioFooter from '../Radio/RadioFooter';
import { songDatabase } from '../../data/songData';

const Radio = () => {
  const [loading, setLoading] = useState(false);
  const [isEmotionModalOpen, setIsEmotionModalOpen] = useState(false);
  const [selectedEmotion, setSelectedEmotion] = useState<keyof typeof songDatabase | null>(null);
  const navigate = useNavigate();
  const { recommendSong } = useSongRecommender();

  const handleEmotionSelect = (emotion: keyof typeof songDatabase) => {
    setSelectedEmotion(emotion);
    setIsEmotionModalOpen(true);
  };

  const closeEmotionModal = () => {
    setIsEmotionModalOpen(false);
    setSelectedEmotion(null);
  };

  const handleRecommendation = async (emotion: keyof typeof songDatabase) => {
    closeEmotionModal();
    setLoading(true);

    const song = await recommendSong(emotion);

    setLoading(false);

    if (song) {
      navigate('/recommendation', { state: { song, mood: emotion } });
    }
  };

  return (
    <>
      <RadioHeader />
      <div className="radio-container">
        <h1>지금 감정에 맞는 음악을 라디오처럼 골라줄게요</h1>
        <EmotionSelector onSelectEmotion={handleEmotionSelect} />
        {loading && <p>추천 중입니다...</p>}
        <EmotionModal
          isOpen={isEmotionModalOpen}
          onClose={closeEmotionModal}
          onConfirm={handleRecommendation}
          mood={selectedEmotion}
        />
      </div>
      <RadioFooter />
    </>
  );
};

export default Radio;
