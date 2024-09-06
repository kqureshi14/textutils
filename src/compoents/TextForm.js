import React, {useState} from 'react';

export default function TextForm(props) {
    const [text,setText] =useState('');

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowerClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }


  return (
        <>
        <div className="container">

   
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control"  value={text}  onChange={handleOnChange} id="myBox" rows="10"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLowerClick}>Convert to Lowercase</button>
        </div>
        <div className="container my-1">

            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words, {text.length} characters</p>
            <p>{ 0.008 * text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
   
        </>

  )
}
