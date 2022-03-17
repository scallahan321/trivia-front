import React, {useState, useEffect} from "react";
import axios from "axios";
import '../App.css';
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import { useNavigate } from "react-router-dom";


function ViewStats() {
    const [stats, setStats] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [newUser, setNewUser] = useState(true)
    const [best, setBest] = useState('')
    var percent_correct_all = stats.correct_answers / stats.questions_attempted

    if (isNaN(percent_correct_all)){
        percent_correct_all = ''
    }
    else {
        percent_correct_all = toPercent(percent_correct_all)
    }

    const navigate = useNavigate()

    const categories = [
        {"label": "General Knowledge", "attempted" : stats.cat9_attempted, "correct": stats.cat9_correct,
        "percent" : (average(stats.cat9_correct, stats.cat9_attempted))
        },
        {"label": "Books", "attempted" : stats.cat10_attempted, "correct": stats.cat10_correct,
        "percent" : (average(stats.cat10_correct, stats.cat10_attempted))
        },
        {"label": "Film", "attempted": stats.cat11_attempted, "correct": stats.cat11_correct,
        "percent" : average(stats.cat11_correct, stats.cat11_attempted)
        },
        {"label": "Music", "attempted": stats.cat12_attempted, "correct": stats.cat12_correct,
        "percent" : average(stats.cat12_correct, stats.cat12_attempted)
        },
        {"label": "Television", "attempted": stats.cat14_attempted, "correct": stats.cat14_correct,
        "percent" : average(stats.cat14_correct, stats.cat14_attempted)
        },
        {"label": "Video Games", "attempted": stats.cat15_attempted, "correct": stats.cat15_correct,
        "percent" : average(stats.cat15_correct, stats.cat15_attempted)
        },
        {"label": "Science & Nature", "attempted": stats.cat17_attempted, "correct": stats.cat17_correct,
        "percent" : average(stats.cat17_correct, stats.cat17_attempted)
        },
        {"label": "Sports", "attempted": stats.cat21_attempted, "correct": stats.cat21_correct,
        "percent" : average(stats.cat21_correct, stats.cat21_attempted)
        },
        {"label": "Geography", "attempted": stats.cat22_attempted, "correct": stats.cat22_correct,
        "percent" : average(stats.cat22_correct, stats.cat22_attempted)
        },
        {"label": "History", "attempted": stats.cat23_attempted, "correct": stats.cat23_correct,
        "percent" : average(stats.cat23_correct, stats.cat23_attempted)
        }
        ]

    function average(correct, attempted) {
        if (attempted===0){
            return 'N/A'
        }
        else {
            const avg = correct/attempted
            return avg
        }
    }
   
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

    const bestCategory = () => {
        var bestPercent = 0;
        var bestCategory = ''
        categories.forEach((item) => {
            if (item.attempted===0){
                // pass
            }
            else {
                const avg = item.correct/item.attempted
                if (avg > bestPercent){
                    bestPercent = avg
                    bestCategory = item.label
                }
            }
        })
        setBest(bestCategory)
    }

    useEffect( () => {
        
            setIsLoading(true)
            const token = sessionStorage.getItem('token')
            const url = "http://localhost:8000/viewuserstats"
            const headers = {"Authorization": ""}
            headers.Authorization = "Token ".concat(token)
            axios.get(url, {headers})
              .then(function (response) {
              setStats(response.data);
              setIsLoading(false);
              if (response.data.questions_attempted>0) {
                  setNewUser(false)
              }
            }).catch(function (error) {
              console.log(error);
           });
    },[])

    useEffect(() => {
        bestCategory()
    })

     //will be passed as props to stats detail component
     const xValues = []
     const yValues = []
     for (const item of categories) {
         xValues.push(item.label)
         yValues.push(item.percent)
     }

    return (
        <div>
            {isLoading ? <Spinner animation="border" role="status"></Spinner> :
                <div>
                    <h3 style={{textAlign:'center', marginBottom:'2rem'}}> Your stats:</h3>
                    {newUser ? <p className="stats-message-visible">Play some rounds first!</p> :
                        <div>
                            
                            <div style={{textAlign: 'center'}}>
                                <p>Questions answered: <strong>{stats.questions_attempted}</strong></p>
                                <p>Correct answers: <strong>{stats.correct_answers}</strong></p>
                                <p>Percent correct: <strong>{percent_correct_all}</strong></p>
                                <p>Best category: <strong>{best}</strong></p>
                            </div>
            
                            <Button  
                                style = {{display:'block', width:'62%', marginTop:'2rem', marginRight:'auto', marginLeft: 'auto'}}
                                size="lg" 
                                variant="primary" 
                                // onClick = {()=> navigate('/statsdetail', {state: stats})}
                                onClick = {()=> navigate('/plotparent', {state: {stats: stats, categories: categories, x: xValues, y: yValues}})}
                                > 
                                Detailed stats
                            </Button>
                        </div>}
                </div>}
        </div>
     
    )
}

export default ViewStats

