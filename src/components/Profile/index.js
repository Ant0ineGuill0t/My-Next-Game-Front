import './style.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import Profil from '../../assets/images/Profil.png';
import Gear from '../../assets/images/gear.png';

function Profile() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);
  const [disableEmail, setDisableEmail] = useState(true);
  const [disablePassword, setDisablePassword] = useState(true);
  const [disablePseudo, setDisablePseudo] = useState(true);
  const [disableSubmitButton, setDisableSubmitButton] = useState(false);
  function handleEmail() {
    setDisableEmail(!disableEmail);
    setDisableSubmitButton(true);
  }
  function handlePseudo() {
    setDisablePseudo(!disablePseudo);
    setDisableSubmitButton(true);
  }
  function handlePassword() {
    setDisablePassword(!disablePassword);
    setDisableSubmitButton(true);
  }
  return (
    <div className="profile-div">
      <h2 className="profile-title"> {userData.pseudo} place</h2>
      <form className="profile-intel">
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
              disabled={disableEmail}
            />
            <button
              type="button"
              onClick={handleEmail}
              className="gear-button"
            ><img src={Gear} alt="" className="gear" />
            </button>
          </label>
          <label htmlFor="profile-content-password" className="profile-content-password">
            Password :
            <input
              className="profile-content-password-input"
              id="profile-content-password-input"
              type="password"
              name="profile-content-password"
              autoComplete="on"
              placeholder=" ****** "
              disabled={disablePassword}
            />
            <button
              type="button"
              onClick={handlePassword}
              className="gear-button"
            ><img src={Gear} alt="" className="gear" />
            </button>
          </label>
          <label htmlFor="profile-content-confirm-password" className={disablePassword ? 'password-off' : 'profile-content-confirm-password-input'}>
            confirm your password :
            <input
              className="profile-content-confirm-password-input"
              id="profile-content-confirm-password-input"
              type="password"
              name="profile-content-confirm-password"
              placeholder=" ****** "
              autoComplete="on"
            />
          </label>
          <label htmlFor="profile-content-pseudo" className="profile-content-pseudo">
            pseudo :
            <input
              className="profile-content-pseudo-input"
              id="profile-content-pseudo-input"
              type="pseudo"
              placeholder={userData.pseudo}
              disabled={disablePseudo}
              name="profile-content-pseudo"
              autoComplete="on"
            />
            <button
              type="button"
              onClick={handlePseudo}
              className="gear-button"
            ><img src={Gear} alt="" className="gear" />
            </button>
          </label>
          <button
            type="submit"
            className={disableSubmitButton ? 'submit-on' : 'submit-off'}
          >Submit changes
          </button>
        </div>
      </form>
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
