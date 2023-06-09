import './style.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import { editUser, updateUser } from 'src/actions';
import Gear from '../../assets/images/gear.png';
import Card from './card';

function Profile() {
  const dispatch = useDispatch();
  const [disableEmail, setDisableEmail] = useState(true);
  const [disablePassword, setDisablePassword] = useState(true);
  const [disablePseudo, setDisablePseudo] = useState(true);
  const [disableSubmitButton, setDisableSubmitButton] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const pseudoRef = useRef(null);
  const userData = useSelector((state) => state.user.userData);
  const editUserData = useSelector((state) => state.user.editUserData);
  const isLogged = useSelector((state) => state.user.isLogged);
  const wishlists = useSelector((state) => state.user.wishlist);
  const checklists = useSelector((state) => state.user.checklist);
  function handleSubmit(event) {
    event.preventDefault();
    dispatch(updateUser(editUserData));
    setDisableEmail(true);
    setDisablePseudo(true);
    setDisablePassword(true);
    setDisableSubmitButton(false);
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

  if (!isLogged) {
    return (
      <Navigate to="/" replace />
    );
  }

  return (
    <div className="profile-div">
      <h2 className="profile__title"> {userData.pseudo} place</h2>
      <form
        className="profile__form"
        onSubmit={handleSubmit}
      >
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
              onChange={(event) => dispatch(editUser(event.target.value, 'email'))}
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
              disabled={disablePassword}
              onChange={(event) => dispatch(editUser(event.target.value, 'password'))}
            />
            <button
              type="button"
              onClick={handlePassword}
              className="gear-button"
            ><img src={Gear} alt="" className="gear" />
            </button>
          </label>
          <label htmlFor="profile-content-confirm-password" className={disablePassword ? 'password-off' : 'profile-content-confirm-password-label'}>
            Confirm your password :
            <input
              className={disablePassword ? 'profile-content-confirm-password-input' : 'profile-content-confirm-password-input  borderInput'}
              id="profile-content-confirm-password-input"
              type="password"
              name="profile-content-confirm-password"
              placeholder=" ****** "
              autoComplete="on"
              onChange={(event) => dispatch(editUser(event.target.value, 'confirmPassword'))}
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
              onChange={(event) => dispatch(editUser(event.target.value, 'pseudo'))}
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
            wishlists.map(
              (wishlist) => <li key={wishlist.id}><Card {...wishlist} /></li>,
            )
          }
        </ul>
      </div>
      <div className="profil-done">
        <p>Done</p>
        <ul className="scrollZoneChecklist">
          {
            checklists.map(
              (checklist) => <li key={checklist.id}><Card {...checklist} /></li>,
            )
            }
        </ul>
      </div>
    </div>

  );
}

export default Profile;
