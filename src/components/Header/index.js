// == Import
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  toggleLoginForm,
  changeFieldUserLogin,
  logIn,
  logOut,
  clearLogStore,
  toggleIsLogged,
  unsetErrorMessage,
  unsetErrorFormMessage,
  unsetValidUserForm,
} from 'src/actions';
// data, styles
import './style.scss';
import Logo from '../../assets/images/Logo.png';
import Profil from '../../assets/images/Profil.png';
import { useState } from 'react';

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isOpen = useSelector((state) => state.user.isOpen);
  const userEmail = useSelector((state) => state.user.email);
  const userPassword = useSelector((state) => state.user.password);
  const isLogged = useSelector((state) => state.user.isLogged);
  const errorMessage = useSelector((state) => state.user.errorMessage);
  const userPseudo = useSelector((state) => state.user.userData.pseudo);
  const editAvatar = useSelector((state) => state.user.userData.avatar);
  const [isMenu, setIsMenu] = useState(false);

  const handleClick = () => {
    dispatch(unsetErrorMessage());
    dispatch(toggleLoginForm());
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(logIn());
  };
  const handleLogout = () => {
    dispatch(logOut());
    dispatch(clearLogStore());
    dispatch(toggleIsLogged());
    setIsMenu(false);
  };
  const handleLogin = () => {
    dispatch(toggleLoginForm());
    dispatch(unsetValidUserForm());
  };
  const handleAvatarClick = () => {
    setIsMenu(!isMenu);
    console.log(isMenu);
  };
  return (
    <header className="header">
      <Link to="/"><h1 className="h1"><img className="header-logo" src={Logo} alt="" onClick={() => dispatch(unsetErrorFormMessage())} /></h1></Link>
      {!isLogged && (
        <div>
          <button
            type="button"
            className={isOpen ? 'userButton_off' : 'userButton_on'}
            onClick={handleLogin}
          >
            <img className="logoProfil" src={Profil} alt="logo du profil" />
          </button>
          <form
            className={isOpen ? 'login_on' : 'login_off'}
            onSubmit={handleSubmit}
          >
            <button
              type="button"
              className="login-button-close"
              onClick={handleClick}
            >
              <p className="login-button-plus">+</p>
            </button>
            <label htmlFor="login-email">
              <input
                className="login-email"
                id="email"
                type="text"
                name="email"
                value={userEmail}
                onChange={(event) => {
                  dispatch(changeFieldUserLogin(event.target.value, 'email'));
                }}
                placeholder="Email"
              />
            </label>
            <label htmlFor="login-password">
              <input
                className="login-password"
                id="password"
                type="password"
                name="password"
                autoComplete="on"
                value={userPassword}
                onChange={(event) => {
                  dispatch(changeFieldUserLogin(event.target.value, 'password'));
                }}
                placeholder="Password"
              />
            </label>
            <p className={errorMessage ? 'error-on' : 'error-off'}>Incorrect password/email !</p>
            <button type="submit" className="login-button">
              Log In
            </button>
            <Link to="/login-form">
              <button
                type="button"
                className="create-user-button"
                onClick={() => dispatch(toggleLoginForm())}
              >Sign In
              </button>
            </Link>
          </form>
        </div>
      )}
      {isLogged && (
        <div className="isLogged-div">
          <p className="hello">Hello {userPseudo} !</p>
          <img onClick={handleAvatarClick} className="avatar" src={editAvatar} alt="avatar" />
          <div className={isMenu ? 'profile-menu_on' : 'profile-menu_off'}>
            <button
              type="button"
              className="logout-button"
              onClick={handleLogout}
            >
              Log out
            </button>
            <button
              type="button"
              className="profil-button"
              onClick={() => {
                navigate('/profile');
                setIsMenu(false);
              }}
            >
              Go to profile
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
