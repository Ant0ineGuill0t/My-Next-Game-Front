// == Import
import { Link } from 'react-router-dom';
// data, styles
import './style.scss';

function Footer() {
  return (
    <footer className="footer">
      <Link to="/legal-notice">Mentions Légales</Link>
      <Link to="/faq" className="mid">FAQ</Link>
      <Link to="/about-us">Qui sommes-nous ?</Link>
    </footer>
  );
}

export default Footer;
