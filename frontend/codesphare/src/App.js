
import "./index.css"
import './App.css';
import Signin from './Regestersignin/signn';
import { Outlet } from "react-router-dom";
import Signup from "./Regestersignin/Signup";
// import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./childcomponents/Navbar";

import Header from "./childcomponents/header";
import Home from "./Pages/Home";
import '../src/App.css'
import Alert from "./childcomponents/Alert";
function App() {
  return (
<>
 <Alert/> 
<Navbar/>
 <Outlet>
      
</Outlet>

</>

    
  );
}

export default App;
