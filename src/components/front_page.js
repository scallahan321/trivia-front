import React, {useState} from "react";
import { Card, Col, Row } from "react-bootstrap"
import Container from 'react-bootstrap/Container';
import LoginForm from "./login_form";
import '../App.css';
import RegisterForm from "./register_form";


function FrontPage() {

    const [registerView, setRegisterView] = useState(false)
    
    return(
     
      <Container className="vh-100">
        <Row>

        </Row>
        <Row className="front-page-container-row">
            <Col className="front-page-container-col">
              <div id="front-page-welcome-message">
              <h3 className="text-primary">Welcome to Sean's trivia game</h3>
              </div>
              
            </Col>
            <Col className="front-page-container-col">
            <Card style={{borderRadius: '8px', boxShadow: '1px 1px #D3D3D3'}} bg = {'light'} className="front-page-card" text = {"secondary"} >
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