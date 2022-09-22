// == Import
import { Link } from 'react-router-dom';
// data, styles
import './style.scss';
import Logo from '../../assets/images/Logo.png';

function Header() {
  return (
    <header className="header">
      <Link to="/"><h1 className="h1"><img src={Logo} alt="" /></h1></Link>
      <button type="button" className="userButton">User</button>
    </header>
  );
}

export default Header;
