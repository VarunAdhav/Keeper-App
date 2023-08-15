import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Notes from './components/Notes';

function App() {
  return (
    <div>
      <header><Header /></header>
      <Notes />
      <footer><Footer /></footer>
    </div>
  );
}

export default App;
