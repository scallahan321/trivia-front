import React, {useState} from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import '../App.css';
import Navbar from './navbar';
import {Col, Row, Card} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

function DisplayGame(props){

    // const [animation, setAnimation] = useState('')

    // const hide = () => {
    //   setAnimation('hidden')
    // }

    // const show = () => {
    //   setAnimation('fade-message fadeinout')
    // }

    // function handleClick(e) {
    //   show()
    //   props.handleClick(e.target.value); 
    //   setTimeout(hide, 3500);
    // }

    return (

      <Container className="vh-100">
        <Row>
          <Navbar />
        </Row>
        {props.isLoading ? <Spinner animation="border" role="status"></Spinner> :
        <Row>
          <Card bg = {'light'} className="game-card" text = {"secondary"} >
                <Card.Body>
                  <Container>
                    <Row>
                      <h5 className='question-prompt'>{props.questions[props.current].question}</h5>
                    </Row>
                    {/* <Row className="text-primary" style={{textAlign:'center'}}>
                     <p className={animation}> {props.isCorrect}</p>
                    </Row> */}
                    <Row id='answer-button-top-row'>
                      <Col className='answer-button-col'>
                        <Button 
                          className='answer-button'
                          variant="outline-primary" 
                          value="one" 
                          onClick={ e => props.handleClick(e.target.value)}>
                          {props.questions[props.current].one}
                        </Button>
                      </Col>
                      <Col className='answer-button-col'>
                        <Button 
                            className='answer-button'
                            variant="outline-primary" 
                            value="two" 
                            onClick={ e => props.handleClick(e.target.value)}>
                            {props.questions[props.current].two}
                          </Button>
                      </Col>
                    </Row>
                    <Row id='answer-button-bottom-row'>
                      <Col className='answer-button-col'>
                        <Button 
                            className='answer-button'
                            variant="outline-primary" 
                            value="three" 
                            onClick={ e => props.handleClick(e.target.value)}>
                            {props.questions[props.current].three}
                        </Button>
                      </Col>
                      <Col className='answer-button-col'>
                        <Button 
                            className='answer-button'
                            variant="outline-primary" 
                            value="four" 
                            onClick={ e => props.handleClick(e.target.value)}>
                            {props.questions[props.current].four}
                          </Button>
                      </Col>
                    </Row>
                  </Container>
                </Card.Body>
          </Card>
        </Row>
        }
      </Container>

                 
      )
}
export default DisplayGame