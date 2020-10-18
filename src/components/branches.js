import React from "react";
import styled from 'styled-components';
import Card from 'react-bootstrap/Card'
import { CardDeck } from "react-bootstrap";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



const cardStyles = {

    textAlign: 'center',
    grey: 'grey'
}

const Branches = () => (
<Container fluid = "sm" style={{height: '400px', }}>
    <Row className="justify-content-md-center" style= {{margin:"80px 0 20px 0"}}> 
        <h1 style= {{transform: "uppercase"}}>Nasze placówki</h1>
    </Row>
  
    <CardDeck style= {{marginTop: '40px'}}>
        <Row style={{width: "100%"}}>
            <Col>
                <Card style={cardStyles}
                bg={'Success'.toLowerCase()}
                className="mb-2"
                text={'Success'.toLowerCase() === 'light' ? 'dark' : 'white'}
                >
                    <Card.Header>ul. Kopernika</Card.Header>
                        <Card.Body>
                        <Card.Text>tel. 123 123 <br/>PN-PT 6:30-17.00<br/> ilość miejsc: 23 <br/> żłobek dotowany</Card.Text> 
                        </Card.Body>
                
                </Card>
            </Col> 
            <Col>
                <Card style={cardStyles}
                bg={'Info'.toLowerCase()}
                className="mb-2"
                text={'Success'.toLowerCase() === 'light' ? 'dark' : 'white'}
                >
                    <Card.Header>ul. Łąkowa</Card.Header>
                    <Card.Body>
                        <Card.Text>tel. 123 123 <br/>PN-PT 6:30-17.00<br/> ilość miejsc: 23 <br/> żłobek dotowany</Card.Text> 
                    </Card.Body>
                </Card>
            </Col>  
        </Row>  
    </CardDeck>
   
</Container>
)

export default Branches;