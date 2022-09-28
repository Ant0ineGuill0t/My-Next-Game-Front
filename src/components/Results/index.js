// == Import
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// composants
import Result from './Result';
// data, styles
import './style.scss';

function Results({ datas }) {
  return (
    <div className="results">
      <div className="cardContainer">
        <ul className="scrollZone">
          {
            datas.map(
              (data) => <li key={data.id}><Result {...data} /></li>,
            )
          }
        </ul>
      </div>
      <Link to="/Quizz">
        <button type="button" className="restartQuizz">Refaire le Quizz</button>
      </Link>
    </div>
  );
}

Results.propTypes = {
  datas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Results;
