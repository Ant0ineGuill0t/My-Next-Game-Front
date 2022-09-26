// == Import
// data, styles
import './style.scss';
import TestImage from '../../../assets/images/eldenring.png';
import WishListImage from '../../../assets/images/WishlistButton.png';
import CheckListImage from '../../../assets/images/ChecklistButton.png';

function Result() {
  return (
    <div className="card">
      <img className="cardImg" src={TestImage} alt="" />
      <h3 className="gameTitle">Elden Ring</h3>
      <div className="circle">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
          <circle className="stroke" cx="60" cy="60" r="40" strokeDasharray="324" />
        </svg>
        <p className="note">90%</p>
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
      <p className="platform">Steam/Epic</p>
    </div>
  );
}

export default Result;
