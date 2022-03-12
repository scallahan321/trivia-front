import '../App.css';
import DisplayGame from './game_display';
import Results from './results';
import React, {useEffect, useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'


function Game(){

  const location = useLocation()
  const category = location.state
  
  const [current, setCurrent] = useState(0);
  const [lastQuestion, setLastQuestion] = useState(false)
  const [questions, setQuestions] = useState([])
  const [numCorrect, setNumCorrect] = useState(0)
  const [isLoading, setIsLoading] = useState(true);
  const [isCorrect, setIsCorrect] = useState('');

  
      
  function getQuestions(category) {
      setIsLoading(true);
      axios.post("http://localhost:8000/questions", category)
        .then(response => response.data)
        .then((data) => {
          const list = []
          const keys = Object.keys(data)
          keys.forEach(key => list.push(data[key]));
          console.log(list)
          setQuestions(list)
          setIsLoading(false)
        })
        }

  const navigate = useNavigate()

  useEffect(()=>{
        
        if (category===null){
          navigate('/home')
        }
        getQuestions({category})
      },[category, navigate])
  
  function checkAnswer(answer) {
    if (questions[current][answer] === questions[current].correct) {
      return true
    }
  }

  function handleClick(selected){
    if (checkAnswer(selected)) {
        //alert('Correct answer!')
        setIsCorrect('Correct answer!')
        setNumCorrect(numCorrect + 1)
    }
    else {
      //alert('Wrong answer')
      setIsCorrect('Wrong answer')
    }
    if (current<9){
      setCurrent(current + 1)
    }
    else if (current===9) {
      setLastQuestion(true)
    }
} 

  
  if (!lastQuestion) {
    return (
    
      // <div className='outer-container'>
      <div className='main'>
          
          <DisplayGame current={current} questions={questions} isLoading={isLoading} handleClick={handleClick}/>
          <h1>{isCorrect}</h1>
  
      </div>
  
    )
  }
  else {
    return (

      <Results numCorrect={numCorrect} />

    )
  }
 
}
export default Game