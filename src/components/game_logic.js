import '../App.css';
import DisplayGame from './game_display';
import React, {useEffect, useState} from 'react';
import axios from 'axios'

function Game(){

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
      <DisplayGame current={current} questions={questions} isLoading={isLoading} handleClick={handleClick}/>
    </div>

  )
}
export default Game

    /*<div>
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
    </div>   */
             
  




  //snippets to save
/*
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
