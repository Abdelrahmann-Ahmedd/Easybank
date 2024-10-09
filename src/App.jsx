import './App.css';
import About from './Components/About/About';
import Articles from './Components/Articles/Articles';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Articles />
      <Footer/>
    </div>
  );
}

export default App;
