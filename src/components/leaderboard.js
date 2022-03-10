import axios from 'axios'
import React, {useEffect, useState} from 'react';
import Spinner from 'react-bootstrap/Spinner'

function Leaderboard() {

    const [isLoading, setIsLoading] = useState(true)
    const [leaders, setLeaders] = useState({})

    function getLeaderboard(category) {
        setIsLoading(true);
        axios.get("http://localhost:8000/leaderboard")
          .then(response => response.data)
          .then((data) => {
            setLeaders(data)
            setIsLoading(false)
          })
          }

    useEffect( () => {
        getLeaderboard()
    }, [])



    return (
        <div>
            {isLoading ? <Spinner animation="border" role="status"></Spinner> :
            
            <div>
            <h1>Leaderboard</h1>
            <ol>
                <li>{leaders.first}</li>
                <li>{leaders.second}</li>
                <li>{leaders.third}</li>
                <li>{leaders.fourth}</li>
                <li>{leaders.fifth}</li>
            </ol>
            </div>
            }
        </div>
        
    )
}

export default Leaderboard
