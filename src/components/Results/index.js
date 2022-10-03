// == Import
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// composants
import Result from './Result';
// data, styles
import './style.scss';

function Results() {
  const gameDatas = useSelector((state) => state.game.gameData);
  console.log(gameDatas);
  return (
    <div className="results">
      <div className="cardContainer">
        <ul className="scrollZone">
          {
            gameDatas.map(
              (gameData) => <li key={gameData.id}><Result {...gameData} /></li>,
            )
          }
        </ul>
      </div>
      <Link to="/Quizz">
        <button type="button" className="restartQuizz">Refaire le Quizz</button>
      </Link>
    </div>
  );
}

export default Results;
