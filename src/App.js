import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Notes from './components/Notes';
import notes from './assets/defaultNotes'

function App() {
  return (
    <div>
      <header><Header /></header>
      {notes.map(note =>(
        <Notes 
          key = {note.key} 
          title = {note.title}
          content = {note.content}
        />
      ))}
      <footer><Footer /></footer>
    </div>
  );
}

export default App;
