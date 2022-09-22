// == Import
import { Routes, Route } from 'react-router-dom';
// Composants
import Header from '../Header';
import HomepageButton from '../HomepageButton';
import Quizz from '../Quizz';
import Footer from '../Footer';
import Results from '../Results';
// data, styles
import dataGames from 'src/data/dataGames';
import './styles.css';

// == Composant
function App() {
  return (
    <div>
      <Header  />
      <div className="app">     
      <Routes>
        <Route path='/' element={<HomepageButton />} />
        <Route path='/quizz' element={<Quizz />}/>
        <Route path='/quizz/results' element={<Results />}/>
      </Routes>      
      </div>
      <Footer />
    </div>
  );
}

// == Export
export default App;
