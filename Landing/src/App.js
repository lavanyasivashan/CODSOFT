
import './App.css';
import Adoption from './components/Adoption';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Newsletter from './components/Newsletter';
import Pets from './components/Pets';
import Services from './components/Services';

function App() {
  return (
    <div className="App"><Header/>
     <Hero/>
     <Pets/>
     <Services/>
     <Adoption/>
     <Newsletter/>
     <Footer/>
    </div>
  );
}

export default App;
