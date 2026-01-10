import React, { useState } from 'react'

export default function Textarea(props) {
    const[text,settext] = useState("");

    const sortFunction=()=>{
        let newtext= text.split("").sort().join("");
        settext(newtext);
    }
    
    const clearText=()=>{
        settext("")
    }

    const handleonChange =(event)=>{
        settext(event.target.value)
    }

  return (
    <>
    <textarea className="form-control" id="1" rows ="8" cols ="20" value ={text} onChange={handleonChange}></textarea>
    <button className="btn btn-primary mx-2" onClick ={sortFunction}>{props.click}</button>
    <button className="btn btn-primary mx-2" onClick ={clearText}>Clear Text</button>
    <h2>{props.preview}</h2>
    {text.length>0 ? text:"the text will be previewed here"}
    <h3>Length</h3>
    {text.length}
    </>
  )
}
