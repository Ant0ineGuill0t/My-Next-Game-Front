// == Import
import { Link } from 'react-router-dom';
// data, styles
import './style.scss';
import Logo from '../../assets/images/Logo.png';
import Profil from '../../assets/images/Profil.png';

function Header() {
  return (
    <header className="header">
      <Link to="/"><h1 className="h1"><img src={Logo} alt="" /></h1></Link>
      <img className="userButton" src={Profil} alt="logo du profil" />
    </header>
  );
}

export default Header;
