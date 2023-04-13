import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import TextForm from "./components/TextForm.jsx";
import Alert from "./components/Alert.jsx";
import About from "./components/About.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // useState
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const alertBox = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#112835";
      alertBox("dark mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      alertBox("light mode enabled", "success");
    }
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <BrowserRouter>
    <Routes>
    <Route path ="/" element={<Navbar mode={mode} toggleMode={toggleMode} />}/>
    <Route path ="/home" element={<TextForm heading="Enter the text" mode={mode} />}/>
    <Route path="/about" element={<About/>}toggleMode={toggleMode} />
    </Routes>
        <Alert alert={alert} />
        
        
     
    </BrowserRouter>
  );
}

export default App;
