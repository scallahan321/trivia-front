import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Button from 'react-bootstrap/Button'


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

function LoginForm(props) {

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('error-message-hidden')

  useEffect(() => {
    if (sessionStorage.getItem('loggedIn') === 'true') {
      navigate('/home');
    }
  }, [navigate]);

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={signInSchema}
        onSubmit={(values) => {
          //trying this out
          const url = "https://seans-trivia-api.herokuapp.com/api-token-auth/";
          axios.post(url, values).then((response) => {
            sessionStorage.setItem("username", values.username);
            sessionStorage.setItem("token", response.data.token);
            sessionStorage.setItem("loggedIn", 'true');
            navigate('/home');
          })
            .catch(function (error) {
              setErrorMessage('error-message')
              console.log(error);
            });
        } }>
        {(formik) => {
          const { errors, touched, isValid, dirty } = formik;
          return (
            <div className="container">
              <h4 style={{ textAlign: 'center' }}>Sign in to play</h4>
              <p className={errorMessage}>User not found. Register below</p>
              <Form className="form-component">
                <div className="form-row">
                  <Field
                    style={{ position: 'relative', height: '2.5rem', width: '15rem', marginRight: 'auto', marginLeft: 'auto' }}
                    type="username"
                    name="username"
                    placeholder="Username"
                    id="username"
                    className={errors.username && touched.username ? "input-error" : null} 
                    />
                  <ErrorMessage name="username" component="span" className="error-message" />
                </div>
                <div className="form-row">
                  <Field
                    style={{ position: 'relative', height: "2.5rem", width: '15rem', marginRight: 'auto', marginLeft: 'auto' }}
                    type="password"
                    name="password"
                    placeholder="Password"
                    id="password"
                    className={errors.password && touched.password ? "input-error" : null} 
                    />
                  <ErrorMessage name="password" component="span" className="error-message" />
                </div>
                <Button 
                  style = {{display:'block', width:'80%', marginTop:'.5rem', marginRight:'auto', marginLeft: 'auto'}}
                  type="submit" 
                  className={!(dirty && isValid) ? "disabled-btn" : ""} 
                  disabled={!(dirty && isValid)} 
                  size="lg" 
                  variant="primary"> 
                  Sign in 
                </Button>
                <div style={{height:'1px', border: '.5px solid #D3D3D3', marginTop:'1.5rem', marginBottom:'1.5rem'}}></div>
                <Button  
                  style = {{display:'block', width:'80%', marginTop:'.5rem', marginRight:'auto', marginLeft: 'auto'}}
                  size="lg" 
                  variant="outline-primary" 
                  onClick = { () => props.setRegisterView(true)}> 
                  Register 
                </Button>
              </Form>
            </div>
          );
        } }

      </Formik>
    </div>
  );
}

export default LoginForm