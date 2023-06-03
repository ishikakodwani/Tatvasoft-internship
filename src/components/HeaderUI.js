import { Navbar } from "./Navbar";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';

export const HeaderUI = () => {
    return (
        <div>
            <div className="topheader">
        </div> 
        <div className="navcontainer">
             <img src="/images/Tatvasoftlogo.svg" alt='Logo' className='logoo' ></img>
             <div className="navbar">
             
                <Navbar/>
                <a href="/card" alt="Cart" className="cart" style={{margin:"0 0 0 10px"}}>
                <ShoppingCartIcon sx={{color:"#f14d54"}}/>
                <span style={{margin:0,color:"#f14d54",fontWeight:"bold"}}>0</span> 
                  Cart
                </a>
             </div>
        </div>
        <div className="appbar">
        <div className="appcontainer">
        <div className="searchbar">
          <input className="searchbox" type="text" placeholder="What are you looking for..." />
          <button className="search-btn" ><SearchIcon sx={{color:"white"}}/><span>Search</span></button>
          </div>
        </div>
        </div>
       
        </div>
        )
    };