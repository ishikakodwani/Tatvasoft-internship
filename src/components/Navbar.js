import {Link} from 'react-router-dom';
import Logo from '../logo.svg';
export const Navbar=()=>{ return(<>

<div className="navbarstyle">
 <img src={Logo} alt="logo" style={{height:20}}/>
  <Link to="/" style={{marginLeft:5,color:'black',textDecoration: 'none',columnGap:5}}>Home</Link>
  <Link to="/about" style={{marginLeft:10 ,color:'black',textDecoration: 'none',columnGap:5}} >About</Link>
  <Link to="/contact" style={{marginLeft:10 ,color:'black',textDecoration: 'none',columnGap:5 }} >Contact</Link>
  <Link to="/login" style={{marginLeft:10 ,color:'black',textDecoration: 'none',columnGap:5 }} >Login</Link>
  <Link to="/register" style={{marginLeft:10 ,color:'black',textDecoration: 'none',columnGap:5 }} >Register</Link>
  </div></>)};