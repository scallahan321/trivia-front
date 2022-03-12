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

  const [userExists, setUserExists] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem('loggedIn') === 'true') {
      navigate('/user-profile');
    }

  }, [navigate]);


  return (
    <div>


      <Formik
        initialValues={initialValues}
        validationSchema={signInSchema}

        onSubmit={(values) => {
          const url = "http://localhost:8000/api-token-auth/";
          axios.post(url, values).then((response) => {
            sessionStorage.setItem("username", values.username);
            sessionStorage.setItem("token", response.data.token);
            sessionStorage.setItem("loggedIn", 'true');
            navigate('/user-profile');
          })
            .catch(function (error) {
              setUserExists(false);
              console.log(error);
            });

        } }>

        {(formik) => {
          const { errors, touched, isValid, dirty } = formik;
          return (
            <div className="container">
              <h4 style={{ textAlign: 'center' }}>Sign in to play</h4>

              {userExists ? <p style={{ visibility: 'hidden', fontSize: '14px' }}>not found. Register below</p> :
                <p style={{ visibility: 'visible', color: 'red', fontSize: '14px' }}>User not found. Register below</p>}

              <Form style={{ marginTop: '5%' }}>
                <div className="form-row" style={{ height: "4rem", marginBottom: '5%', marginLeft: 'auto', marginRight: 'auto' }}>
                  {/* <label style={{width:'26%'}} htmlFor="username">Username </label> */}
                  <Field
                    style={{ position: 'relative', height: '2.5rem', width: '15rem', marginRight: 'auto', marginLeft: 'auto' }}
                    type="username"
                    name="username"
                    placeholder="Username"
                    id="username"
                    className={errors.username && touched.username ? "input-error" : null} />
                  <div style={{ width: '100%', textAlign: 'center', fontSize: '1rem', color: 'red' }}>
                    <ErrorMessage name="username" component="span" className="error" />
                  </div>

                </div>
                {/* <br></br> */}

                <div className="form-row" style={{ height: "4rem", marginBottom: '5%', marginRight: 'auto', marginLeft: 'auto' }}>
                  {/* <label style={{width:'25%'}} htmlFor="password">Password</label> */}
                  <Field
                    style={{ position: 'relative', height: "2.5rem", width: '15rem', marginRight: 'auto', marginLeft: 'auto' }}
                    type="password"
                    name="password"
                    placeholder="Password"
                    id="password"
                    className={errors.password && touched.password ? "input-error" : null} />
                  <div style={{ width: '100%', textAlign: 'center', fontSize: '1rem', color: 'red' }}>
                    <ErrorMessage name="password" component="span" className="error" />
                  </div>
                </div>

                {/* <button
                          type="submit"
                          className={!(dirty && isValid) ? "disabled-btn" : ""}
                          disabled={!(dirty && isValid)}
                        >
                          Sign In
                        </button> */}

                <Button style={{display:'block', marginTop:'1rem', marginLeft:'auto', marginRight:'auto', width:'80%'}} type="submit" className={!(dirty && isValid) ? "disabled-btn" : ""} disabled={!(dirty && isValid)} size="lg" variant="primary"> Sign in </Button>
                <div style={{height:'1px', border: '.5px solid #D3D3D3', marginTop:'1.5rem', marginBottom:'1.5rem'}}>
                </div>
                <Button  
                  style={{display:'block', width:'80%', marginTop:'.5rem', marginLeft:'auto', marginRight:'auto'}} 
                  size="lg" variant="outline-primary" 
                  onClick = { () => props.setRegisterView(true)}
                  > Register 
                  </Button>
                
              </Form>
            </div>
          );
        } }

      </Formik>

      {/* <div style={{ marginTop: '20px' }}><Link to="/register">Register</Link> </div> */}
      





    </div>
  );
}

export default LoginForm