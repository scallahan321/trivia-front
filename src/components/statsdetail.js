import '../App.css';
import React from 'react';


function StatsDetail(props) {

    return (
        <div>
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
        </div>
    )
}

export default StatsDetail