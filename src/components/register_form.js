import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Button from 'react-bootstrap/Button'
import '../App.css';


const registerSchema = Yup.object().shape({
    username: Yup.string()
        .min(4, 'Too Short!')
        .max(16, 'Too Long!')
        .required('Required'),
    password: Yup.string()
        .required("Password is required")
        .min(8, "Password is too short - should be 8 chars min"),
    confirmpassword: Yup.string()
        .required("Please confirm your password")
        .oneOf([Yup.ref("password")], "Passwords do not match"),
});

const initialValues = {
  username: "",
  password: "",
  confirmpassword: ""
};

function RegisterForm(props) {
  
  const [errorMessage, setErrorMessage] = useState('error-message-hidden')
  const loggedIn = sessionStorage.getItem('loggedIn')
  const navigate = useNavigate()

  useEffect( () => {
      if (loggedIn !== null) {
        navigate('/home')
      }
  }, [loggedIn, navigate])

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={(values) => {
          const url = "https://seans-trivia-api.herokuapp.com/register"
          axios.post(url, values).then
          ((response) => {
            if (response.status === 201){
                const url = "https://seans-trivia-api.herokuapp.com/api-token-auth/";
                axios.post(url, values).then((response) => {
                sessionStorage.setItem("username", values.username);
                sessionStorage.setItem("token", response.data.token);
                sessionStorage.setItem("loggedIn", 'true');
                navigate('/home');
              })
                .catch(function (error) {
                  setErrorMessage('error-message');
                  console.log(error);
                });
            }
          })
          .catch(function (error) {
            setErrorMessage('error-message');
            console.log(error);
        });
        }}
      >
        {(formik) => {
          const { errors, touched, isValid, dirty } = formik;
          return (

            <div className="container">
              <h4 style={{ textAlign: 'center' }}>Sign up to continue</h4>
              <p className={errorMessage}>That name is already in use</p>
              <Form className="form-component">
                <div className="form-row">
                  <Field
                  style={{ position: 'relative', height: '2.5rem', width: '80%', marginRight: 'auto', marginLeft: 'auto' }}
                    type="username"
                    name="username"
                    placeholder="Username"
                    id="username"
                    className={
                      errors.username && touched.username ? "input-error" : null
                    }
                  />
                  <ErrorMessage className="error-message" name="username" component="span" />
                </div>
                <div className="form-row">
                  <Field
                    style={{ position: 'relative', height: '2.5rem', width: '80%', marginRight: 'auto', marginLeft: 'auto' }}
                    type="password"
                    name="password"
                    placeholder="Password"
                    id="password"
                    className={
                      errors.password && touched.password ? "input-error" : null
                    }
                  />
                  <ErrorMessage className="error-message" name="password" component="span"/>
                </div> 
                <div className="form-row">
                  <Field
                    style={{ position: 'relative', height: '2.5rem', width: '80%', marginRight: 'auto', marginLeft: 'auto' }}
                    type="password"
                    name="confirmpassword"
                    placeholder="Confirm password"
                    id="confirmpassword"
                    className={
                      errors.confirmpassword && touched.confirmpassword ? "input-error" : null
                    }
                  />
                  <ErrorMessage name="confirmpassword" component="span" className="error-message"/>
                </div>
                <Button 
                  style = {{display:'block', width:'80%', marginTop:'.5rem', marginRight:'auto', marginLeft: 'auto'}}
                  type="submit" 
                  className={!(dirty && isValid) ? "disabled-btn" : ""} 
                  disabled={!(dirty && isValid)} 
                  size="lg" 
                  variant="primary"> 
                  Register 
                </Button>
                <Button 
                  style = {{border: 'none', marginTop:'1rem', marginRight: 'auto', marginLeft: 'auto'}}
                  onClick = {() => props.setRegisterView(false)} 
                  size="sm" 
                  variant="outline-primary"> 
                  Back to login 
                </Button>
              </Form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

export default RegisterForm