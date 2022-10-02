// == Import
import { Navigate, useParams, Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
// composants
// data, styles
import './style.scss';

function Game({ datas }) {
  const { paramSlug } = useParams();
  const filteredSlug = datas.filter((data) => data.slug === paramSlug);

  if (filteredSlug.length < 1) {
    return (
      <Navigate to="/error" replace />
    );
  }
  const game = filteredSlug[0];
  return (
    <>
      <div className="game">
        <h2 className="gameTitle">{game.name}</h2>
        <img src={game.picture} alt={game.name} className="gameImg" />
        <div className="gameLeft">
          <h3>Plateformes :</h3>
          <ul>{game.plateforms.map(
            (plateform) => <li key={plateform}>{plateform} </li>,
          )}
          </ul>
          <h3>Date de sortie :</h3>
          <p>{game.release}</p>
          <h3>PEGI :</h3>
          <p>{game.pegi}</p>
          <h3>Genre/themes :</h3>
          <p>{game.release}</p>
          <h3>Note :</h3>
          <p>{game.rate}</p>
        </div>
        <div className="gameRight">
          <p className="pitch">{game.pitch}</p>
        </div>
        <div className="images">
          {game.gameplays.map(
            (gameplay) => <img src={gameplay} key={gameplay} className="gameplay" alt="screenshots" />,
          )}
        </div>
      </div>
      <Link to="/quizz/results" className="returnResults"><button type="button" className="returnResultsButton">Retour</button></Link>
    </>
  );
}

Game.propTypes = {
  datas: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default Game;
