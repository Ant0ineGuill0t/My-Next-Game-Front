// == Import
import Popup from 'reactjs-popup';
import { Navigate, useParams, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { toggleWishlist, toggleDonelist } from 'src/actions';
import previousArrow from 'src/assets/images/ArrowLeft.png';
import nextArrow from 'src/assets/images/ArrowRight.png';
import WishListImage from 'src/assets/images/WishlistButton.png';
import CheckListImage from 'src/assets/images/ChecklistButton.png';

// composants
// data, styles
import './style.scss';

function Game() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const gameData = useSelector((state) => state.game.gameData);
  const userData = useSelector((state) => state.user.userData);
  const checkListData = useSelector((state) => state.user.checklist);
  const wishListData = useSelector((state) => state.user.wishlist);
  const { paramSlug } = useParams();
  const filteredSlug = gameData.filter((data) => data.slug === paramSlug);
  const filteredSlugChecklist = checkListData.filter((data) => data.slug === paramSlug);
  const filteredSlugWishlist = wishListData.filter((data) => data.slug === paramSlug);
  const [keyIndex, setkeyIndex] = useState(0);
  const [open, setOpen] = useState(false);
  console.log(userData);
  let game = '';
  if (filteredSlug.length < 1
    && filteredSlugChecklist.length < 1 && filteredSlugWishlist.length < 1) {
    return (
      <Navigate to="/error" replace />
    );
  }
  if (filteredSlug.length > 0) {
    [game] = filteredSlug;
    console.log(game);
  }
  if (filteredSlugChecklist.length > 0) {
    [game] = filteredSlugChecklist;
  }
  if (filteredSlugWishlist.length > 0) {
    [game] = filteredSlugWishlist;
  }
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
  const handleWishlist = () => {
    const wishlist = { game: { name: game.name, apiId: game.id }, id: userData.id };
    dispatch(toggleWishlist(wishlist));
  };
  const handleDonelist = () => {
    const donelist = { game: { name: game.name, apiId: game.id }, id: userData.id };
    dispatch(toggleDonelist(donelist));
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
        <div className="game__title">
          <h2>{game.name}</h2>
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="game__lists"
          >
            <div
              className="lists__wishlist"
              onClick={handleWishlist}
            >
              <button className="listButton" type="button">
                <img className={filteredSlugWishlist.length > 0 ? 'list-img-checked' : 'list-img'} src={WishListImage} alt="wishlist button" />
              </button>
            </div>
            <div
              className="lists__donelist"
              onClick={handleDonelist}
            >
              <button className="listButton" type="button">

                <img className={filteredSlugChecklist.length > 0 ? 'list-img-checked' : 'list-img'} src={CheckListImage} alt="checklist button" />
              </button>
            </div>
          </div>

        </div>
        <img
          src={`https://images.igdb.com/igdb/image/upload/t_720p/${game.cover.image_id}.jpg`}
          alt={game.name}
          className="game__image"
        />
        <div className="game__left">
          <div className="game__left__release">
            <h3>Release Date :</h3>
            <p>{humanDateFormat}</p>
          </div>
          <div className="game__left__pegi">
            <h3>PEGI :</h3>
            <p>{game.first_release_date}</p>
          </div>
          <div className="game__left__type">
            <h3>Genre/themes :</h3>
            <ul>{game.genres.map(
              (genre) => <li key={genre.id}>{genre.name} </li>,
            )}
            </ul>
          </div>
          <div className="game__left__rate">
            <h3>Rating :</h3>
            <p>{gameNote}/100</p>
          </div>
          <div className="game__left__plateform">
            <h3>Plateforms :</h3>
            <ul>{game.platforms.map(
              (platform) => <li key={platform.id}>{platform.name} </li>,
            )}
            </ul>
          </div>
        </div>
        <div className="game__right">
          <p className="game__right__pitch">{game.summary}</p>
        </div>
        <div className="game__images">
          {game.screenshots.map(
            (screenshot, key, array) => (
              <Popup
                onOpen={() => isOpening(key)}
                closeOnDocumentClick
                key={screenshot.id}
                modal
                trigger={(
                  <img
                    src={`https://images.igdb.com/igdb/image/upload/t_720p/${screenshot.image_id}.jpg`}
                    className="game__images__gameplay"
                    alt="screenshots"
                  />
                )}
                onClose={closeModal}
                position="right center"
              >
                <a className="game__images_previous">
                  <img onClick={() => handlePreviousClick(key)} className="game__images__previous-image" src={previousArrow} alt="previousArrow" />
                </a>
                <img
                  src={`https://images.igdb.com/igdb/image/upload/t_720p/${array[keyIndex].image_id}.jpg`}
                  className="game__images__gameplay_big"
                  alt="screenshots"
                />
                <a className="game__images_next">
                  <img onClick={() => handleNextClick(key)} className="game__images__next-image" src={nextArrow} alt="nextArrow" />
                </a>
              </Popup>
            ),
          )}
        </div>
      </div>
      {/* <Link to="/quizz/results" className="return-results"> */}
      <button onClick={() => navigate(-1)} type="button" className="return-results">Return</button>
      {/* </Link> */}
    </>
  );
}

export default Game;
