import React, { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "./firebase/firebaseConfig";

const App = () => {
  useEffect(() => {

    const obtenerDatos = async () => {
      const datos = await getDocs(collection(db, "usuarios"));
      // console.log(datos.docs[0].data());
      datos.forEach((documento) => {
        console.log(documento.data());
      })
    }

    obtenerDatos();
  }, []);

  return <h1>Firebase 9!</h1>;
};

export default App;
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
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
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
