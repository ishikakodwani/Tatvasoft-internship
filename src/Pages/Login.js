import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import { toast } from 'react-toastify';
import { Breadcrumbs, Link, Typography } from "@mui/material";
import '../Styles/login.css';
import React, { useContext } from 'react';
import { Loginprovider } from '../context/Loginprovider';
import { Loginservice } from '../context/Loginservice';
import { useAuthContext } from '../utility/auth';
export const Login = () => {
  const { login, setLogin } = useContext(Loginservice);
  const Navigate = useNavigate();
  const AuthContext = useAuthContext();
  useEffect(() => {
  }, []);

  const initialValues = {
    email: "",
    password: "",
  }
  const validation = Yup.object().shape({
    email: Yup.string().email("Please Enter Valid Email.").required("Email Id is Required"),
    password: Yup.string().min(8, "Please Enter Minimum 8 Characters.").required("Password is Required").matches(/[a-zA-Z0-9]/, "Password contains only letters, numbers"),
  });
  const onCreate=()=>{
    Navigate("/register");
  }
  const onFormSubmit = async (values) => {
    console.log('on Form Submited', values);

    const requestdata = {
      email: values.email,
      password: values.password,
    };

    // Call Api to Post submit the form 

    const res = await axios.post("https://book-e-sell-node-api.vercel.app/api/user/login", requestdata)
      if (res.status === 200) {
        console.log(res.data.id);

        toast.success("Login Successfull", {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
       }
    // AuthContext.setUser(res);
    setLogin(true);
    Navigate("/") ;
  };
  return (
    <div>
      <div className="container">
        <div className="homenav" style={{ fontSize: 18 }}>
          <Breadcrumbs separator="›" aria-label="breadcrumb" className="breadcrumb-wrapper">
            <Link color="inherit" href="/" title="Home" className="link-custom" style={{ textDecoration: "none", fontSize: 18 }} >Home</Link>
            <Typography className="typo-custom" style={{ fontSize: 18 }}>Login</Typography>
          </Breadcrumbs></div>
        <div>
          <div className='center'>
            <h1 className="loginheader">
              Login or Create an Account
              <span className="underline"></span>
            </h1>
          </div>
        </div>
      </div>
      <div className="allout">
        <div className="row">
          <div class="col-1" style={{ padding: "0px 15px 0px 0px" }}>
            <h2>New Customer</h2>
            <div class="line"></div>
            <div className='H2'>
              Regisration is free and easy.
            </div>
            <ul className='ul1'>
              <li>Faster checkout</li>
              <li>Save multiple shipping addresses</li>
              <li>View and track ordersand more</li>
            </ul>
            <button className='button_create' type='submit' onClick={onCreate} >Create an Account</button>
          </div>
          <div class="col-1" style={{ padding: "0px 0px 0px 15px" }}>
            <h2>Registered Customer</h2>
            <div class="line"></div>
            <div className='H2'>
              If you have an account with us, please log in
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={validation}
              onSubmit={onFormSubmit}
            >
              {({ value, touched, errors, handleChange, handleBlur, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <div className='inputs'>
                    <span>Email Address*</span>
                    <input type='text' className='search-input1' name="email" onChange={handleChange} onBlur={handleBlur} />
                    {touched.email && errors.email && <span class="error">{errors.email}</span>}
                  </div>
                  <div className='inputs'>
                    <span>Password*</span>
                    <input type='password' className='search-input1' name="password" onChange={handleChange} onBlur={handleBlur} />
                    {touched.password && errors.password && <span class="error">{errors.password}</span>}
                  </div>
                  <button className='button_login' type='submit'>Login</button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
};