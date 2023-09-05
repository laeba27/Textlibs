import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import { useState } from 'react';
import Alert from './components/alert';
import About from './components/About'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [alert, setalert] = useState(null);
  const showAlert = (message,type)=>{
   setalert({
    msg :message,
    type :type
   })
   setTimeout(() => {
      showAlert(null)
   }, 1500);
  }
  const [btntext, setbtntext] = useState('enable dark mode')
  const [mystyle, setmystyle] = useState(
    {
      backgroundColor :"white",
      color : "black"
  
    }
   )
   const [textstyle, settextstyle] = useState(
    {
      backgroundColor :"white",
      color : "grey"
  
    }
   )
  const toggleStyle = ()=>{
    if (mystyle.color === 'black'){
      setmystyle({
        backgroundColor :"black",
        color : "white"
  
      })
      
      settextstyle({
        backgroundColor : "grey",
        color :"white"
      })
      setbtntext("Enable Dark mode")
      showAlert("Dark mode has been enabled", "success");
      document.title ='TextUtil-Darkmode';
      setInterval(() => {
        document.title ='install your textutil now';
      }, 3000);
    }
    else {
      setmystyle({
        backgroundColor :"white",
        color : "black"
      })
      settextstyle({
        backgroundColor : "white",
        color :"grey"
      })
      setbtntext("Enable Light mode")
    }
  
  }
  
  return (
    <>
    <BrowserRouter>
    <Navbar toggleStyle={toggleStyle} setmystyle={setmystyle} setbtntext={setbtntext} mystyle={mystyle} btntext={btntext} title ="TextUtils" AboutText ="About us"/>
    <Alert alert = {alert}/>
    <div className='cotainer py-0'>
    <Routes>
          <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm setmystyle={setmystyle} setbtntext={setbtntext} mystyle={mystyle} textstyle={textstyle} heading="Enter your Text to analyse"/>} />
           
          </Routes>
    </div>
    </BrowserRouter>
    
    
    </> 
  );
}

export default App;
