// == Import
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// data, styles
import './style.scss';
import Logo from '../../assets/images/Logo.png';
import Profil from '../../assets/images/Profil.png';

function Header() {
  const isOpen = useSelector((state) => state.user.isOpen);
  console.log(isOpen);
  return (
    <header className="header">
      <Link to="/"><h1 className="h1"><img src={Logo} alt="" /></h1></Link>
      {!isOpen && (
        <img className="userButton" src={Profil} alt="logo du profil" />
      )}
      {isOpen && (
        <div className="login">
          <button
            type="button"
            className="login-button-close"
          >
            +
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
          <p>Créer un compte</p>
        </div>
      )}

    </header>
  );
}

export default Header;
