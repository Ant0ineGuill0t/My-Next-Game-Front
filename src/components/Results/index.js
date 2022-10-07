// == Import
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { isLoading, restartQuizz } from '../../actions';

// composants
import Result from './Result';
// data, styles
import './style.scss';

function Results() {
  const dispatch = useDispatch();
  const imLoading = useSelector((state) => state.game.loading);
  const gameDatas = useSelector((state) => state.game.gameData);
  console.log(imLoading);

  const handleRestartClick = (event) => {
    dispatch(restartQuizz());
  };
  const handleScroll = (event) => {
    console.log(event.deltaY);
    console.log(event);
  };
  return (
    <div className="results">
      {!imLoading && (
        <>
          <div onWheel={handleScroll} className="cardContainer">
            <ul className="scrollZone">
              {
                gameDatas.map(
                  (gameData) => <li key={gameData.id}><Result {...gameData} /></li>,
                )
              }
            </ul>
          </div>
          <Link to="/Quizz">
            <button onClick={handleRestartClick} type="button" className="restartQuizz">Restart a Quizz</button>
          </Link>
        </>
      )}
      {imLoading && (
        <div className="loaderContainer">
          <h2>Loading ...</h2>
          <span className="loader" />
        </div>
      )}
    </div>
  );
}

export default Results;
