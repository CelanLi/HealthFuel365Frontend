import { useRoutes } from "react-router-dom";
import { routers } from "./routers/index";

//Ant compoments
import 'antd/dist/reset.css';

function App(){
  return useRoutes( routers);

}

export default App;


// import logo from './logo.svg'; 
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Route path="/" component={welcome}></Route>
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>  
//       </div>
//     </Router>
//   );
// }
// export default App;


 