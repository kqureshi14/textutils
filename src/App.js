import './App.css';
// import About from './compoents/About';
import Navbar from './compoents/Navbar';
import TextForm from './compoents/TextForm';
import Alert from './compoents/Alert';

import React, { useState } from 'react'
// This is a React Router v6 app
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link,
// } from "react-router-dom";


function App(){
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }

  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled','success');

      setInterval(() =>{
        document.title = 'TextUtils - DarkMode';
      },2000);

      setInterval(() =>{
        document.title = 'Install TextUtils Now';
      },1500);
    }
    else{
      setMode('light');//
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled','success');
      document.title = 'TextUtils - LightMode';
    }
  }
  return (
   <>
   {/* <BrowserRouter> */}
<Navbar title="TextUtils" mode ={mode} toggleMode={toggleMode} aboutText='About' homeTitle='Home'/>
<Alert alert={alert}/>
<div className="container my-3">



      {/* <Routes> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/" element={<TextForm heading="Enter the text to anaylze below" mode={mode} showAlert={showAlert}/>} /> */}
      
   <TextForm heading="Enter the text to anaylze below" mode={mode} showAlert={showAlert}/>
      {/* </Routes> */}


</div>
{/* </BrowserRouter> */}
   </>

  );
}

// function App() {
//   return (
//     <>
//      <li className="name"></li>
//     <h1>hello</h1>
//     <div className="blank">Hello Kaleem color changed ?</div>
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React with Kaleem okay you are getting results
//         </a>
//       </header>
//     </div>
//     </>
//   );
// }

export default App;
