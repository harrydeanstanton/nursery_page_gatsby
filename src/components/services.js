import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from 'react-bootstrap/Card'
import { CardGroup } from "react-bootstrap";
import './fontawesome';
import "../components/layout_custom.css";


const header = {
    first: "zajęcia1",
    second: "zajęcia2",
    third: "zajęcia3",
    fourth: "zajęcia4",
    fifth: "zajęcia5",
    sixth: "zajęcia6",

};
const desc = {
    first: "zajęcia1 opis",
    second: "zajęcia2 opis",
    third: "zajęcia3 opis",
    fourth: "zajęcia4 opis",
    fifth: "zajęcia5 opis",
    sixth: "zajęcia6 opis",
};



class Services extends React.Component {

    render() {

        return(
                    
            <Container style={{background: "#96bd37", maxWidth: '100%', padding: '30px 20px 130px 20px', marginTop: '30px', alignContent: 'center'}}>
                        <Row className="justify-content-md-center" style= {{margin:"20px 0 20px 0"}}> 
                            <h1 style={{color: 'white'}} >NAUKA POPRZEZ ZABAWĘ</h1>
                        </Row>
                        <CardGroup style={{margin: '0 auto', width: '80%'}}>
                            <Card className = "aaa" >
                                
                                <Card.Body>
                                <Card.Title><FontAwesomeIcon icon={'coffee'}/></Card.Title>
                                <Card.Text>
                                   <h3 className="card-content-header">Zajęcia kulinarne</h3> 
                                   Opis zajęć kulinarnych
                                </Card.Text>
                                </Card.Body>
                                
                            </Card>
                            <Card>
                                
                                <Card.Body>
                                <Card.Title><FontAwesomeIcon icon={'baby'}/></Card.Title>
                                <Card.Text>
                                <h3 className = "card-content-header">Zajęcia plastyczne</h3> 
                                   Opis zajęć plastycznych
                                </Card.Text>
                                </Card.Body>
                                
                            </Card>
                            <Card>
                                
                                <Card.Body>
                                <Card.Title><FontAwesomeIcon icon={'horse'}/><br/></Card.Title>
                                <Card.Text>
                                <h3 className = "card-content-header">Język angielski</h3> 
                                   Program Dwujęzyczne Dzieci
                                </Card.Text>
                                </Card.Body>
                                
                            </Card>
                            <Card>
                                
                                <Card.Body>
                                <Card.Title><FontAwesomeIcon icon={'horse'}/><br/></Card.Title>
                                <Card.Text>
                                <h3 className = "card-content-header">Sensoplastyka</h3> 
                                   Opis sensoplastyki
                                </Card.Text>
                                </Card.Body>
                                
                            </Card>
                        </CardGroup>
                        <CardGroup style={{margin: '0 auto', width: '80%'}}>
                            <Card>
                                
                                <Card.Body>
                                <Card.Title><FontAwesomeIcon icon={'horse'}/><br/></Card.Title>
                                <Card.Text>
                                <h3 className = "card-content-header">Zajęcia muzyczne z językiem angielskim</h3> 
                                Prowadzone przez Mr Melody
                                </Card.Text>
                                </Card.Body>
                                
                            </Card>
                            <Card>
                                
                                <Card.Body>
                                <Card.Title><FontAwesomeIcon icon={'horse'}/><br/></Card.Title>
                                <Card.Text>
                                <h3 className = "card-content-header">Teatr</h3> 
                                Interaktywne przedstawienia prowadzone przez KULTURKA
                                </Card.Text>
                                </Card.Body>
                                
                            </Card>
                            <Card>
                                
                                <Card.Body>
                                <Card.Title><FontAwesomeIcon icon={'horse'}/><br/></Card.Title>
                                <Card.Text>
                                <h3 className = "card-content-header">Logosensoryka</h3> 
                                 Opis logosensoryki
                                </Card.Text>
                                </Card.Body>
                                
                            </Card>
                            <Card>
                                
                                <Card.Body>
                                <Card.Title><FontAwesomeIcon icon={'horse'}/><br/></Card.Title>
                                <Card.Text>
                                <h3 className = "card-content-header">Zajęcia motoryczne </h3> 
                                 Opis zajęć motorycznych
                                </Card.Text>
                                </Card.Body>
                                
                            </Card>
                        </CardGroup>
                    </Container>
                     
        )
    }
}

export default Services;