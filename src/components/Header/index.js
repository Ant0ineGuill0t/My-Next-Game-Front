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
      <button
        type="button"
        className={isOpen ? 'userButton_off' : 'userButton_on'}
        onClick={() => dispatch(toggleLoginForm())}
      >
        <img src={Profil} alt="logo du profil" />
      </button>
      <div className={isOpen ? 'login_on' : 'login_off'}>
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
            placeholder="Votre Email"
          />
        </label>
        <label htmlFor="login-password">
          <input
            className="login-password"
            id="password"
            type="password"
            name="password"
            placeholder="Votre password"
          />
        </label>
        <button type="button" className="login-button">
          Connexion
        </button>
        <Link to="/login-form">
          <p>Créer un compte</p>
        </Link>
      </div>
    </header>
  );
}

export default Header;
