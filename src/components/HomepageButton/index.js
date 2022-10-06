// == Import
// data, styles
import './style.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Mascotte from 'src/assets/images/mascotte.gif';
import { displayQuizz } from 'src/actions';

function HomepageButton() {
  const dispatch = useDispatch();
  const createForm = () => {
    dispatch(displayQuizz());
  };
  return (
    <div className="home">
      <p className="home-content animation">Welcome to MNG! Are you looking for the next gem to play? Say no more, you've come to the right place!
      </p>
      <img className="home-picture" src={Mascotte} alt="mascotte du site" />
      <Link to="/quizz">
        <button
          type="button"
          className="home-button"
          onClick={createForm}
        >
          Start the Quiz
        </button>
      </Link>
    </div>
  );
}

export default HomepageButton;
