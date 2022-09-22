// == Import
// data, styles
import './style.scss';
import { Link } from 'react-router-dom';

function HomepageButton() {
  return (
    <div className="QuizzButton">
      <Link to="/Quizz">
      <button type="button" className="homepageButton">Questions</button>
      </Link>
    </div>
  );
}

export default HomepageButton;
