import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from 'react-bootstrap/Card'
import { CardGroup } from "react-bootstrap";
import './fontawesome'


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
                    
            <Container style={{background: "#96bd37", maxWidth: '100%', padding: '30px 20px 30px 20px', marginTop: '30px', alignContent: 'center'}}>
                        <Row className="justify-content-md-center" style= {{margin:"20px 0 20px 0"}}> 
                            <h1 style={{color: 'white'}} >Zajęcia</h1>
                        </Row>
                        <CardGroup style={{margin: '0 auto', width: '70%'}}>
                            <Card className = "aaa" >
                                
                                <Card.Body>
                                <Card.Title><FontAwesomeIcon icon={'coffee'}/></Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                
                                <Card.Body>
                                <Card.Title><FontAwesomeIcon icon={'baby'}/></Card.Title>
                                <Card.Text>
                                    This card has supporting text below as a natural lead-in to additional
                                    content.{' '}
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                
                                <Card.Body>
                                <Card.Title><FontAwesomeIcon icon={'horse'}/><br/>konik</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </CardGroup>
                        <CardGroup style={{margin: '0 auto', width: '70%'}}>
                            <Card>
                                
                                <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                
                                <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This card has supporting text below as a natural lead-in to additional
                                    content.{' '}
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                
                                <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </CardGroup>
                    </Container>
                     
        )
    }
}

export default Services;