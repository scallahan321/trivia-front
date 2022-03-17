import React from 'react'

import '../App.css';

function DetailResults(props) {

   const redGreen = (item) => {
    
       if (item.user_answer===item.correct_answer){
           return (
            <li className='result-li' key = {item.question}>
                <p className='result-p' style={{fontWeight:'bold'}}>{item.question}&nbsp;</p>
                <p className='result-p'>You answered:&nbsp;</p>
                <p className='result-p' style={{color:'green',fontWeight:'bold'}}> {item.user_answer}&nbsp; </p>
                <p className='result-p'> Correct answer:&nbsp; </p>
                <p className='result-p' style={{color:'green',fontWeight:'bold'}}>{item.correct_answer}</p>
            </li>
           )
       }
        else {
            return (
                <li className="result-li" key = {item.question}>
                <p className="result-p" style={{fontWeight:'bold'}}>{item.question}&nbsp;</p>
                <p className='result-p'>You answered:&nbsp;</p>
                <p className="result-p" style={{color:'red',fontWeight:'bold'}}> {item.user_answer}&nbsp; </p>
                <p className="result-p"> Correct answer:&nbsp; </p>
                <p className='result-p' style={{color:'green',fontWeight:'bold'}}>{item.correct_answer}</p>
            </li>
            )
        }
       }
   
    return (
        <React.Fragment>
            <ul style={{listStyleType:'none'}}>
                {props.results.map((item) => redGreen(item))}
            </ul>
        </React.Fragment>
    )
}
export default DetailResults