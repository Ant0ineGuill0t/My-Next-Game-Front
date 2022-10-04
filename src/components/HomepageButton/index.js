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
      <p className="home-content animation">Bienvenue sur MNG! Vous êtes en quête de la petite
        pépite que vous avez loupé? Nous sommes là pour ça!
      </p>
      <img className="home-picture" src={Mascotte} alt="mascotte du site" />
      <Link to="/quizz">
        <button
          type="button"
          className="home-button"
          onClick={createForm}
        >
          Commencer le questionnaire
        </button>
      </Link>
    </div>
  );
}

export default HomepageButton;
