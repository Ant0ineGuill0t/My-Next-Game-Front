// == Import
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleWishlist } from 'src/actions';
// data, styles
import './style.scss';
import WishListImage from '../../../assets/images/WishlistButton.png';
import CheckListImage from '../../../assets/images/ChecklistButton.png';

function Result({
  id,
  cover,
  name,
  slug,
  platforms,
  aggregated_rating,
}) {
  const gameNote = Math.round(aggregated_rating);
  const isLogged = useSelector((state) => state.user.isLogged);
  const user = useSelector((state) => state.user.userData);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleWishlist = () => {
    const wishlist = { game: { name: name, apiId: id }, id: user.id };
    dispatch(toggleWishlist(wishlist));
  };
  return (
    <div
      className="card"
      onClick={() => {
        navigate(`/game/${slug}`);
      }}
    >
      <img className="card__image" src={`https://images.igdb.com/igdb/image/upload/t_720p/${cover.image_id}.jpg`} alt="" />
      <h3 className="card__title">{name}</h3>
      <div className="card__circle">
        <svg>
          <circle className="circle__stroke" cx="60" cy="60" r="40" strokeDasharray={gameNote * 3.6} />
        </svg>
        <p className="circle__rate">{gameNote}/100</p>
      </div>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={isLogged ? 'card__lists' : 'card__lists_hide'}
      >
        <div
          className="lists__wishlist"
          onClick={handleWishlist}
        >
          <button className="listButton" type="button">
            <img className="list-img" src={WishListImage} alt="wishlist button" />
          </button>
        </div>
        <div
          className="lists__donelist"
          onClick={() => {
            console.log('ajout donelist');
          }}
        >
          <button className="listButton" type="button">

            <img className="list-img" src={CheckListImage} alt="checklist button" />
          </button>
        </div>
      </div>
      <div className="card__platforms">
        {
          platforms.slice(0, 4).map(
            (plateform) => <p key={plateform.id}>{plateform.name}</p>,
          )
        }
      </div>
    </div>
  );
}

Result.propTypes = {
  cover: PropTypes.shape({
    image_id: PropTypes.string,
  }),
  id: PropTypes.number.isRequired,
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
