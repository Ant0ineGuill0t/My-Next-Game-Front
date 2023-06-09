// == Import
import {
  Routes, Route, Navigate,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  getUserData,
  toggleIsLogged,
} from 'src/actions';

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
import Loading from '../Loading';
import Profile from '../Profile';
// styles
import './styles.css';

// == Composant
function App() {
  const dispatch = useDispatch();
  const token = sessionStorage.getItem('token');
  if (token) {
    dispatch(toggleIsLogged());
    dispatch(getUserData());
  }
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
          <Route path="/loading" element={<Loading />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

// == Export
export default App;
