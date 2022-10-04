// == Import
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
// composants
import LeftSide from './LeftSide';
import RightSide from './RightSide';

// data, styles
import './style.scss';

function Quizz() {
  if (useSelector((state) => state.user.token) === '') {
    return (
      <Navigate to="/" replace />
    );
  }
  const question = useSelector((state) => state.game.question);


  return (
    <div className="quizz">
      <h2>Question {useSelector((state) => state.game.questionNumber)}/20</h2>
      <div className="questionDiv"><p className="question" key={question}>{question}</p></div>
      <LeftSide />
      <RightSide />
    </div>
  );
}

export default Quizz;
