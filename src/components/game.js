import '../App.css';
import React, {useEffect, useState, useMemo} from 'react';
import apiCall from './api_call';
import { useCallback } from 'react';
import axios from 'axios'

function Game(){

  const labels = ['q1','q2','q3','q4','q5','q6','q7','q8','q9','q10']
  const [current, setCurrent] = useState(0);
  const [questions, setQuestions] = useState([])
  //const [activeGame, SetActiveGame] = useState(true)
  const [isLoading, setIsLoading] = useState(true);

  function questionList(resp) {
    Object.keys(resp).map(key => {
    return resp[key]; })
  }
      
  function getEvents() {
      setIsLoading(true);
      axios.get("http://localhost:8000/questions")
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

  useEffect(()=>{
      getEvents()
      },[])

  function checkAnswer(answer) {
    if (questions[current][answer] === questions[current].correct) {
      return true
    }
  }

  function handleClick(selected){
    if (checkAnswer(selected)) {
        alert('Correct answer!')
    }
    else {
      alert('Wrong answer')
    }
    if (current<9){
    setCurrent(current + 1)
    }
  }
  
  return (

    <div>
    {isLoading ? <p>loading</p> :

    <div>

    <p>{questions[current].question}</p>

    <div style={{display:'inline-block', margin:'10px'}}>
    <button value="one" onClick={e => handleClick(e.target.value)}>{questions[current].one}</button>
    <button value="two" onClick={e => handleClick(e.target.value)}>{questions[current].two}</button>
    </div>

    <div style={{display:'inline-block', margin:'10px'}}>
    <button value="three" onClick={e => handleClick(e.target.value)}>{questions[current].three}</button>
    <button value="four" onClick={e => handleClick(e.target.value)}>{questions[current].four}</button>
    </div>

    </div>
    } 
    </div>
             
  )
}

export default Game


  //snippets to save
  /*
  <button style={{margin:'10px'}} onClick={handleClick}>{questions[labels[current]].one}</button>

  const apiData = useMemo(() => apiCall(), [])
  const questionList = Object.keys(apiData).map(key => {
  return apiData[key]; })

    //this works
  function getEvents() {
      setIsLoading(true);
      axios.get("http://localhost:8000/questions")
        .then(response => response.data)
        .then((data) => {
        //console.log(data)
        //setQuestions(data)
        setQuestions(data)
        setIsLoading(false)
        })
      }   

  */
