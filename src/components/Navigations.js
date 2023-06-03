import {About} from '../Pages/About';
import {Home} from '../Pages/Home';
 import {Login} from '../Pages/Login';
import { Register } from '../Pages/Register';
import {NotFound} from '../Pages/Found';
import { Routes, Route, Navigate} from "react-router-dom";
import { RoutePaths } from '../utility/path';
import { Loginservice } from '../context/Loginservice';
import { useContext } from 'react';
import Loginprovider from '../context/Loginprovider';
import { AuthContext } from '../utility/auth';
export const Navigations=()=>{
  const authContext = useContext(AuthContext);
const Redirect = <Navigate to={RoutePaths.Login}/>
const {login,setLogin}=useContext(Loginservice);
const isLogin={
  login:login,
  setLogin:setLogin,
}
return(<>
     <Routes>
          <Route path="/" element={isLogin ? <Home/> : Redirect}></Route>
          <Route
        exact
        path={RoutePaths.User}
        element={authContext.user.id ? <Home /> : Redirect}
      />
          <Route path="/about" element={<About/>}></Route>
          <Route exact path={RoutePaths.Login} element={<Login/>}/>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
</>)
}