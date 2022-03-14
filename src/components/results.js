import axios from 'axios';
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button'
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from './navbar';
import {Row, Card} from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner'
import GameSetup from './game_setup';
import '../App.css';


// this will receive numCorrect from game_logic
// display results on screen and post to back end
function Results(props) {

     const navigate = useNavigate()
    // const location = useLocation()


 
    

    const token = sessionStorage.getItem('token')
    const headers = {"Authorization": ""}
    headers.Authorization = "Token ".concat(token)

    const stats = {"questions_attempted": 10, "correct_answers": props.numCorrect}


    function putRequest() {
        
        axios.put('http://localhost:8000/updatestats', stats, {headers})
       .then(function (response) {
         console.log(response);
         
       })
       .catch(function (error) {
         console.log(error);
      });
    }

    useEffect(() => {
        putRequest()
    })

    // function handleClick(){
    //   navigate('/playagain')
    // }


    return (
        <Container className="vh-100">
          <Row>
            <Navbar />
          </Row>
         
          <Row >
            <Card bg = {'light'} id="results-card" text = {"secondary"} >
                  <Card.Body>
                    {<h4>You scored {props.numCorrect} out of 10</h4>}
                      <Button  
                      style = {{display:'block', width:'50%', marginTop:'1.5rem', marginRight:'auto', marginLeft: 'auto'}}
                      size="lg" 
                      variant="primary" 
                      onClick = {() => navigate('/home')}>
                      Return home 
                    </Button> 
                  </Card.Body>
            </Card>
          </Row>
          
    </Container>
      )
         
}

export default Results