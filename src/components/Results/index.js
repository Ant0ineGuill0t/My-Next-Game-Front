// == Import
//composants
import Result from './Result'
// data, styles
import './style.scss';
import { Link } from 'react-router-dom';

function Results() {
  return (
    <div className='results'>
    <Link to="/Quizz">
      <button className='restartQuizz'>Refaire le Quizz</button>
    </Link>
      
      <div className='cardContainer'>
        <Result />
        <Result />
        <Result />
        <Result />
        <Result />
      </div>
    </div>
  );
}

export default Results;
