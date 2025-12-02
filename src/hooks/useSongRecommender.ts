import { songDatabase } from '../data/songData';
import type { Song } from '../types/Song';

export const useSongRecommender = () => {
  const recommendSong = async (emotion: keyof typeof songDatabase): Promise<Song | null> => {
    const trackIds = songDatabase[emotion];

    if (!trackIds || trackIds.length === 0) {
      console.warn(`해당 감정에 대한 곡 데이터가 없습니다: ${emotion}`);
      return null;
    }

    const randomTrackId = trackIds[Math.floor(Math.random() * trackIds.length)];
    const url = `https://itunes.apple.com/lookup?id=${randomTrackId}&entity=song&country=KR`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`iTunes API error: ${response.status}`);

      const data = await response.json();
      const fetchedSong: Song = data.results[0];

      return fetchedSong || null;
    } catch (error) {
      console.error('Error fetching song:', error);
      return null;
    }
  };

  return { recommendSong };
};
