import React from "react";
//import { useNavigate } from "react-router-dom";
import axios from "axios";

function Logout() {

    const onSubmit = () => {
        //sessionStorage.clear();
        //console.log("session storage should be cleared")
        //data is hardcoded for now. eventually save to session storage along with token
        const data = {"username":"KyloRen", "password": "CatBoySlim"}
        const url = "http://localhost:8000/logout"
        const token = sessionStorage.getItem("token")
        const headers = {"Authorization": ""}
        headers.Authorization = "Token ".concat(token)
        axios.post(url, {data}, {headers})
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