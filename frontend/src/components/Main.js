import React, { useState } from 'react'

export default function Main(props) {

    const[Text, SetText] = useState("");

    const reverseText =()=>{
        let newtext = Text.split("").reverse().join("");
        SetText(newtext);
    }

    function clearText(){
        SetText("");
    }

    const handleonChange =(event)=>{
        SetText(event.target.value);

    }

  return (
    <>
    <h1>{props.heading}</h1>
    <ol>
        <li>Mango</li>
        <li>Bananna</li>
        <ul>
            <li>yellow & black</li>
        </ul>
    </ol>

    <textarea className="text-area-1" id="1" rows="8" cols="200" value ={Text} onChange={handleonChange}></textarea>
    <button className="btn btn-primary mx-2" onClick={reverseText}>{props.reverse}</button>
    <button className="btn btn-primary mx-3" onClick={clearText}>clear</button>
    <h2>{props.length}</h2>
    {Text.length > 0 ? Text : "You will view typed text here"}
    <h3>Total Characters present in Text</h3>{Text.length}
    <br/>

    <form className='Form'>
        <h2>{props.title}</h2>
        <input type ="text" placeholder='Enter your name here'/>
        <br/>
        <input type ="email" placeholder="Enter your mail here"/>
        <br/>
        <input type ="password" placeholder='Enter your password here'/>
        <br/>
        <button className="btn btn-primary mx-2" >{props.submit}</button>
    </form>
    
    </>
  )
}
