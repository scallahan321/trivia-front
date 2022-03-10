import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";


const registerSchema = Yup.object().shape({
    username: Yup.string()
        .min(2, 'Too Short!')
        .max(25, 'Too Long!')
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


const RegisterForm = () => {
  const [userExists, setUserExists] = useState(false);
  const loggedIn = sessionStorage.getItem('loggedIn')
  const navigate = useNavigate()

  useEffect( () => {
      if (loggedIn !== null) {
        navigate('/user-profile')
      }
  }, [loggedIn, navigate])

  return (
    <div>
    <Formik
      initialValues={initialValues}
      validationSchema={registerSchema}
      onSubmit={(values) => {
        const url = "http://localhost:8000/register"
       
        axios.post(url, values).then
        ((response) => {
          if (response.status === 201){
            navigate('/login')
          }
        })
        .catch(function (error) {
          setUserExists(true)
       });

      }}
    >
      {(formik) => {
        const { errors, touched, isValid, dirty } = formik;
        return (
          <div className="container">
            <h1>Sign up to continue</h1>
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
                <div className="form-row">
                <label htmlFor="confirmpassword">Confirm Password</label>
                <Field
                  type="password"
                  name="confirmpassword"
                  id="confirmpassword"
                  className={
                    errors.confirmpassword && touched.confirmpassword ? "input-error" : null
                  }
                />
                <ErrorMessage
                  name="confirmpassword"
                  component="span"
                  className="error"
                />
              </div>

              <button
                type="submit"
                className={!(dirty && isValid) ? "disabled-btn" : ""}
                disabled={!(dirty && isValid)}
              >
                Sign Up
              </button>
            </Form>
          </div>
        );
      }}
    </Formik>

    {userExists ? <p>That name is already in use. Try a different one</p> : <p></p>}
    
    </div>

  );
};

export default RegisterForm;