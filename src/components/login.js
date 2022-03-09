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
  //const [loggedIn, setLoggedIn] = useState(false)

  // useEffect( () => {
  //   if (sessionStorage.getItem('token')) {
  //    setLoggedIn(true)
  //   }
  //   if (loggedIn===true) {
  //     navigate('/user-profile')
  //   }
  // },[loggedIn, navigate])

  useEffect( () => {
    if (sessionStorage.getItem('loggedIn')==='true') {
     navigate('/user-profile')
    }

  },[navigate])


  return (
    <div>
      <Link to="/test-token">test token</Link>
    
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

      }}

    >
      {(formik) => {
        const { errors, touched, isValid, dirty } = formik;
        return (
          <div className="container">
            <h1>Sign in to continue</h1>
            <Form>
              <div className="form-row">
                <label htmlFor="username">Username</label>
                <Field
                  type="username"
                  name="username"
                  id="username"
                  className={
                    errors.username && touched.username ? "input-error" : null
                  }
                />
                <ErrorMessage name="username" component="span" className="error" />
              </div>

              <div className="form-row">
                <label htmlFor="password">Password</label>
                <Field
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

    {userExists ? <p></p> : 
    <div>
    <p>User not found. Please click the link to register.</p>
    <Link to="/register">Register</Link>
    </div>}
    
    </div>
  );
};

export default LoginForm;