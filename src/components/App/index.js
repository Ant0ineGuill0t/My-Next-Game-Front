// == Import
import reactLogo from './react-logo.svg';
import './styles.css';
import Header from '../Header';
import HomepageButton from '../HomepageButton';
import Footer from '../Footer';
// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <HomepageButton />
      <Footer />
    </div>
  );
}

// == Export
export default App;
