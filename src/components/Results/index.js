// == Import
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { restartQuizz } from '../../actions';
// composants
import Result from './Result';
// data, styles
import './style.scss';

function Results() {
  const dispatch = useDispatch();
  const imLoading = useSelector((state) => state.game.loading);
  const gameDatas = useSelector((state) => state.game.gameData);
  const GameFound = useSelector((state) => state.game.gameFound);
  const handleRestartClick = () => {
    dispatch(restartQuizz());
  };
  const handleScroll = (event) => {
    console.log(event.deltaY);
    console.log(event);
  };
  return (
    <div className="results">
      {!imLoading && GameFound && (
        <>
          <div onWheel={handleScroll} className="results__card-container">
            <ul className="card-container__scrollZone">
              {
                gameDatas.map(
                  (gameData) => <li key={gameData.id}><Result {...gameData} /></li>,
                )
              }
            </ul>
          </div>
          <Link to="/Quizz">
            <button onClick={handleRestartClick} type="button" className="card-container__restart">Restart a Quizz</button>
          </Link>
        </>
      )}
      {imLoading && (
        <div className="results__loader-container">
          <h2>Loading ...</h2>
          <span className="loader-container__loader" />
        </div>
      )}
      {!imLoading && !GameFound && (
        <div className="results">
          <p>No game Found...</p>
          <Link to="/Quizz">
            <button onClick={handleRestartClick} type="button" className="card-container__restart">Restart a Quizz</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Results;
