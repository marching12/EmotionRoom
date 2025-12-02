import React from 'react';
import type { Song } from '../../types/Song';
import './SongModal.css';
import { moodToKorean } from '../../data/moodTranslations';

interface SongModalProps {
  song: Song;
  mood?: string;
  onClose: () => void;
}

const SongModal: React.FC<SongModalProps> = ({ song, mood, onClose }) => {
  return (
    <div className="song-modal-overlay" onClick={onClose}>
      <div className="song-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="song-modal-header">
          {mood && <p>오늘의 감정: {moodToKorean[mood]}</p>}
          <button className="song-close-icon" aria-label="닫기" onClick={onClose}>×</button>
        </div>
        <img src={song.artworkUrl100.replace('100x100bb', '1000x1000bb')} alt={song.trackName} />
        <h2>{song.trackName}</h2>
        <h3>{song.artistName}</h3>
        {song.previewUrl && <audio controls src={song.previewUrl} />} 
        <button className="song-close-button" onClick={onClose}>닫기</button>       
      </div>
    </div>
  );
};

export default SongModal;
