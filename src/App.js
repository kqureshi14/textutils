import './App.css';
import About from './compoents/About';
import Navbar from './compoents/Navbar';
import TextForm from './compoents/TextForm';

import React, { useState } from 'react'



function App(){
  const [mode,setMode] = useState('dark');

  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');//
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
   <>
<Navbar title="TextUtils" mode ={mode} toggleMode={toggleMode} aboutText='About' homeTitle='Home'/>

<div className="container my-3">
<TextForm heading="Enter the text to anaylze below" mode={mode}/>
{/* <About/> */}


</div>

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
