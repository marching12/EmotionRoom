import CalendarView from './CalendarView';
import './Calendar.css';
import CalendarHeader from './CalendarHeader';
import CalendarFooter from './CalendarFooter';
import  { useMoodRecorder } from '../../hooks/useMoodRecorder';
import MostFeltMood from './MostFeltMood';


const CalendarPage = () => {
  const { getMostFeltMoodThisMonth } = useMoodRecorder();
  const mostFeltMood = getMostFeltMoodThisMonth();

  return (
    <>
    <CalendarHeader />
    <div className="calendar-content">
      {mostFeltMood && <MostFeltMood />}
      <CalendarView />
    </div>
    <CalendarFooter />
    </>
  );
};

export default CalendarPage;
