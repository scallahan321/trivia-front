import React, {useState, useEffect} from "react";
import axios from "axios";
import '../App.css';
import Spinner from 'react-bootstrap/Spinner'


function ViewStats() {
    const [stats, setStats] = useState({})
    const percent_correct = stats.correct_answers / stats.questions_attempted
    const [isLoading, setIsLoading] = useState(true)

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
                    <div>
                        <p>Questions answered: {stats.questions_attempted}</p>
                        <p>Correct answers: {stats.correct_answers}</p>
                        <p>Percent correct: {percent_correct}</p>
                    </div>
                </div>
                }
        </div>
     
    )
}

export default ViewStats

