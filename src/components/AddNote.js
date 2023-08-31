import { useRef, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
//the aim of this component is to add a new Note
function AddNote(props){
    const [note , setNote] = useState({});
    const title = useRef("");
    const content  = useRef("");

    function onAdd(){
        setNote({
            title: title.current,
            content: content.current
        });
    }
    function changeInContent(event){
        content.current = event.target.value;
    }
    function changeInTitle(event){
        title.current = event.target.value;
    }
    

    return(
        <div className="addNotes" onChange={onAdd}>
                <input onChange={changeInTitle} className="form-control w-25" placeholder="Enter Notes Title" value={title.current}/>
                <textarea style={{height: "100px"}} onChange={changeInContent} className="form-control w-25" placeholder="Enter Your Notes" value={content.current}/>

            <button onClick={()=>{
                props.onAddNote(note);
                title.current = "";
                content.current = "";
            }} className="btn"><AddIcon/></button>
        </div>
    );
}

export default AddNote;