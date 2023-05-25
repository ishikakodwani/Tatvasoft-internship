import logo from './logo.svg';
import './App.css';
import './style.css'
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import {About} from './Pages/About';
import {Home} from './Pages/Home';
import {Login} from'./Pages/Login';
import { Register } from './Pages/Register';
import {NotFound} from './Pages/Found';
import {Navbar} from './components/Navbar';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
