// == Import
import { Link } from 'react-router-dom';
// data, styles
import './style.scss';

function Footer() {
  return (
    <footer className="footer">
      <Link to="/legal-notice">Légal Notice</Link>
      <Link to="/faq" className="mid">FAQ</Link>
      <Link to="/about-us">About us ?</Link>
    </footer>
  );
}

export default Footer;
