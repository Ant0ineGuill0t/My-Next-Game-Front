// == Import
import Popup from 'reactjs-popup';
import { Navigate, useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import previousArrow from 'src/assets/images/ArrowLeft.png';
import nextArrow from 'src/assets/images/ArrowRight.png';
// composants
// data, styles
import './style.scss';

function Game() {
  const gameData = useSelector((state) => state.game.gameData);
  const { paramSlug } = useParams();
  const filteredSlug = gameData.filter((data) => data.slug === paramSlug);
  const [keyIndex, setkeyIndex] = useState(0);
  const [open, setOpen] = useState(false);
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

  const handlePreviousClick = () => {
    if (keyIndex > 0) {
      setkeyIndex(keyIndex - 1);
    }
    else {
      setkeyIndex(game.screenshots.length - 1);
    }
  };
  const handleNextClick = () => {
    if (keyIndex < game.screenshots.length - 1) {
      setkeyIndex(keyIndex + 1);
    }
    else {
      setkeyIndex(0);
    }
  };

  const isOpening = (key) => {
    setkeyIndex(key);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };
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
            (screenshot, key, array) => (
              <Popup onOpen={() => isOpening(key)} closeOnDocumentClick key={screenshot.id} modal trigger={<img src={`https://images.igdb.com/igdb/image/upload/t_720p/${screenshot.image_id}.jpg`} className="gameplay" alt="screenshots" />} onClose={closeModal} position="right center">
                <a className="prev"><img onClick={() => handlePreviousClick(key)} className="prevImg" src={previousArrow} alt="previousArrow" /></a>
                <img src={`https://images.igdb.com/igdb/image/upload/t_720p/${array[keyIndex].image_id}.jpg`} className="gameplayBig" alt="screenshots" />
                <a className="next"><img onClick={() => handleNextClick(key)} className="nextImg" src={nextArrow} alt="nextArrow" /></a>
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
