import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import Leaderboard from "./leaderboard";
import '../App.css';
import {Col, Row} from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Navbar from "./navbar";



function UserProfile() {

    const [stats, setStats] = useState({})
    const username = sessionStorage.getItem('username')
    const loggedIn = sessionStorage.getItem('loggedIn')
    const navigate = useNavigate()
    const percent_correct = stats.correct_answers / stats.questions_attempted

    useEffect( () => {
        if (loggedIn !== null) {
          const token = sessionStorage.getItem('token')
          const url = "http://localhost:8000/viewuserstats"
          const headers = {"Authorization": ""}
          headers.Authorization = "Token ".concat(token)
          axios.get(url, {headers})
          .then(function (response) {
          setStats(response.data);
        }).catch(function (error) {
          console.log(error);
       });
        }
        else {
          navigate('/')
        }
        
    }, [navigate, loggedIn])

       
    return(
         
          <Container className="vh-100">
          <Row>
            <Navbar />
          </Row>
          <Row>
            <h2 id="welcome-message" className="text-primary">Hello {username}</h2>
          </Row>
          <Row>
            <Col>
              <h3>{username} stats:</h3>
              <p>Questions answered: {stats.questions_attempted}</p>
              <p>Correct answers: {stats.correct_answers}</p>
              <p>Percent correct: {percent_correct}</p>
            </Col>
            <Col>
              <Leaderboard />
            </Col>

          </Row>
        </Container>
        
        
        
    )


}

export default UserProfile