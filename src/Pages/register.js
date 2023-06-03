import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, Select, MenuItem } from '@mui/material';
import { Breadcrumbs, TextField, Link, Typography } from "@mui/material";
//import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from 'react-toastify';
import '../Styles/register.css'
import { Troubleshoot } from "@mui/icons-material";
export const Register = () => {
  const Navigate = useNavigate();
  const onFormSubmit =  async (values) => {
    //console.log("Email:",email);
    //console.log("Password:",password);       
    console.log("form submitted", values);
    const requestData = {
      firstName: values.firstName,
      lastName: values.lastName,
      roleId: values.roleId,
      email: values.email,
      password: values.password
    }
    const res = await axios.post("https://book-e-sell-node-api.vercel.app/api/user", requestData).then(function (res) {
      if (res.status === 200) {
        console.log("response", res.data.id);
        toast.success("Register Successfull",
          {
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
    })
    Navigate("/login");
  };

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
    firstName: Yup.string().min(3, "Please Enter Minimum 3 Charactors.").required("First Name is Required"),
    lastName: Yup.string().min(3, "Please Enter Minimum 3 Charactors.").required("Last Name is Required"),
    roleId: Yup.string().required("Please select a Role"),
    email: Yup.string().email("Please Enter Valid Email.").required("Email Id is Required").matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please Enter Valid Email."),
    password: Yup.string().min(8, "Please Enter Minimum 8 Charactors.").required("Password is Required").matches(/[a-zA-Z0-9]/, "Password contains only letters, numbers"),
    confirmpassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required(" Confirm Password is Required"),
  });
  const initialValues = {
    firstName: "",
    lastName: "",
    roleId: "",
    email: "",
    password: "",
    confirmpassword: "",
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
  //    <LogoutOutlinedIcon onClick={onFormSubmit}/>
  //      {/* <Button variant="contained" onClick={onHomePageButtonClick} className="">

  //        </Button> */}
  //      </div>
  //   </Popover>
  return (
    <div className="container">
      <div className="homenav" style={{ fontSize: 18 }}>
        <Breadcrumbs separator="›" aria-label="breadcrumb" className="breadcrumb-wrapper">
          <Link color="inherit" href="/" title="Home" className="link-custom" style={{ textDecoration: "none", fontSize: 18 }} >Home</Link>
          <Typography className="typo-custom" style={{ fontSize: 18 }}>Create an Account</Typography>
        </Breadcrumbs></div>
      <div>
        <div className='center'>
          <h1 className="loginheader">
            Login or Create an Account
            <span className="underline"></span>
          </h1>
        </div>
      </div>
      <div className="regcointainer">
        <div className="personalinfo">
          <Typography variant="h6" className="custom-typography" style={{ fontWeight: 500 }}>Personal Information</Typography>
          <div class="line"></div>
          <p className='paraStyle'>Please enter the following information to create your account.</p>
        </div>
        <div className="formcontainer">
          <Formik initialValues={initialValues}
            onSubmit={onFormSubmit}
            validationSchema={validation}>
            {({ value, errors, touched, handleBlur, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <div className="userdetails">
                  <div className="userinput">
                    <span className="Label">FirstName*</span>
                    <TextField className="textinput" type="name" name="firstName" placeholder="Enter your FirstName" id="firstName" onChange={handleChange} onBlur={handleBlur} />
                    {touched.firstName && errors.firstName && <span class="error">{errors.firstName}</span>}
                  </div>
                  <div className="userinput">
                    <span className="Label">LastName*</span>
                    <TextField className="textinput" type="name" name="lastName" placeholder="Enter your lastName" id="lastName" onChange={handleChange} onBlur={handleBlur} />
                    {touched.lastName && errors.lastName && <span class="error">{errors.lastName}</span>}
                  </div>
                  <div className="userinput">
                    <span className="Label">Email*</span>
                    <TextField className="textinput" type="email" name="email" placeholder="Enter your email" id="email" onChange={handleChange} onBlur={handleBlur} />
                    {errors.email && touched.email && <span className="error">{errors.email}</span>}</div>
                  <div className="userinput">
                    <span className="Label">Roles*</span>
                    <Select
                      className="selectinput"
                      labelId="Role"
                      id={"roleId"}
                      name="roleId"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <MenuItem value={0}></MenuItem>
                      <MenuItem value={1}>Buyer</MenuItem>
                      <MenuItem value={2}>Seller</MenuItem>
                    </Select>
                    {touched.roleId && errors.roleId && <span class="error">{errors.roleId}</span>}
                  </div>
                  <div className="personalinfo">
                    <Typography variant="h6" className="custom-typography" style={{ fontWeight: 500 }}>Login Information</Typography>
                    <div class="line"></div>
                  </div>
                  <div className="userinput">
                    <span className="Label">Password*</span>
                    <TextField className="textinput" type="password" name="password" placeholder="Enter Password" id="password" onChange={handleChange} onBlur={handleBlur} />
                    {errors.password && touched.password && <span className="error"> {errors.password}</span>}</div>
                  <div className="userinput">
                    <span className="Label">Confirm Password*</span>
                    <TextField className="textinput" type="password" name="confirmpassword" placeholder="Enter Password" id="confirmpassword" onChange={handleChange} onBlur={handleBlur} />
                    {touched.confirmpassword && errors.confirmpassword && <span class="error">{errors.confirmpassword}</span>}</div>
                  <button className="registerbutton" type="submit">Register</button>
                </div>
              </form>)}
          </Formik>
        </div>
      </div>
    </div>
  );
}