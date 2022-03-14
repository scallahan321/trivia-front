import GameSetup from './game_setup';
import Navbar from './navbar';
import {Row, Card} from 'react-bootstrap'
import Container from 'react-bootstrap/Container';



function PlayAgain() {
    return (
        <Container className="vh-100">
            <Row>
                <Navbar />
            </Row>
                <Row style={{marginTop:'5rem'}}>
                    <Card bg = {'light'} className="play-again-card" text = {"secondary"} >
                            <Card.Body>
                                <GameSetup />
                            </Card.Body>
                    </Card>
                </Row>
            
        </Container>
    )
}

export default PlayAgain