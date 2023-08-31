function Input(props){
    return(
        <input className="form-control w-25" placeholder={props.placeHolder} value={props.value}/>
    )
}

export default Input;