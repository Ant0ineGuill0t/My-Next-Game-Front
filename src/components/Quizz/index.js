// == Import
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// composants
import LeftSide from './LeftSide';
import RightSide from './RightSide';

// data, styles
import './style.scss';

function Quizz() {
  if (useSelector((state) => state.user.token) === '') {
    return (
      <Navigate to="/" replace />
    );
  }
  const question = useSelector((state) => state.game.question);
  return (
    <div className="quizz">
      <h2>Question</h2>
      <p className="question">{question}</p>
      <LeftSide />
      <RightSide />
    </div>
  );
}

export default Quizz;
