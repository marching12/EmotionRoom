import React from 'react';
import type { Song } from '../../types/Song';
import './SavedSongsModal.css';
import { moodToKorean } from '../../data/moodTranslations';
import { moodColors, moodLightColors } from '../../data/moodColors';

interface SavedSongsModalProps {
  songs: Song[];
  mood: 'joy' | 'sadness' | 'angry' | 'relaxed' | 'happiness' | 'anxiety' | 'depression' | 'tiredness';
  onClose: () => void;
  onDelete: (trackId: number) => void;
}

const SavedSongsModal: React.FC<SavedSongsModalProps> = ({ songs, mood, onClose, onDelete }) => {
  const backgroundColor = moodColors[mood];
  const listItemBackgroundColor = moodLightColors[mood];
  return (
    <div className="save-song-modal-overlay" onClick={onClose}>
      <div className="save-song-modal-content" style={{ backgroundColor }} onClick={(e) => e.stopPropagation()}>
        <div className='save-song-modal-top'>
          <h2>{moodToKorean[mood]} 카세트</h2>
          <button className="save-song-close-button" onClick={onClose}>닫기</button>
        </div>
        <ul>
          {songs.map((song, index) => (
            <li key={index} style={{ backgroundColor: listItemBackgroundColor }}>
              <img src={song.artworkUrl100} alt={song.trackName} />
              <div>
                <h3>{song.trackName}</h3>
                <p>{song.artistName}</p>
              </div>
              <button onClick={() => onDelete(song.trackId)}>삭제</button>
            </li>
          ))}
          {songs.length === 0 && <li style={{ backgroundColor: listItemBackgroundColor }}>저장된 노래가 없습니다.</li>}
        </ul>
      </div>
    </div>
  );
};

export default SavedSongsModal;
