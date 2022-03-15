import axios from 'axios'
import React, {useEffect, useState} from 'react';
import Spinner from 'react-bootstrap/Spinner'
import Form from 'react-bootstrap/Form'
import '../App.css';


function Leaderboard() {

    const [isLoading, setIsLoading] = useState(true)
    // const [leaders, setLeaders] = useState({})
    const [leaders, setLeaders] = useState([])
    const [category, setCategory] = useState(0)

    const categories = [
        {"label": "General Knowledge", "value": 9},
        {"label": "Books", "value": 10},
        {"label": "Film", "value": 11},
        {"label": "Music", "value": 12},
        {"label": "Television", "value": 14},
        {"label": "Video Games", "value": 15},
        {"label": "Science & Nature", "value": 17},
        {"label": "Sports", "value": 21},
        {"label": "Geography", "value": 22},
        {"label": "History", "value": 23},
    ]


    // function getLeaderboard(category) {
    //     const body = {"category": category}
    //     setIsLoading(true);
    //     axios.post("http://localhost:8000/leaderboard", body)
    //       .then(response => response.data)
    //       .then((data) => {
    //         setLeaders(data)
    //         setIsLoading(false)
    //       })
    //       }

    function getLeaderboard(category) {
        const body = {"category": category}
        setIsLoading(true);
        axios.post("http://localhost:8000/leaderboard", body)
          .then(response => response.data)
          .then((data) => {
            const list = []
            const keys = Object.keys(data)
            keys.forEach(key => list.push(data[key]));
            setLeaders(list)
            setIsLoading(false)
          })
          }

    useEffect( () => {
        getLeaderboard(category)
    }, [category])



    return (

        <div>
            {isLoading ? <Spinner animation="border" role="status"></Spinner> :
                <div>
                    <h3 style={{textAlign:'center', marginBottom:'1rem'}}>Leaderboard</h3>

                    <Form.Select onChange={e => {setCategory(parseInt(e.target.value))}}  style={{height:'3rem'}} >
                        <option value="" hidden> All categories </option>
                        {categories.map((item) => <option key = {item.label} value={item.value}>{item.label}</option>)}
                    </Form.Select>

                    <ol >
                        {/* <li className='leaderboard-list'>{leaders.first}</li>
                        <li className='leaderboard-list'>{leaders.second}</li>
                        <li className='leaderboard-list'>{leaders.third}</li>
                        <li className='leaderboard-list'>{leaders.fourth}</li>
                        <li className='leaderboard-list'>{leaders.fifth}</li> */}
                        <li className='leaderboard-list'>{leaders[0].username}:&nbsp;{leaders[0].percent}&nbsp;correct</li>
                        {/* <li className='leaderboard-list'>{leaders.second.username}:&nbsp;{leaders.second.percent} correct</li>
                        <li className='leaderboard-list'>{leaders.third.username}:&nbsp;{leaders.third.percent} correct</li>
                        <li className='leaderboard-list'>{leaders.fourth.username}:&nbsp;{leaders.fourth.percent} correct</li>
                        <li className='leaderboard-list'>{leaders.fifth.username}:&nbsp;{leaders.fifth.percent} correct</li> */}
                    </ol>
                </div>
                }
        </div>
            
        
        
    )
}

export default Leaderboard
