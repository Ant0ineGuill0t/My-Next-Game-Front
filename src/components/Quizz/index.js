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
      <div className="quizz__container">
        <h2 className="quizz__title">Question {useSelector((state) => state.game.questionNumber)}/20</h2>
        <div className="container__div">
          <p className="div__question" key={question}>{question}</p>
        </div>
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
}

export default Quizz;
