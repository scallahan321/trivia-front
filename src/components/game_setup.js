import Form from 'react-bootstrap/Form'
import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button'


function GameSetup() {

    const [selected, setSelected] = useState(0)
    const [disableButton, setDisableButton] = useState(true)

    const navigate = useNavigate()
    
    const handleClick = () => {
        navigate('/game', {state: selected}) 
    }

    const categories = [
        {"label": "General Knowledge", "value": 9},
        {"label": "Books", "value": 10},
        {"label": "Film", "value": 11},
        {"label": "Music", "value": 12},
        {"label": "Musicals & Theatres", "value": 13},
        {"label": "Television", "value": 14},
        {"label": "Video Games", "value": 15},
        {"label": "Board Games", "value": 16},
        {"label": "Science & Nature", "value": 17},
        {"label": "Computers", "value": 18},
        {"label": "Mathematics", "value": 19},
        {"label": "Mythology", "value": 20},
        {"label": "Sports", "value": 21},
        {"label": "Geography", "value": 22},
        {"label": "History", "value": 23},
        {"label": "Politics", "value": 24},
        {"label": "Celebrities", "value": 26},
        {"label": "Animals", "value": 27},
        {"label": "Vehicles", "value": 28},
        {"label": "Comics", "value": 29},
        {"label": "Anime and Manga", "value": 31},
        {"label": "Cartoons & Animation", "value": 32},
    ]

    return (
            <div>
                {/* <h3 style={{textAlign:'center', marginBottom:'1rem'}}> Play Game</h3> */}
                
                <Form.Select onChange={e => {setSelected(e.target.value); setDisableButton(false)}}  style={{height:'3rem'}} >
                    <option value="" hidden> Select Category </option>
                   {categories.map((item) => <option key = {item.label} value={item.value}>{item.label}</option>)}
               </Form.Select>

               <Button  
                  style = {{display:'block', width:'50%', marginTop:'1.5rem', marginRight:'auto', marginLeft: 'auto'}}
                  size="lg" 
                  disabled={disableButton}
                  variant="primary" 
                  onClick = {handleClick}
                  > 
                  Start 
                </Button>
            </div>
            )

}

export default GameSetup


