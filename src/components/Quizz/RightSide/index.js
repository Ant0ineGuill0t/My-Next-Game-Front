// == Import
// data, styles
import './style.scss';
import Mascotte from '../../../assets/images/mascotte.gif';
import PreviousButton from '../../../assets/images/previousButton.png';
import RestartButton from '../../../assets/images/RestartButton.png';

function RightSide() {
  return (
    <div className="rightSide">
      <img className="mascotte" src={Mascotte} alt="" />
      <div className="progressBar">
        <label htmlFor="progressionBar">Progression :</label>
        <progress className="progressionBar" id="progressionBar" max="100" value="70"> 70% </progress>
      </div>
      <button type="button"><img className="back" src={PreviousButton} alt="" /></button>
      <button type="button"><img className="restart" src={RestartButton} alt="" /></button>
    </div>
  );
}

export default RightSide;
