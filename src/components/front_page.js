import React from "react";
import { Card, Col, Row } from "react-bootstrap"
import Container from 'react-bootstrap/Container';
import LoginForm from "./login";
import '../App.css';




function FrontPage() {
    
    return(
     
        <Container className="vh-100">
              <Row style={{marginTop: "10%", marginBottom: "20%"}}>
                  <Col style={{textAlign:"center"}}>
                    <div style={{paddingTop:'15%', paddingBottom:'10%'}}>
                    <h4 style={{color:'blue'}}>Welcome to Sean's trivia game</h4>
                    </div>
                    
                  </Col>
                  <Col style={{textAlign:"center"}}>
                  <Card bg = {'light'} style = {{ width: '24rem', height: '20rem'}} text = {"dark"} >
                    <Card.Body>
                      <LoginForm />
                      
                    </Card.Body>
                  </Card>
                      
                  </Col>
              </Row>

          </Container>
          
    
    ) 
}

export default FrontPage