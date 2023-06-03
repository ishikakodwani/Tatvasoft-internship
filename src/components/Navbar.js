import {Link,useNavigate} from 'react-router-dom';
import '../style.css';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { Loginservice } from '../context/Loginservice';
import { Button } from '@mui/material';
import Loginprovider from '../context/Loginprovider';
export const Navbar=()=>{ 
  
    const Navigate=useNavigate();
    const { login, setLogin } = useContext(Loginservice);
    const logoutEvent = () => {
        setLogin(false);
        toast.success('Logout Successfully');
        Navigate("/login");
      };
    //   .logoutbtn{
    //     margin-right:10px;
    //     margin-top:4px;
    //     text-decoration: none;
    //     border-radius: 2px;
    //     color:#f14d54;
    // }
   
  if (login) {
    return (
      <>
        <div className="navbarstyle">
          <Link to="/login" style={{ marginLeft: 10, color: 'red', textDecoration: 'none' }}>Books</Link>
          <span style={{ marginLeft: 10 }}>|</span>
          <Link to="/register" style={{ marginLeft: 10, color: 'red', textDecoration: 'none' }}>Update Profile</Link>
        </div>
        <Button sx={{color:'black',borderRadius:2, border:"1px solid #ccc",marginLeft:2,width:100}} onClick={logoutEvent}>Logout</Button>
      </>

    );
  } else {
    return (
      <>
        <div className="navbarstyle">
          <Link to="/login" style={{ marginLeft: 10, color: 'red', textDecoration: 'none' }}>Login</Link>
          <span style={{ marginLeft: 10 }}>|</span>
          <Link to="/register" style={{ marginLeft: 10, color: 'red', textDecoration: 'none' }}>Register</Link>
        </div>
      </>
    );
  }

  };
 