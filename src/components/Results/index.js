// == Import
// composants
import {useRef, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Result from './Result';
// data, styles
import './style.scss';

function Results() {
  return (
    <div className="results">
      <Link to="/Quizz">
        <button type="button" className="restartQuizz">Refaire le Quizz</button>
      </Link>
      <div className="cardContainer">
        <ul className="scrollZone">
          <li><Result /></li>
          <li><Result /></li>
          <li><Result /></li>
          <li><Result /></li>
          <li><Result /></li>
          <li><Result /></li>
          <li><Result /></li>
        </ul>
      </div>
    </div>
  );
}

export default Results;
