import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from 'react-bootstrap/Button'
import {Row, Card} from 'react-bootstrap'
import Container from 'react-bootstrap/Container';

function Logout() {

    const navigate = useNavigate()

    const onSubmit = () => {
        const user = sessionStorage.getItem('username')
        const data = {'username': user}
        const token = sessionStorage.getItem("token")
        const url = "https://seans-trivia-api.herokuapp.com/logout"
        const headers = {"Authorization": ""}
        headers.Authorization = "Token ".concat(token)
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('username')
        sessionStorage.removeItem('loggedIn')

        axios.post(url, data, {headers})
        .then(function (response) {
          navigate('/', {state: "goodbye"})
        })
        .catch(function (error) {
          console.log(error);
       });
    };
   
    return (
      <Container className="vh-100">
        <Row>
          <Card bg = {'light'} id="logout-card" text = {"secondary"} >
                <Card.Body>
                  <Button 
                    style = {{display:'block', width:'80%', marginTop:'2rem', marginRight:'auto', marginLeft: 'auto'}}
                    variant="primary" 
                    onClick={onSubmit}>
                    Log out
                  </Button>
                  <Button
                    style = {{display:'block', border: 'none', marginTop:'2rem', marginRight: 'auto', marginLeft: 'auto'}}
                    onClick = {() => navigate('/home')} 
                    size="sm" 
                    variant="outline-primary"> 
                    Back to home
                  </Button>
                </Card.Body>
          </Card>
        </Row>
      </Container>  
    )
}
export default Logout