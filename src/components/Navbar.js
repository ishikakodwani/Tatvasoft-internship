import {Link} from 'react-router-dom';
import '../style.css';
export const Navbar=()=>{ return(
 <div className="navbarstyle">
  <Link to="/login" style={{ marginLeft: 10, color: 'red', textDecoration: 'none' }}>Login</Link><span style={{ marginLeft: 10 }}>|</span><Link to="/register" style={{ marginLeft: 10, color: 'red', textDecoration: 'none' }}>Register</Link></div>  )};
 