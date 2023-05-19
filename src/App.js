import './App.css';
import { Routes ,Route, Link, BrowserRouter} from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { NotFound } from './Found';
import Logo from "./logo.svg";
function App() {
  return (<>
  <img src={Logo} alt="logo" style={{height:50}}/>
  <BrowserRouter>
  <div className="navbarstyle"> 
  <Link to="/" style={{marginLeft:5,color:'black',textDecoration: 'none',columnGap:5}}>Home</Link>
  <Link to="/about" style={{marginLeft:10 ,color:'black',textDecoration: 'none',columnGap:5}} >About</Link>
  <Link to="/contact" style={{marginLeft:10 ,color:'black',textDecoration: 'none',columnGap:5 }} >Contact</Link></div>
  <Routes>
    <Route path="/" element={<Home/>}>
    </Route> 
     <Route path="/about" element={<About/>}>
    </Route>  
    <Route path="*" element={ < NotFound/>}>
    </Route> 
  </Routes>
    </BrowserRouter>
       </>
  );
}
export default App;
