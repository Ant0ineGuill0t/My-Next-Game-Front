// == Import
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { unsetErrorFormMessage } from 'src/actions';
// data, styles
import './style.scss';

function Footer() {
  const dispatch = useDispatch();
  return (
    <footer className="footer">
      <Link to="/legal-notice" onClick={() => dispatch(unsetErrorFormMessage())}>Mentions Légales</Link>
      <Link to="/faq" onClick={() => dispatch(unsetErrorFormMessage())} className="mid">FAQ</Link>
      <Link to="/about-us" onClick={() => dispatch(unsetErrorFormMessage())}>Qui sommes-nous ?</Link>
    </footer>
  );
}

export default Footer;
