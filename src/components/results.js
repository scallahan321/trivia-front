import axios from 'axios';
import { useEffect } from "react";
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom';


// this will receive numCorrect from game_logic
// display results on screen and post to back end
function Results(props) {

    const navigate = useNavigate()

    const token = sessionStorage.getItem('token')
    const headers = {"Authorization": ""}
    headers.Authorization = "Token ".concat(token)

    const stats = {"questions_attempted": 10, "correct_answers": props.numCorrect}


    function putRequest() {
        axios.put('http://localhost:8000/updatestats', stats, {headers})
       .then(function (response) {
         console.log(response);
       })
       .catch(function (error) {
         console.log(error);
      });
    }

    useEffect(() => {
        putRequest()
    })

    function handleClick(){
      navigate('/setup')

    }

      return (
            <div>
            {<h1>you scored {props.numCorrect} out of 10</h1>}
            <Button style={{display:"block"}} size="small" variant="outline-primary" onClick={handleClick} >play again</Button>
            </div>
        )

}

export default Results