import './style.scss';
import { useSelector, useDispatch } from 'react-redux';
import { displayUserProfileField } from 'src/actions';
import React, { useState } from 'react';
import Profil from '../../assets/images/Profil.png';

function Profile() {
  const dispatch = useDispatch();
  const emailField = useSelector((state) => state.user.emailField);
  const userData = useSelector((state) => state.user.userData);
  const [disable, setDisable] = useState(true);
  console.log(disable);
  return (
    <div className="profile-div">
      <h2 className="profile-title"> {userData.pseudo} place</h2>
      <div className="profile-intel">
        <label
          htmlFor="profile-picture"
          className="profile-intel-label"
        >
          <img src={Profil} alt="" className="profile-intel-picture" />
          <input
            type="file"
            name="checkbox-gear"
            id="profile-picture"
            className="profile-gear-input"
          />
        </label>
        <div className="profile-content">
          <label
            htmlFor="profile-content-email"
            className="profile-content-email"
          >
            Email :
            <input
              className="profile-content-email-input"
              id="profile-content-email-input"
              type="email"
              name="profile-content-email"
              autoComplete="on"
              placeholder={userData.email}
              disabled={disable}
            />
            <button
              type="button"
              onClick={() => setDisable(!disable)}
            >GEAR
            </button>
          </label>
          <label htmlFor="profile-content-password" className="profile-content-password">
            Password : 'utilisateur Password'
            <input
              className="profile-content-password-input"
              id="profile-content-password-input"
              type="password"
              name="profile-content-password"
              autoComplete="on"
            />
          </label>
          <label htmlFor="profile-content-confirm-password" className="profile-content-confirm-password">
            confirm your password
            <input
              className="profile-content-confirm-password-input"
              id="profile-content-confirm-password-input"
              type="confirm-password"
              name="profile-content-confirm-password"
              autoComplete="on"
            />
          </label>
          <label htmlFor="profile-content-pseudo" className="profile-content-pseudo">
            pseudo : 'utilisateur pseudo'
            <input
              className="profile-content-pseudo-input"
              id="profile-content-pseudo-input"
              type="pseudo"
              name="profile-content-pseudo"
              autoComplete="on"
            />
          </label>
        </div>
      </div>
      {/* <div className="profil-wishlist">
        <p>WishList</p>
      </div>
      <div className="profil-done">
        <p>Done</p>
      </div> */}
    </div>

  );
}

export default Profile;
