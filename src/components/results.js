import axios from 'axios';
import { useEffect } from "react";
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom';
import Navbar from './navbar';
import {Row, Card} from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import '../App.css';
import DetailResults from './detail_results';


// this will receive numCorrect from game_logic
// display results on screen and post to back end
function Results(props) {

    const navigate = useNavigate()
    const token = sessionStorage.getItem('token')
    const headers = {"Authorization": ""}
    headers.Authorization = "Token ".concat(token)
    const stats = {'questions_attempted': 10, 'correct_answers': props.numCorrect, 'category': parseInt(props.category,10)}

    function putRequest() {
        axios.put('http://localhost:8000/updatestats', stats, {headers})
       .then(function (response) {
          //console.log(response);
       })
       .catch(function (error) {
         console.log(error);
      });
    }

    useEffect(() => {
        putRequest()
    })

    return (
        <Container className="vh-100">
          <Row>
            <Navbar />
          </Row>
         
          <Row >
            <Card className = "game-card" bg = {'light'} text = {"secondary"} >
                  <Card.Body>
                    <h2 style={{marginTop: '1rem', textAlign:'center'}}>You scored {props.numCorrect}/10</h2>
                    <p className='text-primary' style={{marginBottom:'1rem', marginTop:'2rem', textAlign:'center'}}>Scroll down to view your results</p>
                    <div id="result-container">
                      <DetailResults results={props.results}/>
                    </div>
                    <Button  
                      style = {{display:'block', width:'50%', marginTop:'3rem', marginRight:'auto', marginLeft: 'auto'}}
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