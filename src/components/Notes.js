import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
//This is like a card element where the notes are being projected and We can delete any notes using this component
function Notes(props){
    const [buttonColor , setButtonStlye] = useState(false);
    const [notesColor , setNotesColor] = useState(false);

    function setColor(){
        setButtonStlye(true);
    }
    function defaultColor(){
        setButtonStlye(false);
    }
    function setGlow(){
        setNotesColor(true);
    }
    function disableGlow(){
        setNotesColor(false);
    }
    return (
        <div style={{boxShadow: notesColor && "5px 2px 2px #f5ba13"}} className="note" onMouseOver={setGlow} onMouseLeave={disableGlow}>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button style={{color: buttonColor ? "black" : "#f5ba13"}} 
            onMouseOver={setColor} onMouseLeave={defaultColor} onClick={()=>{
                props.delete(props.id)
            }} ><DeleteIcon /></button>
        </div>
    )
}

export default Notes;