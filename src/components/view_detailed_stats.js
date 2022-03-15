import '../App.css';
import Navbar from "./navbar";
import {Row, Card} from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import { useLocation } from 'react-router-dom'


function ViewDetailedStats() {
    // const [stats, setStats] = useState({})
    // const [isLoading, setIsLoading] = useState(true)
    const location = useLocation()
    const stats = location.state
    const categories = [
        {"label": "General Knowledge", "attempted" : stats.cat9_attempted, "correct": stats.cat9_correct,
        "percent" : (average(stats.cat9_correct, stats.cat9_attempted))
        },
        {"label": "Books", "attempted" : stats.cat10_attempted, "correct": stats.cat10_correct,
        "percent" : (average(stats.cat10_correct, stats.cat10_attempted))
        },
        {"label": "Film", "attempted": stats.cat11_attempted, "correct": stats.cat11_correct,
        "percent" : average(stats.cat11_correct, stats.cat11_attempted)
        },
        {"label": "Music", "attempted": stats.cat12_attempted, "correct": stats.cat12_correct,
        "percent" : average(stats.cat12_correct, stats.cat12_attempted)
        },
        {"label": "Television", "attempted": stats.cat14_attempted, "correct": stats.cat14_correct,
        "percent" : average(stats.cat14_correct, stats.cat14_attempted)
        },
        {"label": "Video Games", "attempted": stats.cat15_attempted, "correct": stats.cat15_correct,
        "percent" : average(stats.cat15_correct, stats.cat15_attempted)
        },
        {"label": "Science & Nature", "attempted": stats.cat17_attempted, "correct": stats.cat17_correct,
        "percent" : average(stats.cat17_correct, stats.cat17_attempted)
        },
        {"label": "Sports", "attempted": stats.cat21_attempted, "correct": stats.cat21_correct,
        "percent" : average(stats.cat21_correct, stats.cat21_attempted)
        },
        {"label": "Geography", "attempted": stats.cat22_attempted, "correct": stats.cat22_correct,
        "percent" : average(stats.cat22_correct, stats.cat22_attempted)
        },
        {"label": "History", "attempted": stats.cat23_attempted, "correct": stats.cat23_correct,
        "percent" : average(stats.cat23_correct, stats.cat23_attempted)
        }
        ]

    function average(correct, attempted) {
        if (attempted===0){
            return 'N/A'
        }
        else {
            return (correct/attempted.toFixed(2))
        }
    }


    return (
        <Container className="vh-100">
            <Row>
                <Navbar />
            </Row>
            <Row >
                {/* {isLoading ? <Spinner animation="border" role="status"></Spinner> : */}
                <Card style={{marginTop:'3rem'}} bg = {'light'} id="game-card" text = {"secondary"} >
                    <Card.Body>
                        <ul style={{listStyleType:'none'}}>
                             {categories.map((item) => 
                                <li className="stats-detailed-li" key={item.label}>
                                    <p className="stats-detailed-p" style={{fontWeight:'bold'}}>{item.label}&nbsp;</p>
                                    <p className="stats-detailed-p">Questions Answered:&nbsp;</p>
                                    <p className="stats-detailed-p" style={{fontWeight:'bold'}}> {item.attempted}&nbsp; </p>
                                    <p className="stats-detailed-p"> Correct answers:&nbsp; </p>
                                    <p className="stats-detailed-p" style={{fontWeight:'bold'}}>{item.correct}&nbsp;</p>
                                    <p className="stats-detailed-p">Percent correct:&nbsp;</p>
                                    <p className="stats-detailed-p" style={{fontWeight:'bold'}}>{item.percent}</p>
                                    
                                </li>
                             )}
                            
                        </ul>
                    </Card.Body>
                </Card>
                
            </Row>      
        </Container>
    )
}

export default ViewDetailedStats