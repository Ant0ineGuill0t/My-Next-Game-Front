// == Import
import { sendAnswer, saveAnswer } from 'src/actions';
import { useSelector, useDispatch } from 'react-redux';
// data, styles
import './style.scss';
import NeonButton from '../../../assets/images/neonbutton.png';

function LeftSide() {
  const dispatch = useDispatch();
  const choices = useSelector((state) => state.game.choices);
  const keys = Object.keys(choices);
  const values = Object.values(choices);
  const handleClick = (event) => {
    dispatch(saveAnswer(event.target.value));
    dispatch(sendAnswer());
  };
  return (
    <div className="leftSide">
      <div className="checkboxes">
        {
          values.map(
            (choice) => (
              <label key={choice} htmlFor={`checkbox ${choice}`}>
                <img className="checkbox__img" src={NeonButton} alt="checkbox" />
                <input
                  type="checkbox"
                  name={`checkbox ${choice}`}
                  id={`checkbox ${choice}`}
                  value={choice}
                  onClick={handleClick}
                />
              </label>
            ),
          )
        }
        {/* <label htmlFor="checkbox2">
          <img className="checkbox__img" src={NeonButton} alt="checkbox" />
          <input type="checkbox" name="checkbox2" id="checkbox2" />
        </label>
        <label htmlFor="checkbox3">
          <img className="checkbox__img" src={NeonButton} alt="checkbox" />
          <input type="checkbox" name="checkbox3" id="checkbox3" />
        </label>
        <label htmlFor="checkbox4">
          <img className="checkbox__img" src={NeonButton} alt="checkbox" />
          <input type="checkbox" name="checkbox4" id="checkbox4" />
        </label>
        <label htmlFor="checkbox5">
          <img className="checkbox__img" src={NeonButton} alt="checkbox" />
          <input type="checkbox" name="checkbox1" id="checkbox5" />
        </label> */}
      </div>
      <div className="responses">
        {
          keys.map(
            (key) => <p key={key}>{key}</p>,
          )
        }
      </div>
    </div>
  );
}

export default LeftSide;
