import './App.css';
import './style.css';
import './Styles/Header.css';
import './Styles/Footer.css';
import './Styles/register.css';
import './Styles/login.css';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import {About} from './Pages/About';
import {Home} from './Pages/Home';
 import {Login} from './Pages/Login';
import { Register } from './Pages/Register';
import {NotFound} from './Pages/Found';
import { HeaderUI } from './components/HeaderUI';
import { Footer } from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <HeaderUI/>
    <ToastContainer/>
    <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
           <Route path="/login" element={<Login/>}></Route> 
          <Route path="/register" element={<Register/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
        <Footer/>
    </BrowserRouter>
    </div>
  );
  }
export default App;
