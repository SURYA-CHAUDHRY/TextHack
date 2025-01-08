import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Text has been converted to UpperCase!", "success")
    }
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Text has been converted to LowerCase!", "success")
    }
    const handleClearClick = () =>{
        let newText = "";
        setText(newText)
        props.showAlert("Text has been cleared!", "success")
    }
    const handleOnChange = (event) =>{
        setText(event.target.value)
    }
    
    const handleCopyText = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces has been removed!", "success")
    }
    const[text, setText] = useState('')
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'? 'white':'black'}} > 
    <h2 >{props.heading}</h2>
        <div className="mb-3" style={{color: props.mode==='dark'? 'white':'black'}} >
            <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? '#425B62':'white',color: props.mode==='dark'? 'white':'black' }}  id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleCopyText}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'? 'white':'black'}} >
        <h2>Your Text Summary</h2>
        <p><i>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</i></p>
        <p><i>Reading Time : {0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes</i></p>
        <h3>Preview</h3>
        <p>{text.length>0? text: "Nothing to preview"}</p>
    </div>
    </>
  )
};
