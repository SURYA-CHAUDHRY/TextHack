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
        // console.log("Onchange was Clicked.")
        setText(event.target.value)
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces has been removed!", "success")
    }

    const countWords = () => {
        let len;
        len = text.split(" ");
        if (len[len.length - 1] === "") {
          return len.length - 1;
        }
        return len.length;
      }

    const[text, setText] = useState('')
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'? 'white':'black'}} > 
    <h2 >{props.heading}</h2>
        <div className="mb-3" style={{color: props.mode==='dark'? 'white':'black'}} >
            <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? '#425B62':'white',color: props.mode==='dark'? 'white':'black' }}  id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-success mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-success mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-success mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-success mx-2" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'? 'white':'black'}} >
        <h2>Your Text Summary</h2>
        <p><i>{countWords()} Words and {text.length} Characters</i></p>
        <p><i>Reading Time : {0.008*countWords()} minutes</i></p>
        <h3>Preview</h3>
        <p>{text.length>0? text: "Enter something in textbox above to preview here"}</p>
    </div>
    </>
  )
};
