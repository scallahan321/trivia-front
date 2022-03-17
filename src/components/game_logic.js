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
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [isCorrect, setIsCorrect] = useState(false);
  const navigate = useNavigate()
      
  function getQuestions(category) {
      setIsLoading(true);
      axios.post("https://seans-trivia-api.herokuapp.com/questions", category)
        .then(response => response.data)
        .then((data) => {
          const list = []
          const keys = Object.keys(data)
          keys.forEach(key => list.push(data[key]));
          setQuestions(list)
          setIsLoading(false)
        })
        }

  useEffect(()=>{
        
      if (category===null){
        navigate('/home')
      }
      else {
        getQuestions({category})
      }
      
    },[category, navigate])
  
  function checkAnswer(answer) {
    if (questions[current][answer] === questions[current].correct) {
      return true
    }
  }

  function handleClick(selected){
    if (checkAnswer(selected)) {
        setIsCorrect(true)
        setNumCorrect(numCorrect + 1)
        const result = {'question':questions[current].question, 
                      'user_answer': questions[current][selected],
                      'correct_answer': questions[current].correct
                    }
        setResults(results => [...results, result])
    }
    else {
      setIsCorrect(false)
      const result = {'question':questions[current].question, 
                      'user_answer': questions[current][selected],
                      'correct_answer': questions[current].correct
                    }
        setResults(results => [...results, result])
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
      <DisplayGame 
      current={current} 
      questions={questions} 
      isLoading={isLoading} 
      isCorrect={isCorrect}
      handleClick={handleClick}/>
    )
  }
  else {
    return (
      <Results numCorrect={numCorrect} results={results} category={category}/>
    )
  }  
}
export default Game