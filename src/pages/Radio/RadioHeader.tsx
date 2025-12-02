import './RadioHeader.css';
import { useNavigate } from 'react-router-dom';

const RadioHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="radio-header">
      <button onClick={() => navigate('/')}>메인으로 돌아가기</button>
    </header>
  );
};

export default RadioHeader;
