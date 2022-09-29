// == Import
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleLoginForm, changeFieldUserLogin, logIn } from 'src/actions';
// data, styles
import './style.scss';
import Logo from '../../assets/images/Logo.png';
import Profil from '../../assets/images/Profil.png';

function Header() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.user.isOpen);
  const userEmail = useSelector((state) => state.user.email);
  const userPassword = useSelector((state) => state.user.password);
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(logIn());
  };
  return (
    <header className="header">
      <Link to="/"><h1 className="h1"><img src={Logo} alt="" /></h1></Link>
      {!isOpen && (
        <button
          type="button"
          className="userButton"
          onClick={() => dispatch(toggleLoginForm())}
        >
          <img src={Profil} alt="logo du profil" />
        </button>
      )}
      {isOpen && (
        <form
          className="login"
          onSubmit={handleSubmit}
        >
          <button
            type="button"
            className="login-button-close"
            onClick={() => dispatch(toggleLoginForm())}
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
              placeholder="Votre Email"
              onChange={(event) => {
                dispatch(changeFieldUserLogin(event.target.value, 'email'));
              }}
            />
          </label>
          <label htmlFor="login-password">
            <input
              className="login-password"
              id="password"
              type="password"
              name="password"
              value={userPassword}
              placeholder="Votre password"
              onChange={(event) => {
                dispatch(changeFieldUserLogin(event.target.value, 'password'));
              }}
            />
          </label>
          <button
            type="submit"
            className="login-button"
          >
            connexion
          </button>
          <Link to="/login-form">
            <button
              type="button"
              className="create-button"
              onClick={() => dispatch(toggleLoginForm())}
            >Créer un compte
            </button>
          </Link>
        </form>
      )}
    </header>
  );
}

export default Header;
