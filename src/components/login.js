import React, {useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";


const signInSchema = Yup.object().shape({
    username: Yup.string()
    .min(2, 'Too Short!')
    .max(25, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password is too short - should be 8 chars min")
});

const initialValues = {
  username: "",
  password: ""
};

const LoginForm = () => {

  const navigate = useNavigate();

  const [userExists, setUserExists] = useState(true);

  useEffect( () => {
    if (sessionStorage.getItem('loggedIn')==='true') {
     navigate('/user-profile')
    }

  },[navigate])


  return (
    <div>
     
    
    <Formik
      initialValues={initialValues}
      validationSchema={signInSchema}
      
      onSubmit={(values) => {
        const url = "http://localhost:8000/api-token-auth/"
        axios.post(url, values).then
        ((response) => {
        sessionStorage.setItem("username", values.username)
        sessionStorage.setItem("token", response.data.token)
        sessionStorage.setItem("loggedIn", 'true')
        navigate('/user-profile')
        })
        .catch(function (error) {
          setUserExists(false)
          console.log(error);
       });

      }}>

      {(formik) => {
        const { errors, touched, isValid, dirty } = formik;
        return (
          <div className="container">
            <h5>Sign in to play</h5>

            {userExists ? <p style={{visibility:'hidden', fontSize: '14px'}}>not found. Register below</p> : 
            <p style={{visibility:'visible', color:'red', fontSize: '14px'}}>User not found. Register below</p>}

            <Form style={{marginTop: '30px'}} >
              <div className="form-row" style = {{display:"flex", marginRight:"auto"}}>
                <label style={{marginRight:"10px", flex:"1"}} htmlFor="username">Username </label>
                <Field
                  style={{flex:'2'}}
                  type="username"
                  name="username"
                  id="username"
                  className={
                    errors.username && touched.username ? "input-error" : null
                  }
                />
                <div style={{fontSize:'14px', color:'red'}}>
                  <ErrorMessage name="username" component="span" className="error" />
                  </div>
                
              </div>
              <br></br>

              <div className="form-row" style = {{display:"flex", marginRight:"auto"}}>
                <label style={{marginRight:"10px", flex:"1"}} htmlFor="password">Password</label>
                <Field
                  style={{flex:'2'}}
                  type="password"
                  name="password"
                  id="password"
                  className={
                    errors.password && touched.password ? "input-error" : null
                  }
                />
                <ErrorMessage
                  name="password"
                  component="span"
                  className="error"
                />
              </div>
                
              <button
                style={{marginTop:'30px'}}
                type="submit"
                className={!(dirty && isValid) ? "disabled-btn" : ""}
                disabled={!(dirty && isValid)}
              >
                Sign In
              </button>
            </Form>
          </div>
        );
      }}
      
    </Formik>

    <div style={{marginTop:'20px'}}><Link to="/register">Register</Link> </div>
    
    
   
    
    
    </div>
  );
};

export default LoginForm;