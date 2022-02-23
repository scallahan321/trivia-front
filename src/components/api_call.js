//import React, {useEffect, useState} from 'react';
import axios from 'axios';

function apiCall() {
    const url = 'http://localhost:8000/questions'

    const response = axios.get(url).then(res => {
        const questions = response.data;
        return JSON.stringify(questions)
    })

    
       
}

export default apiCall