import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import '../App.css';

function DisplayGame(props){
    
    return (
        <div className='display-container'>
        {props.isLoading ?
        <Spinner animation="border" role="status"></Spinner> :
        
       <div className='question-container'>
            
        <p>{props.questions[props.current].question}</p>
    
        <div className='button-row'>
        <div className='button-container'>
        <Button size="big" variant="outline-primary" value="one" onClick={e => props.handleClick(e.target.value)}>{props.questions[props.current].one}</Button>
        </div>

        <div className='button-container'>
        <Button size="big" variant="outline-primary" value="two" onClick={e => props.handleClick(e.target.value)}>{props.questions[props.current].two}</Button>
        </div>

        </div>
        <br></br>
    
        <div className='button-row'>
        <div className='button-container'>
        <Button size="big" variant="outline-primary" value="three" onClick={e => props.handleClick(e.target.value)}>{props.questions[props.current].three}</Button>
        </div>
        
        <div className='button-container'>
        <Button size="big" variant="outline-primary" value="four" onClick={e => props.handleClick(e.target.value)}>{props.questions[props.current].four}</Button>
        </div>

        </div>
        </div>
        } 
        </div>
                 
      )
}
export default DisplayGame