// == Import
import { useSelector } from 'react-redux';

import Mascotte from '../../../assets/images/mascotte.gif';
import PreviousButton from '../../../assets/images/previousButton.png';
import RestartButton from '../../../assets/images/RestartButton.png';
// data, styles
import './style.scss';

function RightSide() {
  const questionNumber = useSelector((state) => state.game.questionNumber);
  const progressBar = questionNumber * 10;
  return (
    <div className="rightSide">
      <img className="mascotte" src={Mascotte} alt="" />
      <div className="progressBar">
        <label htmlFor="progressionBar">Progression :
          <progress className="progressionBar" id="progressionBar" max="100" value={progressBar} />
        </label>
      </div>
      <button type="button">
        <img className="back" src={PreviousButton} alt="" />
      </button>
      <button type="button">
        <img className="restart" src={RestartButton} alt="" />
      </button>
    </div>
  );
}

export default RightSide;
