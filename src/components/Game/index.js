// == Import
import Popup from 'reactjs-popup';
import { Navigate, useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
// composants
// data, styles
import './style.scss';

function Game() {
  const gameData = useSelector((state) => state.game.gameData);
  const { paramSlug } = useParams();
  const filteredSlug = gameData.filter((data) => data.slug === paramSlug);

  if (filteredSlug.length < 1) {
    return (
      <Navigate to="/error" replace />
    );
  }
  const game = filteredSlug[0];
  const gameNote = Math.round(game.aggregated_rating);
  const millisecondsDate = game.first_release_date * 1000;
  const releaseDate = new Date(millisecondsDate);
  const humanDateFormat = releaseDate.getUTCFullYear();
  console.log(releaseDate);
  return (
    <>
      <div className="game">
        <h2 className="gameTitle">{game.name}</h2>
        <img src={`https://images.igdb.com/igdb/image/upload/t_720p/${game.cover.image_id}.jpg`} alt={game.name} className="gameImg" />
        <div className="gameLeft">
          <div className="gameLeftRelease">
            <h3>Release Date :</h3>
            <p>{humanDateFormat}</p>
          </div>
          <div className="gameLeftPegi">
            <h3>PEGI :</h3>
            <p>{game.first_release_date}</p>
          </div>
          <div className="gameLeftType">
            <h3>Genre/themes :</h3>
            <ul>{game.genres.map(
              (genre) => <li key={genre.id}>{genre.name} </li>,
            )}
            </ul>
          </div>
          <div className="gameLeftRate">
            <h3>Rating :</h3>
            <p className="noteGame">{gameNote}/100</p>
          </div>
          <div className="gameLeftPlateform">
            <h3>Plateforms :</h3>
            <ul>{game.platforms.map(
              (platform) => <li key={platform.id}>{platform.name} </li>,
            )}
            </ul>
          </div>
        </div>
        <div className="gameRight">
          <p className="pitch">{game.summary}</p>
        </div>
        <div className="images">
          {game.screenshots.map(
            (screenshot) => (
              <Popup key={screenshot.id} modal trigger={<img src={`https://images.igdb.com/igdb/image/upload/t_720p/${screenshot.image_id}.jpg`} className="gameplay" alt="screenshots" />} position="right center">
                <img src={`https://images.igdb.com/igdb/image/upload/t_720p/${screenshot.image_id}.jpg`} className="gameplayBig" alt="screenshots" />
              </Popup>
            ),
          )}
        </div>
      </div>
      <Link to="/quizz/results" className="returnResults"><button type="button" className="returnResultsButton">Return</button></Link>
    </>
  );
}

export default Game;
