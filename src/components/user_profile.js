import React, {useState, useEffect} from "react";
import axios from "axios";



function UserProfile() {

    const [stats, setStats] = useState({})
    const username = sessionStorage.getItem('username')

    useEffect( () => {
        const token = sessionStorage.getItem('token')
        const url = "http://localhost:8000/viewuserstats"
        const headers = {"Authorization": ""}
        headers.Authorization = "Token ".concat(token)
        axios.get(url, {headers})
        .then(function (response) {
          setStats(response.data);
        })
        .catch(function (error) {
          console.log(error);
       });
    }, [])

       
    return(
        <div>

        <h1>{username}</h1>
        <h1>{stats.questions_attempted}</h1>
        <h1>{stats.correct_answers}</h1>


        </div>
        
        
    )


}

export default UserProfile