import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import '../App.css';
import Navbar from './navbar';
import {Col, Row, Card} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';


function DisplayGame(props){

    return (
      <Container className="vh-100">
        <Row>
          <Navbar />
        </Row>
        {props.isLoading ? <Spinner animation="border" role="status"></Spinner> :
        <Row style={{height: '90%'}}>
          <Card bg = {'light'} className="game-card" text = {"secondary"} >
            <Container style={{height: '100%'}}>
              <Row>
                <p className='question-prompt'>{props.questions[props.current].question}&nbsp; ({props.current+1}/10)</p>
              </Row>
              <Row style={{height:'40%'}}>
                <Col  lg={6} md={6} sm={12} xs={12} > 
                  <div className='answer-button-div'>
                    <Button 
                      className='answer-button'
                      variant='outline-primary'
                      value="one" 
                      onClick={ e => props.handleClick(e.target.value)}>
                      {props.questions[props.current].one}
                    </Button>
                  </div>
                </Col>
                <Col  lg={6} md={6} sm={12} xs={12}> 
                  <div className='answer-button-div'>
                    <Button 
                        className='answer-button'
                        variant="outline-primary" 
                        value="two" 
                        onClick={ e => props.handleClick(e.target.value)}>
                        {props.questions[props.current].two}
                      </Button>
                  </div>
                </Col>
              </Row>
              <Row style={{height:'40%'}}>
                <Col  lg={6} md={6} sm={12} xs={12}> 
                  <div className='answer-button-div'>
                    <Button 
                        className='answer-button'
                        variant="outline-primary" 
                        value="three" 
                        onClick={ e => props.handleClick(e.target.value)}>
                        {props.questions[props.current].three}
                    </Button>
                  </div>
                </Col>
                <Col  lg={6} md={6} sm={12} xs={12}> 
                  <div className='answer-button-div'>
                    <Button 
                        className='answer-button'
                        variant="outline-primary" 
                        value="four" 
                        onClick={ e => props.handleClick(e.target.value)}>
                        {props.questions[props.current].four}
                      </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </Card>
        </Row>
        }
      </Container>       
      )
}
export default DisplayGame