import './App.css';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import Hero from './components/Hero';
import About from './components/About';
import ClemBot from './components/ClemBot';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Welcome />
      <Hero />
      <About />
      <ClemBot />
      <footer class="text-white bg-gray-600 p-10 italic text-center">
        © 2021 Thomas Delvaux. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
