import axios from 'axios';
import { useEffect } from "react";

// this will receive numCorrect from game_logic
// display results on screen and post to back end
function Results(props) {

    const stats = {"user": 1, "questions_attempted": 10, "correct_answers": props.numCorrect}

    function putRequest() {
        axios.put('http://localhost:8000/UpdateStats', stats)
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

    /*useEffect(() => {
        const stats = {"user": 1, "questions_attempted": 10, "correct_answers": props.numCorrect}
       // axios.post("http://localhost:8000/postStats", stats);
       // headers = then user id num
        axios.put('http://localhost:8000/UpdateStats', stats)
       .then(function (response) {
         console.log(response);
       })
       .catch(function (error) {
         console.log(error);
      });
       },);*/

        return (
            <div>
            {<h1>you scored {props.numCorrect} out of 10</h1>}
            </div>
        )

}

export default Results