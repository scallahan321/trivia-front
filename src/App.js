import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios'

function App(){
  
  const [question, setQuestion] = useState('');
  const [one, setOne] = useState('');
  const [two, setTwo] = useState('');
  const [three, setThree] = useState('');
  const [four, setFour] = useState('');
  const [correct, setCorrect] = useState('');

 /* constructor(props) {
    super(props);
    this.state = {
      question_text: "",
      answer1: ""
    };
  }*/

  useEffect(()=>{
      axios.get('http://localhost:8000/questions').then(response => {
      //console.log('success')
      //this.useState({'question_text':response.question_text, "answer1":response.answer1})
      const data = response.data
      setQuestion(data.question)
      setOne(data.one)
      setTwo(data.two)
      setThree(data.three)
      setFour(data.four)
      setCorrect(data.correct)

    }).catch(error => {
      console.log(error)
    })

  }, [])



  return (
    <div className="App">
      <header className="App-header">
        <p>{question} </p>
        <ul>
          <li>{one}</li>
          <li>{two}</li>
          <li>{three}</li>
          <li>{four}</li>
        </ul>
    
        
      </header>
    </div>
  )
}

export default App;
