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
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handleCopy = () =>{
        var text = document.getElementById('myBox');
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }


  return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>

   
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control"  value={text}  onChange={handleOnChange} id="myBox" rows="10" 
            style={{ backgroundColor:props.mode==='dark'?'#042743':'white', color: props.mode==='dark'?'white':'#042743'}}></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLowerClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>

            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words, {text.length} characters</p>
            <p>{ 0.008 * text.split(" ").length} Minutes to read</p>
            <p>{text.split('.').length} Sentences</p>
            <p>{text.split('\n').length} Paragrahs</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter your text in box to preview'}</p>
        </div>
   
        </>

  )
}
