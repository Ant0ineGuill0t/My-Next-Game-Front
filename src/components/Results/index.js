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
      <Link to="/Quizz">
        <button type="button" className="restartQuizz">Refaire le Quizz</button>
      </Link>
      <div className="cardContainer">
        <ul className="scrollZone">
          {
            datas.map(
              (data) => <li><Result key={data.id} {...data} /></li>,
            )
          }
        </ul>
      </div>
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
