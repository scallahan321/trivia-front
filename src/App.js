import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios'

function App() {
  const [stuff, setStuff] = useState({})

  useEffect(()=>{
    axios.get('http://localhost:8000/questions').then(response => {
      console.log("SUCCESS", response)
      setStuff(response)
    }).catch(error => {
      console.log(error)
    })

  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {stuff.data}
        </p>
        
      </header>
    </div>
  );
}

export default App;
