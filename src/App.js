import './App.css';
import './style.css';
import './Styles/Header.css';
import './Styles/Footer.css';
import './Styles/register.css';
import './Styles/login.css';
import {  BrowserRouter } from "react-router-dom";
import { HeaderUI } from './components/HeaderUI';
import { Footer } from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigations } from './components/Navigations';
import Loginprovider  from './context/Loginprovider';
import { Loginservice } from './context/Loginservice';
import { AuthWrapper } from './utility/auth';


function App() {
  return (
    <div className="App">
    <Loginprovider>
      {/* <Loginprovider> */}
    <BrowserRouter>

    <HeaderUI/>
    <ToastContainer/>
    <AuthWrapper>
    <Navigations/>
    </AuthWrapper>
    <Footer/>
    </BrowserRouter>
    </Loginprovider>
    </div>
  );
  }
export default App;
