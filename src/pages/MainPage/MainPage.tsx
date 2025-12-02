import { useNavigate } from 'react-router-dom';
import './MainPage.css';
import RadioIcon from '../../images/radioIcon.png';
import CalendarIcon from '../../images/CalenderIcon.png';
import CassetteIcon from '../../images/CassetteIcon.png';
import MainHeader from '../MainPage/MainHeader';
import MainFooter from '../MainPage/MainFooter';
import LightIcon from '../../images/LightIcon.png';

const MainPage = () => {
  const navigate = useNavigate();

  const goToRecommendation = () => {
    navigate('/selection');
  };

  const goToCassettebox = () => {
    navigate('/cassettebox');
  };

  const goToCalendar = () => {
    navigate('/calendar');
  };

  return (
    <>
      <MainHeader />
      <div className="main-page">
        <img
          src={LightIcon}
          alt="전구 아이콘"
          className="light-icon"
        />
        <h1>감정 라디오</h1>
        <p>당신의 오늘을 조용하게 들어줄게요.</p>
        <div className="buttons">
          <button onClick={goToRecommendation}>
            <img
              src={RadioIcon}
              alt="라디오 아이콘"
              className="radio-icon"
            />
            <p className="radio-label">감정 라디오</p>
          </button>
          <button onClick={goToCassettebox}>
            <img
              src={CassetteIcon}
              alt="카세트박스 아이콘"
              className="cassette-icon"
            />
            <p className="radio-label">카세트박스</p>
          </button>
          <button onClick={goToCalendar}>
            <img
              src={CalendarIcon}
              alt="달력 아이콘"
              className="calender-icon"
            />
            <p className="radio-label">달력</p>
          </button>
        </div>
      </div>
      <MainFooter />
    </>
  );
};

export default MainPage;
