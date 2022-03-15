import React, {useState, useEffect} from "react";
import axios from "axios";
import '../App.css';
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import { useNavigate } from "react-router-dom";


function ViewStats() {
    const [stats, setStats] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    var percent_correct = (stats.correct_answers / stats.questions_attempted).toFixed(2)
    if (isNaN(percent_correct)){
        percent_correct = ''
    }
    const navigate = useNavigate()


    function getStats() {
        setIsLoading(true)
        const token = sessionStorage.getItem('token')
        const url = "http://localhost:8000/viewuserstats"
        const headers = {"Authorization": ""}
        headers.Authorization = "Token ".concat(token)
        axios.get(url, {headers})
          .then(function (response) {
          setStats(response.data);
          
          setIsLoading(false);
        }).catch(function (error) {
          console.log(error);
       });
    }

    useEffect( () => {
       getStats()
    },[])


    return (
        <div>
            {isLoading ? <Spinner animation="border" role="status"></Spinner> :
                <div>
                    <h3 style={{textAlign:'center', marginBottom:'2rem'}}> Your stats:</h3>
                    <div style={{textAlign: 'center'}}>
                        <p>Questions answered: <strong>{stats.questions_attempted}</strong></p>
                        <p>Correct answers: <strong>{stats.correct_answers}</strong></p>
                        <p>Percent correct: <strong>{percent_correct}</strong></p>
                    </div>
                    <Button  
                        style = {{display:'block', width:'62%', marginTop:'2rem', marginRight:'auto', marginLeft: 'auto'}}
                        size="lg" 
                        variant="primary" 
                        onClick = {()=> navigate('/detailedstats', {state: stats})}
                        > 
                        Detailed stats
                    </Button>
                </div>
                }
        </div>
     
    )
}

export default ViewStats

