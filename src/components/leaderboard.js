import axios from 'axios'
import React, {useEffect, useState} from 'react';
import Spinner from 'react-bootstrap/Spinner'
import Form from 'react-bootstrap/Form'
import '../App.css';


function Leaderboard() {

    const [isLoading, setIsLoading] = useState(true)
    const [leaders, setLeaders] = useState([])
    const [category, setCategory] = useState(0)
    const [dropdownLabel, setDropdownLabel] = useState("All categories")
    const categories = [
        {"label": "All categories", "value": 0},
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
    
    function toPercent(num) {
        var percent;
        if (num===1) {
            percent = "100%"
        }
        else {
            const str = num.toString()
            var sliced = str.slice(2,4)
            if (sliced.length<2){
                sliced = sliced.concat(0)
            }
            percent = sliced.concat("%")
        }
        return percent
    }

    useEffect( () => {
        const body = {"category": category}
        setIsLoading(true);
        axios.post("https://seans-trivia-api.herokuapp.com/leaderboard", body)
            .then(response => response.data)
            .then((data) => {
            const list = []
            const keys = Object.keys(data)
            keys.forEach(key => list.push(data[key]));
            setLeaders(list)
            setIsLoading(false)
            })
    }, [category])

    function onChange(e) {
        setCategory(parseInt(e.target.value));
        var index = e.nativeEvent.target.selectedIndex;
            //event.nativeEvent.target[index].text
        setDropdownLabel(e.nativeEvent.target[index].text)
    }

    return (
        <div>
            {isLoading ? <Spinner animation="border" role="status"></Spinner> :
                <div>
                    <h3 style={{textAlign:'center', marginBottom:'1.5rem'}}>Leaderboard</h3>
                    <Form.Select onChange={ e => onChange(e)} style={{height:'3rem'}} >
                        <option value="" hidden>{dropdownLabel}</option>
                        {categories.map((item) => <option key = {item.label} value={item.value}>{item.label}</option>)}
                    </Form.Select>
                    <ol >
                        <li className='leaderboard-list'>{leaders[0].username}:&nbsp;<strong>{toPercent(leaders[0].percent)}</strong></li>
                        <li className='leaderboard-list'>{leaders[1].username}:&nbsp;<strong>{toPercent(leaders[1].percent)}</strong></li>
                        <li className='leaderboard-list'>{leaders[2].username}:&nbsp;<strong>{toPercent(leaders[2].percent)}</strong></li>
                        <li className='leaderboard-list'>{leaders[3].username}:&nbsp;<strong>{toPercent(leaders[3].percent)}</strong></li>
                        <li className='leaderboard-list'>{leaders[4].username}:&nbsp;<strong>{toPercent(leaders[4].percent)}</strong></li>
                        
                    </ol>
                </div>
            }
        </div>     
    )
}

export default Leaderboard
