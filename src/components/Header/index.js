// == Import
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleLoginForm } from 'src/actions';
// data, styles
import './style.scss';
import Logo from '../../assets/images/Logo.png';
import Profil from '../../assets/images/Profil.png';

function Header() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.user.isOpen);

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
        <div className="login">
          <button
            type="button"
            className="login-button-close"
            onClick={() => dispatch(toggleLoginForm())}
          >
          <p className= "login-button-plus">+</p>
          </button>
          <label htmlFor="login-email">
            <input
              className="login-email"
              id="email"
              type="text"
              name="email"
              placeholder="Votre Email"
            />
          </label>
          <label htmlFor="login-password">
            <input
              className="login-password"
              id="password"
              type="text"
              name="password"
              placeholder="Votre password"
            />
          </label>
          <button type="button" className="login-button">
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
        </div>
      )}
    </header>
  );
}

export default Header;
