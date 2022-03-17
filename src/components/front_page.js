import React, {useState} from "react";
import { Card, Col, Row } from "react-bootstrap"
import Container from 'react-bootstrap/Container';
import LoginForm from "./login_form";
import { useLocation } from "react-router-dom";
import '../App.css';
import RegisterForm from "./register_form";


function FrontPage() {
  
    const [registerView, setRegisterView] = useState(false)
    const location = useLocation()
    const logoutMessage = location.state 
    
    return(
      <Container className="vh-100">
        <Row>
        
        </Row>
        <Row className="front-page-container-row">
            <Col className="front-page-container-col" lg={6} md={6} sm={12} xs={12}>
              <div id="front-page-welcome-message">
                {logoutMessage==="goodbye" ? <h3 className="text-primary">You've been signed out. Thanks for playing</h3>:
                <h3 className="text-primary">Welcome to Sean's trivia game</h3>
                }
              </div>
            </Col>
            <Col className="front-page-container-col" lg={6} md={6} sm={12} xs={12}>
            <Card bg = {'light'} className="front-page-card" text = {"secondary"} >
              <Card.Body>
                {!registerView ? <LoginForm setRegisterView = {setRegisterView}/> : 
                  <RegisterForm setRegisterView = {setRegisterView} />
                }
              </Card.Body>
            </Card>
            </Col>
        </Row>
      </Container>
    ) 
}

export default FrontPage