import React,{useState} from 'react'

export default function Textform(props) {
  
  const handleUpClick=()=>{
    let newText =text.toUpperCase();
    setText(newText)
  }
  const handleLOClick=()=>{
    let newText =text.toLowerCase();
    setText(newText)
  }
  
  let handleclearClick =()=>{
    let newText = " "
    setText(newText)    
  }
  
  const handleOnChange =(Event)=>{
    setText(Event.target.value)
  }




  const [text,setText] =useState()
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleLOClick}>Convert to lowercase</button>

    <button className="btn btn-primary mx-1" onClick={handleclearClick}>Clear</button>
   </div>
   <div>
    <h3>summary of text here </h3>
   </div>
    </>

  )
}
