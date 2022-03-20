import '../App.css';
import React from 'react';


function StatsDetail(props) {

    return (
        <div style={{height:'100%', width:'100%'}}>
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
                    <td style={{textAlign:'center'}}>
                        {item.attempted}
                    </td>
                    <td style={{textAlign:'center'}}>
                        {item.correct}
                    </td>
                </tr>
                )}
                </table>
        </div>
    )
}

export default StatsDetail