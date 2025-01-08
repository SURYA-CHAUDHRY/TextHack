import React, { useState } from 'react'

export default function About() {

    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white',
        
    })
    const[btntext, setBtnText] = useState("Enable Dark Mode")

    const toggleStyle =() =>{
        if(myStyle.color === 'black'){
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '0.5 px solid white'
            })
            setBtnText("Enable Light Mode")
        }
        else{
            setMyStyle({
                color:'black',
                backgroundColor: 'white'
            })
            setBtnText("Enable Dark Mode")
        }
    }
    
  return (
    <div className='container' style={myStyle}>
        <h1 className='my-3'>About Us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <b>About TextHack</b>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>This is a React component named TextHack that allows users to manipulate and analyze text.</strong> Users can enter text in a text box and then use the provided buttons to convert the text to uppercase, lowercase, remove extra spaces, or clear the text entirely. The component also displays a summary of the text, including the word count, character count, and estimated reading time. Additionally, the component provides a preview of the entered text. This component can be useful for various tasks such as proofreading, editing, and analyzing text content.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <b>TextHack Functionalities</b>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>Text Manipulation Buttons:</strong>
                    <ul>
                        <li><b>Convert to Uppercase:</b> Converts the entered text to all uppercase letters.</li>
                        <li><b>Convert to Lowercase:</b> Converts the entered text to all lowercase letters.</li>
                        <li><b>Remove Extra Spaces:</b> Removes any extra spaces between words in the text.</li>
                        <li><b>Clear Text:</b> Clears the text box entirely.</li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <b>Text Summary</b>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}> 
                    <ul>
                        <li><b>Word Count:</b> Displays the total number of words in the entered text.</li>
                        <li><b>Character Count:</b> Displays the total number of characters in the entered text.</li>
                        <li><b>Estimated Reading Time:</b>
                            Provides an estimate of the time it would take to read the text based on the word count 
                            (assuming an average reading speed of 200 wpm).</li>
                        <li><b>Text Preview:</b> Displays the entered text in a preview area below the text box.</li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
        <div className="container my-3">
            <button onClick={toggleStyle} type="button" className="btn btn-dark">{btntext}</button>
        </div>
    </div>
  )
}
