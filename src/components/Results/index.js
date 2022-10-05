// == Import
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { restartQuizz } from '../../actions';

// composants
import Result from './Result';
// data, styles
import './style.scss';

function Results() {
  const dispatch = useDispatch();
  const gameDatas = useSelector((state) => state.game.gameData);
  console.log(gameDatas);

  const handleRestartClick = (event) => {
    dispatch(restartQuizz());
  };
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
        <button onClick={handleRestartClick} type="button" className="restartQuizz">Refaire le Quizz</button>
      </Link>
    </div>
  );
}

export default Results;
