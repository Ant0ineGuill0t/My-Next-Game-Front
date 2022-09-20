import './style.scss';

function Header() {
  return (
    <header className="header">
      <a><h1 className="h1"><img src="Logo.png" alt="" /></h1></a>
      <button type="button" className="userButton">User</button>
    </header>
  );
}

export default Header;
