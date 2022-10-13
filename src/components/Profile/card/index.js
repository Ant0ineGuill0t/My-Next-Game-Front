// == Import
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// data, styles
import './style.scss';

function Card({
  cover,
  name,
  slug,
}) {
  return (
    <Link to={`/game/${slug}`}>
      <div className="cardList">
        <img className="profile__cardImg" src={`https://images.igdb.com/igdb/image/upload/t_720p/${cover.image_id}.jpg`} alt="" />
        <h3 className="gamesTitleWishlist">{name}</h3>
      </div>
    </Link>
  );
}

Card.propTypes = {
  cover: PropTypes.shape({
    image_id: PropTypes.string,
  }),
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};
Card.defaultProps = {
  cover: { url: 'https://cdn.pixabay.com/photo/2014/04/02/10/44/cross-mark-304374_960_720.png' },
};

export default Card;
