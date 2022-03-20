import axios from 'axios';
import { useEffect } from "react";
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom';
import Navbar from './navbar';
import {Row, Card} from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import '../App.css';


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

    const listResults = (item) => {
      if (item.user_answer===item.correct_answer){
          return (
           <li className='result-li' key = {item.question}>
               <p className='result-p' style={{fontWeight:'bold'}}>{item.question}&nbsp;</p>
               <p className='result-p'>You answered:&nbsp;</p>
               <p className='result-p' style={{color:'green',fontWeight:'bold'}}> {item.user_answer}&nbsp; </p>
               <p className='result-p'> Correct answer:&nbsp; </p>
               <p className='result-p' style={{color:'green',fontWeight:'bold'}}>{item.correct_answer}</p>
           </li>
          )
      }
       else {
           return (
               <li className="result-li" key = {item.question}>
               <p className="result-p" style={{fontWeight:'bold'}}>{item.question}&nbsp;</p>
               <p className='result-p'>You answered:&nbsp;</p>
               <p className="result-p" style={{color:'red',fontWeight:'bold'}}> {item.user_answer}&nbsp; </p>
               <p className="result-p"> Correct answer:&nbsp; </p>
               <p className='result-p' style={{color:'green',fontWeight:'bold'}}>{item.correct_answer}</p>
           </li>
           )
       }
      }

    return (
        <Container className="vh-100">
          <Row>
            <Navbar />
          </Row>
          <Row style={{height:'90%'}}>
            <Card className = "game-card" bg = {'light'} text = {"secondary"}>
                  {/* <Card.Body> */}
                    <div style={{height: '10%', marginTop:'2.5%'}}>
                      <h2 style={{textAlign:'center'}}>You scored {props.numCorrect}/10</h2>
                    </div>
                    <div style={{height: '8%', paddingTop: '2%'}}>
                      <p className='text-primary' style={{textAlign:'center'}}>Scroll down to view your results</p>
                    </div>
                    <div id="result-container">
                      
                      <ul style={{listStyleType:'none'}}>
                        {props.results.map((item) => listResults(item))}
                      </ul>
                    </div>
                    <div style={{height: '15%', marginTop:'2.5%', marginBottom:'2.5%',paddingTop:'1%'}}>
                      <Button  
                        style = {{display:'block', width:'50%', marginRight:'auto', marginLeft: 'auto', height:'85%',fontsize:'1.5vw'}}
                        size="lg" 
                        variant="primary" 
                        onClick = {() => navigate('/home')}>
                        Return home 
                      </Button> 
                    </div>
                    
                  {/* </Card.Body> */}
            </Card>
          </Row>
        </Container>
      ) 
}

export default Results