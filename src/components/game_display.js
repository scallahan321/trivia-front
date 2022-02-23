import Spinner from 'react-bootstrap/Spinner'

function DisplayGame(props){
    
    return (

        <div>
        {props.isLoading ?
        <Spinner animation="border" role="status"></Spinner> :

        <div>
    
        <p>{props.questions[props.current].question}</p>
    
        <div style={{display:'inline-block', margin:'10px'}}>
        <button value="one" onClick={e => props.handleClick(e.target.value)}>{props.questions[props.current].one}</button>
        <button value="two" onClick={e => props.handleClick(e.target.value)}>{props.questions[props.current].two}</button>
        </div>
    
        <div style={{display:'inline-block', margin:'10px'}}>
        <button value="three" onClick={e => props.handleClick(e.target.value)}>{props.questions[props.current].three}</button>
        <button value="four" onClick={e => props.handleClick(e.target.value)}>{props.questions[props.current].four}</button>
        </div>
    
        </div>
        } 

        </div>
                 
      
      )
}
export default DisplayGame