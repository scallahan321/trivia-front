import axios from 'axios'
import React, {useEffect, useState} from 'react';
import Spinner from 'react-bootstrap/Spinner'
import '../App.css';


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
                    <h3 style={{textAlign:'center', marginBottom:'2rem'}}>Leaderboard</h3>
                    <ol >
                        <li className='leaderboard-list'>{leaders.first}</li>
                        <li className='leaderboard-list'>{leaders.second}</li>
                        <li className='leaderboard-list'>{leaders.third}</li>
                        <li className='leaderboard-list'>{leaders.fourth}</li>
                        <li className='leaderboard-list'>{leaders.fifth}</li>
                    </ol>
                </div>
                }
        </div>
            
        
        
    )
}

export default Leaderboard
