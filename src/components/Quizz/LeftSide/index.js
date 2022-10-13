// == Import
import { sendAnswer, saveAnswer, displayResults } from 'src/actions';
// import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// data, styles
import './style.scss';
import NeonButton from '../../../assets/images/neonbutton.png';

function LeftSide() {
  const dispatch = useDispatch();
  const choices = useSelector((state) => state.game.choices);
  const keys = Object.keys(choices);
  const values = Object.values(choices);
  const questionNumber = useSelector((state) => state.game.questionNumber);
  const navigate = useNavigate();

  const handleClick = (event) => {
    if (questionNumber < 15) {
      console.log(questionNumber);
      dispatch(saveAnswer(event.target.value));
      dispatch(sendAnswer());
    }
    if (questionNumber === 15) {
      dispatch(displayResults());
      navigate('/quizz/results');
    }
  };
  return (
    <div className="left-side">
      <div className="left-side__checkboxes">
        {
          values.map(
            (choice) => (
              <label key={choice} htmlFor={`checkboxes ${choice}`}>
                <img className="checkboxes__image" src={NeonButton} alt="checkbox" />
                <input
                  type="checkbox"
                  name={`checkboxes ${choice}`}
                  id={`checkboxes ${choice}`}
                  value={choice}
                  onClick={handleClick}
                />
              </label>
            ),
          )
        }
      </div>
      <div className="left-side__responses">
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
