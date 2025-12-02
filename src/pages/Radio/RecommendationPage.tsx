import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import type { Song } from '../../types/Song';
import './RecommendationPage.css';
import RadioHeader from '../Radio/RadioHeader';
import RadioFooter from '../Radio/RadioFooter';
import { useMoodRecorder } from '../../hooks/useMoodRecorder';

const RecommendationPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { song, mood } = location.state as {
    song: Song;
    mood: 'joy' | 'sadness' | 'angry' | 'relaxed' | 'happiness' | 'anxiety' | 'depression' | 'tiredness';
  };
  const { recordMood } = useMoodRecorder();

  const moodMessages: { [key in typeof mood]: string } = {
    joy: '기분 좋게, 기분 좋은 멜로디를!',
    sadness: '마음이 내려앉을 땐, 조용히 들어보세요.',
    angry: '화난 마음은 음악으로 잠시 내려놔요.',
    relaxed: '여유로운 기분, 가볍게 흘려들어요.',
    happiness: '행복한 순간엔 더 행복한 멜로디를!',
    anxiety: '불안한 마음을 달래줄 멜로디예요.',
    depression: '우울한 날엔 부드러운 곡으로 위로받기.',
    tiredness: '지친 하루, 음악으로 잠시 쉬어가요.',
  };

  if (!song) {
    return (
      <div className="recommendation-container">
        <h2>오류</h2>
        <p>노래 정보를 불러오지 못했어요.</p>
        <button onClick={() => navigate('/')}>처음으로 돌아가기</button>
      </div>
    );
  }

  const handleSave = () => {
    const success = recordMood(mood, song);
    if (success) {
      alert('노래가 저장됐습니다.');
    } else {
      alert('이미 저장된 노래입니다.');
    }
  };

  const emotionColors = {
    joy: '#F6E381',
    sadness: '#87B1DC',
    angry: '#F2798F',
    relaxed: '#A6D1B5',
    happiness: '#F9C1C0',
    anxiety: '#F2AD85',
    depression: '#BFBFBF',
    tiredness: '#BAA8D2',
  };

  const recommendationInfoStyle = {
    boxShadow: `0 10px 100px 50px ${emotionColors[mood]}`,
  };

  return (
    <>
      <RadioHeader />
      <div className="recommendation-container">
        <div className="recommendation-info" style={recommendationInfoStyle}>
          <h2>{moodMessages[mood]}</h2>
          <div className="song-details">
            <img src={song.artworkUrl100.replace('100x100bb', '600x600bb')} alt={song.trackName} />
            <h3>{song.trackName}</h3>
            <p>{song.artistName}</p>
            {song.previewUrl && <audio controls src={song.previewUrl}></audio>}
          </div>
          <button className="save-button" onClick={handleSave}>카세트박스에 저장하기</button>
          <button className="close2-button" onClick={() => navigate(-1)}>닫기</button>
        </div>
      </div>
      <RadioFooter />
    </>
  );
};

export default RecommendationPage;
