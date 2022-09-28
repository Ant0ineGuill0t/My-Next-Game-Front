// == Import
import {
  Routes, Route, Navigate,
} from 'react-router-dom';
import React from 'react';
// Composants
import dataGames from 'src/data/dataGames';
import dataQuestions from 'src/data/dataQuestions';
import Header from '../Header';
import HomepageButton from '../HomepageButton';
import Quizz from '../Quizz';
import Footer from '../Footer';
import Results from '../Results';
import Faq from '../Faq';
import LegalNotice from '../LegalNotice';
import AboutUs from '../AboutUs';
import Game from '../Game';
import LoginForm from '../LoginForm';
import Error from '../Error';
// styles
import './styles.css';

// == Composant
function App() {
  return (
    <>
      <Header />
      <div className="app">
        <Routes>
          <Route path="/" element={<HomepageButton />} />
          <Route path="/quizz" element={<Quizz datas={dataQuestions} />} />
          <Route path="/game/:paramSlug" element={<Game datas={dataGames} />} />
          <Route path="/quizz/results" element={<Results datas={dataGames} />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/legal-notice" element={<LegalNotice />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/error" element={<Error />} />
          <Route path="/login-form" element={<LoginForm />} />
          <Route path="*" element={<Navigate to="/error" />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

// == Export
export default App;
