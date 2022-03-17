import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import Leaderboard from "./leaderboard";
import '../App.css';
import {Col, Row, Card} from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Navbar from "./navbar";
import PartialStats from "./partial_stats";
import GameSetup from "./game_setup";


function UserProfile() {

    const username = sessionStorage.getItem('username')
    const loggedIn = sessionStorage.getItem('loggedIn')
    const navigate = useNavigate()
  
    useEffect( () => {
        if (loggedIn === null) {
          navigate('/')
        }
        
    }, [navigate, loggedIn])
  
    return(
      <Container className="vh-100">
        <Row>
          <Navbar />
        </Row>
        <Row>
          <h3 id="welcome-message" className="text-primary">Hello {username}</h3>
        </Row>
        <Row>
          <Col lg={4} md={4} sm={12} xs={12}>
            <Card bg = {'light'} className="stats-card" text = {"secondary"} >
              <Card.Body>
                <PartialStats />
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={4} sm={12} xs={12}>
            <Card bg = {'light'} className="game-setup-card" text = {"secondary"} >
                  <Card.Body>
                  <h2 style={{textAlign:'center', marginBottom:'2rem'}}> <strong>Play Trivia</strong></h2>
                    <GameSetup />
                  </Card.Body>
              </Card>
          </Col>
          <Col lg={4} md={4} sm={12} xs={12}>
            <Card bg = {'light'} className="leaderboard-card" text = {"secondary"} >
                <Card.Body>
                  <Leaderboard />
                </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
}

export default UserProfile