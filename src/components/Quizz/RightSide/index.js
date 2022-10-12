// == Import
import { useSelector, useDispatch } from 'react-redux';
import { displayPreviousQuestion, restartQuizz } from '../../../actions';

import Mascotte from '../../../assets/images/mascotte.gif';
import PreviousButton from '../../../assets/images/previousButton.png';
import RestartButton from '../../../assets/images/RestartButton.png';
// data, styles
import './style.scss';

function RightSide() {
  const dispatch = useDispatch();
  const questionNumber = useSelector((state) => state.game.questionNumber);
  const progressBar = questionNumber * 5;

  const handleRestartClick = () => {
    dispatch(restartQuizz());
  };
  const handlePreviousClick = () => {
    dispatch(displayPreviousQuestion());
  };
  return (
    <div className="right-side">
      <img className="right-side__mascot" src={Mascotte} alt="mascot" />
      <div className="right-side__progressBar">
        <label htmlFor="progressionBar">Progression :
          <progress className="right-side__progressionBar" id="progressionBar" max="100" value={progressBar} />
        </label>
      </div>
      <button onClick={handlePreviousClick} type="button">
        <img className="right-side__previous" src={PreviousButton} alt="previous question" />
      </button>
      <button onClick={handleRestartClick} type="button">
        <img className="right-side__restart" src={RestartButton} alt="restart quizz" />
      </button>
    </div>
  );
}

export default RightSide;
