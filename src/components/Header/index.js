// == Import
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleLoginForm, changeFieldUserLogin, logIn, logOut, clearLogStore, toggleIsLogged, unsetErrorMessage } from 'src/actions';
// data, styles
import './style.scss';
import Logo from '../../assets/images/Logo.png';
import Profil from '../../assets/images/Profil.png';

function Header() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.user.isOpen);
  const userEmail = useSelector((state) => state.user.email);
  const userPassword = useSelector((state) => state.user.password);
  const isLogged = useSelector((state) => state.user.isLogged);
  const errorMessage = useSelector((state) => state.user.errorMessage);

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
  };
  return (
    <header className="header">
      <Link to="/"><h1 className="h1"><img className="header-logo" src={Logo} alt="" /></h1></Link>
      {!isLogged && (
        <div>
          <button
            type="button"
            className={isOpen ? 'userButton_off' : 'userButton_on'}
            onClick={() => dispatch(toggleLoginForm())}
          >
            <img src={Profil} alt="logo du profil" />
          </button><form
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
                placeholder="Votre Email"
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
                placeholder="Votre password"
              />
            </label>
            <p className={errorMessage ? 'error-on' : 'error-off'}>Mot de passe ou Email incorrect</p>
            <button type="submit" className="login-button">
              Connexion
            </button>
            <Link to="/login-form">
              <button
                type="button"
                className="create-user-button"
                onClick={() => dispatch(toggleLoginForm())}
              >Créer un compte
              </button>
            </Link>
          </form>
        </div>
      )}
      {isLogged && (
        <div>
          <p>Hello Admin !</p>
          <button
            type="button"
            className="logout-button"
            onClick={handleLogout}
          >
            Déconnexion
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
