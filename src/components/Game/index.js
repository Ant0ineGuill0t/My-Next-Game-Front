// == Import
import { Navigate,useParams } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
// composants
// data, styles
import './style.scss';
function Game({datas}) {
  const { paramSlug } = useParams();
  const filteredSlug = datas.filter(data => data.slug === paramSlug );
  console.log(filteredSlug)

  if (filteredSlug.length < 1) {
    return (
      <Navigate to="/error" replace />
    );
  }
  const  game = filteredSlug[0];
  return (
    <div className="game">
      <h2>{game.name}</h2>
      <img src={game.picture} alt={game.name} className="gameImg" />
      <div className="gameLeft">
      <h3>Plateformes :</h3>
        <ul>{game.plateforms.map(
          (plateform) => <li>{plateform} </li>,
        )}</ul>
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
          (gameplay) => <img src={gameplay} className="gameplay"/>,
        )}
      </div>
      
    </div>
  );
};
Game.propTypes = {
  datas: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
export default Game;
