import './style.scss';
import Logo from '../../assets/images/Logo.png';

function Header() {
  return (
    <header className="header">
      <a><h1 className="h1"><img src={Logo} alt="" /></h1></a>
      <button type="button" className="userButton">User</button>
    </header>
  );
}

export default Header;
