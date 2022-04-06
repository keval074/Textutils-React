import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("uppercase was clicked");
    let uppText = text.toUpperCase();
    setText(uppText);
    props.showAlert("Converted to UpperCase" , "success")
  };
  const handleLowClick = () => {
    console.log("uppercase was clicked");
    let lowText = text.toLowerCase();
    setText(lowText);
    props.showAlert("Converted to LowerCase" , "success")
  };
  const handleClearClick = () => {
    console.log("Clear Text");
    let clearText = ('');
    setText(clearText);
    props.showAlert("Text cleared!!" , "success")
  };
  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}} >
        <h1>{props.heading}</h1>
        <div className="mb-3" >
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="10"
            style={{color:'#042743'}}
          ></textarea>
        </div>
        {/* Buttons -uppercase */}
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Upercase!
        </button>
        {/* Buttons -uppercase */}

        <button className="btn btn-primary mx-1 my-2" onClick={handleLowClick}>
          Convert to Lowercase!
        </button>
       
       {/* Buttons - Clear */}
        <button className="btn btn-primary mx-1 my-2" onClick={handleClearClick}>
          Clear Text!!
        </button>
      </div>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary!</h2>
        <p>
          {text.split(" ").length} words , {text.length} characters
        </p>
        <p>
          {0.008 * text.split(" ").length} Minutes will be taken to read the
          data!
        </p>
      </div>
    </>
  );
}
