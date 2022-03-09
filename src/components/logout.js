import React from "react";
//import { useNavigate } from "react-router-dom";
import axios from "axios";

function Logout() {

    const onSubmit = () => {
        const user = sessionStorage.getItem('username')
        const data = {'username': user}
        const token = sessionStorage.getItem("token")
        const url = "http://localhost:8000/logout"
        const headers = {"Authorization": ""}
        headers.Authorization = "Token ".concat(token)

        sessionStorage.removeItem('token')
        sessionStorage.removeItem('username')
        sessionStorage.removeItem('loggedIn')

        axios.post(url, data, {headers})
        .then(function (response) {
          console.log(response.data);
          
        })
        .catch(function (error) {
          console.log(error);
       });
    };
   

    return (
        
        <button onClick = {onSubmit}>Logout</button>
    )

}
export default Logout