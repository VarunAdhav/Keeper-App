import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Notes from './components/Notes';
import note from './assets/defaultNotes';
import AddInput from './components/AddNote';
import { useState } from 'react';

function App() {
  const [notes , setNotes] = useState([]);

  function addNotes(note){
    setNotes((prev)=>{
      return [...prev , note]
    })
  }
  function onDelete(id){
    setNotes(()=>{
      return notes.filter((note , index)=>{
          return index !== id;
      })
    })
  }
  return (
    <div>
      <header><Header /></header>
      <AddInput onAddNote = {addNotes}/>
      {notes.map((note , index)=>(
        <Notes 
          key = {index}
          id = {index}
          title = {note.title}
          content = {note.content}
          delete = {onDelete}
        />
      ))}
      <footer><Footer /></footer>
    </div>
  );
}

export default App;
