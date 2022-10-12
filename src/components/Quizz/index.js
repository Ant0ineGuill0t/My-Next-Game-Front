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
      <div className="quizz-container">
        <h2>Question {useSelector((state) => state.game.questionNumber)}/20</h2>
        <div className="questionDiv"><p className="question" key={question}>{question}</p></div>
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
}

export default Quizz;
