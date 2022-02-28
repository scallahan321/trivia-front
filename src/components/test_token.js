import React, {useEffect}from 'react';
import axios from 'axios';


function TestToken() {
    

    function get_token() {
        const data = {"username":"Kiki", "password": "CatBoySlim"}
        const url = "http://localhost:8000/api-token-auth/"
        axios.post(url, data)
        .then(function (response) {
          alert(response.data.token);
        })
        .catch(function (error) {
          console.log(error);
       });
    }

    useEffect(() => {
        get_token()
    })

    return (<p>testing token</p>)

}

export default TestToken

