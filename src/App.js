import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios'


function App(){
  
  //const [questions, SetQuestion] = useState(JSON.parse(sessionStorage.getItem('questions')));
  //const [current, SetCurrent] = useState(0)
  const questions = JSON.parse(sessionStorage.getItem('questions'));
  const [count, SetCount] = useState(0);
  const label = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10']

  function update() {
    if (count < 9) {
      SetCount(count + 1)
    }
  }

  useEffect(()=>{
      axios.get('http://localhost:8000/questions').then(response => {
  
      const data = JSON.stringify(response.data);
      sessionStorage.setItem('questions', data);
      
    }).catch(error => {
      console.log(error)
    })

  }, [])

  //console.log(questions[query].question)



  return (
    <div className="App">
      <header className="App-header">
      <button onClick={update}>
        Click me
      </button>
      <p>{questions[label[count]].question}</p>
      </header>
    </div>
  )
}

export default App;
