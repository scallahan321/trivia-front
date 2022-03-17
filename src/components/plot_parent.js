import '../App.css';
import Navbar from "./navbar";
import {Row, Card, Col} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { useLocation } from 'react-router-dom'
import StatsPlot from './stats_plot';
import StatsDetail from './statsdetail';

function PlotParent() {

    const location = useLocation()
    const xValues = location.state['x']
    const yValues = location.state['y']
    const stats = location.state['stats']
    const categories = location.state['categories']
    

    return (
        <Container className="vh-100">
            <Row>
                <Navbar />
            </Row>
            <Row >
                <Col lg={6} md={6} sm={12} xs={12}>
                    <Card  id="stats-detailed-card" style={{marginTop: '2.5rem'}}>
                        <StatsDetail stats={stats} categories={categories} />
                    </Card>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                    <Card id="stats-plot-container" style={{marginTop: '2.5rem'}}>
                        <StatsPlot x={xValues} y={yValues} />
                    </Card>
                </Col>
            </Row>      
        </Container>
    )
}

export default PlotParent