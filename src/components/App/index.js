// == Import
import reactLogo from './react-logo.svg';
import './styles.css';
import Header from '../Header';
import Footer from '../Footer';
// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <img src={reactLogo} alt="react logo" />
      <h1>Composant : App</h1>
      <Footer />
    </div>
  );
}

// == Export
export default App;
