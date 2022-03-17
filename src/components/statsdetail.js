import '../App.css';
import React from 'react';


function StatsDetail(props) {

    return (
            <React.Fragment>
                 {/* <ul style={{listStyleType:'none'}}>
                    {props.categories.map((item) => 
                    <li className="stats-detailed-li" key={item.label}>
                        <p className="stats-detailed-p" style={{fontWeight:'bold'}}>{item.label}&nbsp;</p>
                        <p className="stats-detailed-p">Questions Answered:&nbsp;</p>
                        <p className="stats-detailed-p" style={{fontWeight:'bold'}}> {item.attempted}&nbsp; </p>
                        <p className="stats-detailed-p"> Correct answers:&nbsp; </p>
                        <p className="stats-detailed-p" style={{fontWeight:'bold'}}>{item.correct}&nbsp;</p>
                    </li>
                    )}
                </ul> */}
                <table>
                    <tr style={{marginBottom:'1.5rem'}}>
                        <th>Category</th>
                        <th>Questions answered</th>
                        <th>Correct answers</th>
                    </tr>
                    
                    {props.categories.map((item) => 
                    <tr>
                        <td>
                            {item.label}
                        </td>
                        <td>
                            {item.attempted}
                        </td>
                        <td>
                            {item.correct}
                        </td>
                    </tr>
                    )}
                 </table>
            </React.Fragment>
    )
}

export default StatsDetail