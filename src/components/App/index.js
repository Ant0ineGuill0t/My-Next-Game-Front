// == Import
import './styles.css';
import { Routes, Route } from 'react-router-dom';

import Header from '../Header';
import HomepageButton from '../HomepageButton';
import Quizz from '../Quizz';
import Footer from '../Footer';
// == Composant
function App() {
  return (
    <div>
      <Header  />
      <div className="app">
      
      <Routes>
        <Route path='/' element={<HomepageButton />} />
        <Route path='/quizz' element={<Quizz />}/>
      </Routes>    
      
      </div>
      <Footer />
    </div>
  );
}

// == Export
export default App;
