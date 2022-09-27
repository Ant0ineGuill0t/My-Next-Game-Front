// == Import
import {
  Routes, Route, useParams,
} from 'react-router-dom';
// Composants
import dataGames from 'src/data/dataGames';
import Header from '../Header';
import HomepageButton from '../HomepageButton';
import Quizz from '../Quizz';
import Footer from '../Footer';
import Results from '../Results';
import Faq from '../Faq';
import LegalNotice from '../LegalNotice';
import AboutUs from '../AboutUs';
import Game from '../Game';
// data, styles

import './styles.css';

// == Composant
function App() {
  const params = useParams();

  console.log(params); // 👉️ {userId: '4200'}

  return (
    <>
      <Header />
      <div className="app">
        <Routes>
          <Route path="/" element={<HomepageButton />} />
          <Route path="/quizz" element={<Quizz />} />
          <Route path="/quizz/game/:slug" element={<Game />} />
          <Route path="/quizz/results" element={<Results datas={dataGames} />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/legal-notice" element={<LegalNotice />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

// == Export
export default App;
