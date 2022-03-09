import axios from 'axios';
import { useEffect } from "react";

// this will receive numCorrect from game_logic
// display results on screen and post to back end
function Results(props) {

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

      return (
            <div>
            {<h1>you scored {props.numCorrect} out of 10</h1>}
            </div>
        )

}

export default Results