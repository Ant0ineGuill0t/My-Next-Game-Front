// == Import
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// data, styles
import './style.scss';
// import WishListImage from '../../../assets/images/WishlistButton.png';
// import CheckListImage from '../../../assets/images/ChecklistButton.png';

function Result({
  picture,
  name,
  slug,
  rate,
  plateforms,
}) {
  return (
    <Link to={`/game/${slug}`}>
      <div className="card">
        <img className="cardImg" src={picture} alt="" />
        <h3 className="gamesTitle">{name}</h3>
        <div className="circle">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle className="stroke" cx="60" cy="60" r="40" strokeDasharray={rate * 3.6} />
          </svg>
          <p className="note">{rate}/100</p>
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
          plateforms.map(
            (plateform) => <p key={plateform}>{plateform}</p>,
          )
        }
      </div>
    </Link>
  );
}

Result.propTypes = {
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  plateforms: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Result;
