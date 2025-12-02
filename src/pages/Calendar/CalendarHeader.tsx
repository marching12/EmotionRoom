import './CalendarHeader.css';
import { useNavigate } from 'react-router-dom';

const CalendarHeader = () => {
  const navigate = useNavigate();
  
  return (
    <header className="calendar-header">
      <button onClick={() => navigate('/')}>메인으로 돌아가기</button>
    </header>
  );
};

export default CalendarHeader;
