import './App.css';
import Navbar from './compoents/Navbar';
import TextForm from './compoents/TextForm';


function App(){
  return (
   <>
<Navbar title="TextUtils2"  aboutText='About' homeTitle='Home'/>

<div className="container">
<TextForm heading="Enter the text to anaylze below"/>



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
