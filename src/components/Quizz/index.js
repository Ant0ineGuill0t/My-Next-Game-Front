// == Import
import { useSelector } from 'react-redux';
// composants
import LeftSide from './LeftSide';
import RightSide from './RightSide';

// data, styles
import './style.scss';

function Quizz() {
  const question = useSelector((state) => state.game.question);
  return (
    <div className="quizz">
      <h2>Question {useSelector((state) => state.game.questionNumber)}/20</h2>
      <p className="question">{question}</p>
      <LeftSide />
      <RightSide />
    </div>
  );
}

export default Quizz;
