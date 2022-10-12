import './style.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useRef } from 'react';
import { editUser, updateUser } from 'src/actions';
import Gear from '../../assets/images/gear.png';
import Card from './card';

function Profile() {
  const dispatch = useDispatch();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const pseudoRef = useRef(null);
  const userData = useSelector((state) => state.user.userData);
  const [disableEmail, setDisableEmail] = useState(true);
  const [disablePassword, setDisablePassword] = useState(true);
  const [disablePseudo, setDisablePseudo] = useState(true);
  const [disableSubmitButton, setDisableSubmitButton] = useState(false);
  const editAvatar = useSelector((state) => state.user.userData.avatar);
  const editEmail = useSelector((state) => state.user.userData.email);
  // const editPassword = useSelector((state) => state.user.userData.password);
  const editPseudo = useSelector((state) => state.user.userData.pseudo);
  const gameDatas = useSelector((state) => state.game.gameData);
  function handleSubmit(event) {
    event.preventDefault();
    dispatch(updateUser());
    console.log('submit changements');
  }
  function handleEmail() {
    setDisableEmail(!disableEmail);
    setDisableSubmitButton(true);
    setTimeout(() => emailRef.current.focus(), 0);
  }
  function handlePseudo() {
    setDisablePseudo(!disablePseudo);
    setDisableSubmitButton(true);
    setTimeout(() => pseudoRef.current.focus(), 0);
  }
  function handlePassword() {
    setDisablePassword(!disablePassword);
    setDisableSubmitButton(true);
    setTimeout(() => passwordRef.current.focus(), 0);
  }
  return (
    <div className="profile">
      <h2 className="profile__title"> {userData.pseudo} place</h2>
      <form
        className="profile__form"
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
            onChange={(event) => dispatch(editUser(event.current.target, 'avatar'))}
          />
        </label>
        <div className="profile-content">
          <label
            htmlFor="profile-content-email"
            className="profile-content-email"
          >
            Email :
            <input
              className={disableEmail ? 'profile-content-email-input' : 'profile-content-email-input  borderInput'}
              id="profile-content-email-input"
              type="email"
              ref={emailRef}
              name="profile-content-email"
              autoComplete="on"
              placeholder={userData.email}
              disabled={disableEmail}
              value={editEmail}
              onChange={(event) => dispatch(editUser(event.current.target, 'email'))}
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
              className={disablePassword ? 'profile-content-password-input' : 'profile-content-password-input  borderInput'}
              id="profile-content-password-input"
              ref={passwordRef}
              type="password"
              name="profile-content-password"
              autoComplete="on"
              placeholder=" ****** "
              value=""
              disabled={disablePassword}
              onChange={(event) => dispatch(editUser(event.current.target, 'password'))}
            />
            <button
              type="button"
              onClick={handlePassword}
              className="gear-button"
            ><img src={Gear} alt="" className="gear" />
            </button>
          </label>
          <label htmlFor="profile-content-confirm-password" className={disablePassword ? 'password-off' : 'profile-content-confirm-password-label'}>
            confirm your password :
            <input
              className={disablePassword ? 'profile-content-confirm-password-input' : 'profile-content-confirm-password-input  borderInput'}
              id="profile-content-confirm-password-input"
              type="password"
              name="profile-content-confirm-password"
              placeholder=" ****** "
              autoComplete="on"
            />
          </label>
          <label htmlFor="profile-content-pseudo" className="profile-content-pseudo">
            Pseudo :
            <input
              className={disablePseudo ? 'profile-content-pseudo-input' : 'profile-content-pseudo-input  borderInput'}
              id="profile-content-pseudo-input"
              type="pseudo"
              ref={pseudoRef}
              placeholder={userData.pseudo}
              disabled={disablePseudo}
              name="profile-content-pseudo"
              autoComplete="on"
              value={editPseudo}
              onChange={(event) => dispatch(editUser(event.current.target, 'pseudo'))}
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
      <div className="profil-wishlist">
        <p>WishList</p>
        <ul className="scrollZoneWishlist">
          {
            gameDatas.map(
              (gameData) => <li key={gameData.id}><Card {...gameData} /></li>,
            )
          }
        </ul>
      </div>
      <div className="profil-done">
        <p>Done</p>
        <ul className="scrollZoneChecklist">
          {
            gameDatas.map(
              (gameData) => <li key={gameData.id}><Card {...gameData} /></li>,
            )
          }
        </ul>
      </div>
    </div>

  );
}

export default Profile;
