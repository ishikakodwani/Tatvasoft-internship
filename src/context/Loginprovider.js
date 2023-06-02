import React, { useState } from 'react';
import { Loginservice } from './Loginservice';
const Loginprovider=(props)=>{
    const [login,setLogin]=useState(false);
    const handleSubmit = () => {
        setLogin(true); // Updating the login state to true
      };   
    return(
        <Loginservice.Provider value={{login,setLogin,handleSubmit}}>
            {props.children}
        </Loginservice.Provider>
    );
}
export default Loginprovider;