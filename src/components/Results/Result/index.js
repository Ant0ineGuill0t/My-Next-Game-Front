// == Import
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// data, styles
import './style.scss';
// import WishListImage from '../../../assets/images/WishlistButton.png';
// import CheckListImage from '../../../assets/images/ChecklistButton.png';

function Result({
  cover,
  name,
  slug,
  platforms,
  aggregated_rating,
}) {
  const gameNote = Math.round(aggregated_rating);
  return (
    <Link to={`/game/${slug}`}>
      <div className="card">
        <img className="cardImg" src={`https://images.igdb.com/igdb/image/upload/t_720p/${cover.image_id}.jpg`} alt="" />
        <h3 className="gamesTitle">{name}</h3>
        <div className="circle">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle className="stroke" cx="60" cy="60" r="40" strokeDasharray={gameNote * 3.6} />
          </svg>
          <p className="note">{gameNote}/100</p>
        </div>
        {/* <p className='gameNote'>90/100</p> */}
        {/* <div className='gameWishlist'>
        <img src={WishListImage} alt="wishlistButton" />
        <p>Ajouter à la wishlist</p>
      </div>
      <div className='gameWishlist'>
        <img src={CheckListImage} alt="wishlistButton" />
        <p>Ajouter à la checklist</p>
      </div> */}
        {
          platforms.map(
            (plateform) => <p key={plateform.id}>{plateform.name}</p>,
          )
        }
      </div>
    </Link>
  );
}

Result.propTypes = {
  cover: PropTypes.shape({
    image_id: PropTypes.string,
  }),
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  aggregated_rating: PropTypes.number.isRequired,
  // rate: PropTypes.number.isRequired,
  platforms: PropTypes.arrayOf(
    PropTypes.shape({

      id: PropTypes.number.isRequired,
    }),
  ),
};
Result.defaultProps = {
  platforms: [{ id: 1 }],
  cover: { url: 'https://cdn.pixabay.com/photo/2014/04/02/10/44/cross-mark-304374_960_720.png' },
};

export default Result;
