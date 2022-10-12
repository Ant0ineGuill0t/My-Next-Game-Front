// data, styles
import './style.scss';
import ErrorLogo from 'src/assets/images/404.gif';

function Error() {
  return (
    <img src={ErrorLogo} alt="logo de la 404" className="error__image" />
  );
}

export default Error;
