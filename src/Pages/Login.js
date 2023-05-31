import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from '@mui/material';
import { TextField } from "@mui/material";
//import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from 'react-toastify';
import '../Styles/login.css'
import { Breadcrumbs, Link, Typography, ListItem, List } from "@mui/material";
export const Login = () => {
  const Navigate = useNavigate();
  const onFormSubmit = (values) => {
    //console.log("Email:",email);
    //console.log("Password:",password);       
    console.log("form submitted", values);
    const requestData = {
      email: values.email,
      password: values.password
    }
    axios.post("https://jsonplaceholder.typicode.com/posts", requestData).then(function (res) {
      if (res.status === 201) {
        console.log("response", res.data.id);
        toast.success("Login Successfull", {
          position: "bottom-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          color: "white",
        });
      }
    });

    Navigate("/register");
  }


  const handleClick = (event) => {
    console.log(123);
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };
  const validation = Yup.object().shape({
    email: Yup.string().email("Please enter a valid email").required('Email is required'),
    //password: Yup.string().min(8).required("Password"),
    password: Yup.string().required('No password provided.').min(8, 'Password is too short - should be 8 chars minimum.').matches(/[a-zA-Z]/, 'Password can only contain Latin letter'),
  });
  const initialValues = {
    email: "",
    password: "",
  }
  //const [email,setEmail]=useState("ishika@gmail.com");   
  //const [password,setPassword]=useState("***");
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);


  //  <Popover
  //     open={open}
  //     anchorOrigin={{
  //         vertical: 'bottom',
  //         horizontal: 'left',
  //     }}
  //     transformOrigin={{
  //        vertical: 'top',
  //        horizontal: 'left',
  //     }}
  //     anchorEl={anchorEl}
  //     onClose={handleClose}
  //  >
  //      <div style={{
  //        padding:5,
  //      }}>


  //    <h5>IshikaKodwani</h5>
  // <LogoutOutlinedIcon onClick={onFormSubmit} />
  //      {/* <Button variant="contained" onClick={onHomePageButtonClick} className="">

  //        </Button> */}
  //      </div>
  //   </Popover>
  return (
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
      <div className="top-content">
        <div className="top-heading">
          <h4 className="customertitle">New Customer</h4>
          <div class="line"></div>
          <p className="paraStyle">Registration is free and easy.</p>
          <ul className="bullet-list" >
            <li>Faster checkout</li>
            <li>Save multiple shipping addresses</li>
            <li>View and track orders and more</li>
          </ul>
        </div>
      </div>
      <div className="btn-wrapper">
        <Button
          className="pink-btn btn"
          variant="contained"
          color="primary"
          disableElevation
          onClick={() => {
            Navigate("/register");
          }}
        >
          Create an Account
        </Button>
      </div>
      <div className="personalinfo">
        <Typography variant="h6" className="custom-typography" style={{ fontWeight: 500 }}>Registered Customers</Typography>
        <div class="line"></div>
        <p className='paraStyle'>If you have an account with us, please log in</p>
      </div>
      <div className="formcontainer">
        {/* <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Avatar sx={{ bgcolor: "#c046f0", color: "black" }} onClick={handleClick}>IK</Avatar></div> */}
        <Formik initialValues={initialValues}
          onSubmit={onFormSubmit}
          validationSchema={validation}>
          {({ value, errors, touched, handleBlur, handleChange, handleSubmit }) => (<form onSubmit={handleSubmit}>
            <span className="Label">Email Address*</span>
            <TextField sx={{ color: "black" }} type="email" name="email" placeholder="Enter your email" id="email" onChange={handleChange} onBlur={handleBlur} />
            {errors.email && touched.email && <span>{errors.email}</span>}
            <span className="Label">Password</span>
            <TextField type="password" name="password" placeholder="Enter Password" id="password" onChange={handleChange} onBlur={handleBlur} />
            {errors.password && touched.password && <span className="error"> {errors.password}</span>}
            <Button className="submitbutton" sx={{ marginBottom: 5, bgcolor: "#f14d54" }} variant="login" type="Submit">Login</Button>
          </form>)}
        </Formik>
      </div>
    </div>
  );
};