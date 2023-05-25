import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from '@mui/material';
import { Avatar, Popover, TextField } from "@mui/material";
//import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from 'react-toastify';
export const Register = () => {
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
      if(res.status === 201){
      console.log("response", res.data.id);
      toast("Login Successfull");
    }
    })
    Navigate("/");
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
    email: Yup.string().email("Please enter a valid email").required(),
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
  //    <LogoutOutlinedIcon onClick={onFormSubmit}/>
  //      {/* <Button variant="contained" onClick={onHomePageButtonClick} className="">

  //        </Button> */}
  //      </div>
  //   </Popover>
  return (
    <div className="formcontainer">
      <h2 >Login</h2>
      <hr />
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Avatar sx={{ bgcolor: "rgb(242, 214, 214)", color: "black" }} onClick={handleClick}>IK</Avatar></div>

      <Formik initialValues={initialValues}
        onSubmit={onFormSubmit}
        validationSchema={validation}>

        {({ value, errors, touched, handleBlur, handleChange, handleSubmit }) => (<form onSubmit={handleSubmit}>
          <TextField sx={{ bgcolor: "rgb(242, 214, 214)", color: "black  " }} type="email" label="Name" name="email" variant="outlined" placeholder="Enter your email" id="email" onChange={handleChange} onBlur={handleBlur} /><br />
          <span style={{ color: "black", fontWeight: "bold" }}>{errors.email && touched.email && errors.email}</span><br /><br />
          <TextField sx={{ bgcolor: "rgb(242, 214, 214)" }} label="Password" type="password" name="password" variant="outlined" placeholder="Enter Password" id="password" onChange={handleChange} onBlur={handleBlur} /><br />
          <span style={{ color: "black", fontWeight: "bold" }}>{errors.password && touched.password && errors.password}</span><br /><br />
          <Button sx={{ bgcolor: "rgb(242, 214, 214);", marginBottom: 5 }} variant="submit" type="Submit">Submit</Button>
        </form>)}
      </Formik>

    </div>
  );

}