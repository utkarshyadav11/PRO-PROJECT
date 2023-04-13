import React,{useState} from "react";
import { NavLink } from 'react-router-dom'

export default function TextForm(props) {
  const [text, setText] = useState("Enter your word");  // useState hook syntax important.
  const UPclick =()=>{                                  // for upperCase
    // console.log("Up click is clicked")
    let newText = text.toUpperCase();
    setText(newText);
  }
  const Downclick =()=>{                                // for toLowerCase
    // console.log("Down click is clicked")
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleOnChange =(event)=>{      // this function is used to change teh values in the box 
    // console.log("OnChange")
    setText(event.target.value)
  }
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> 
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-NavLink" to="/home">home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-NavLink" to="/about">about</NavLink>
        </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
     </div>
     </nav>
     <section>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1 className="heading">{props.heading}</h1> 
      <div className="mb-3">
        <label htmlFor="box" className="form-label"></label>
        <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'white':'white'}} id="box" rows="8"></textarea>
      </div>
      <button className="btn " onClick={UPclick}>Convert UpperCase</button>
      <button className="btn btn2 " onClick={Downclick}>Convert LowerCase</button>

      <p className="my-3 counter">{text.split(/\s+/).filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p> 
      <p className="preview">{text}</p>
    </div>
    </section>
    </>
  );
}
  // onChange is used to write inside the box without it box is not editable
  // set value={set} ti type inside the box

  // {text.split(" ").length} is used to count the length of words
