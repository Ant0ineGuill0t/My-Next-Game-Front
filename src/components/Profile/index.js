import './style.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { editUser } from 'src/actions';
import Profil from '../../assets/images/Profil.png';
import Gear from '../../assets/images/gear.png';

function Profile() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);
  const [disableEmail, setDisableEmail] = useState(true);
  const [disablePassword, setDisablePassword] = useState(true);
  const [disablePseudo, setDisablePseudo] = useState(true);
  const [disableSubmitButton, setDisableSubmitButton] = useState(false);
  const editAvatar = useSelector((state) => state.user.userData.avatar);
  const editEmail = useSelector((state) => state.user.userData.email);
  const editPassword = useSelector((state) => state.user.userData.password);
  const editPseudo = useSelector((state) => state.user.userData.pseudo);
  function handleSubmit(event) {
    event.preventDefault();
    console.log('submit changements');
  }
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
      <form
        className="profile-intel"
        onSubmit={handleSubmit}
      >
        <label
          htmlFor="profile-picture"
          className="profile-intel-label"
        >
          <img src={editAvatar} alt="" className="profile-intel-picture" />
          <input
            type="file"
            name="checkbox-gear"
            id="profile-picture"
            className="profile-gear-input"
            value={editAvatar}
            onChange={() => dispatch(editUser(editAvatar, 'avatar'))}
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
              value={editEmail}
              onChange={() => dispatch(editUser(editEmail, 'email'))}
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
              value={editPassword}
              onChange={() => dispatch(editUser(editPassword, 'password'))}
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
              value={editPseudo}
              onChange={() => dispatch(editUser(editPseudo, 'pseudo'))}
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
