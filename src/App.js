import './App.css';
import './style.css'
import { Routes ,Route,BrowserRouter} from 'react-router-dom';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { NotFound } from './Pages/Found';
import { Navbar } from './Pages/Navbar';
import {Login} from './Pages/Login';

function App() {
  return (<>
  
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}>
    </Route> 
     <Route path="/about" element={<About/>}>
    </Route>  
     <Route path="/login" element={<Login/>}>
    </Route>  
    <Route path="*" element={<NotFound/>}>
    </Route> 
  </Routes>
    </BrowserRouter>
       </>
  );
}
export default App;
