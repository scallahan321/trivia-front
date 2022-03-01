import React, {useEffect}from 'react';
import axios from 'axios';
import Logout from './logout';


function TestToken() {
    

    function pass_token() {
        //const data = {"username":"KyloRen", "password": "CatBoySlim"}
        const url = "http://localhost:8000/hello"
        const token = sessionStorage.getItem("token")
        const headers = {"Authorization": ""}
        headers.Authorization = "Token ".concat(token)
        axios.get(url,{headers})
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
       });
    }

    useEffect(() => {
        pass_token()
    })

    return (
    <div>
      <p>testing token</p>
      <Logout />

    </div>
 
    
    )

}

export default TestToken

