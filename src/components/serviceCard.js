import React from "react";
import styled from 'styled-components';
import Card from 'react-bootstrap/Card'
import "../components/layout_custom.css";

const ServiceCard = (props) => (

    <Card style={{backgroundColor: 'lightgrey'}} >
       
       <Card.Body>
            <Card.Title>{props.icon}</Card.Title> 
            <Card.Text><span className="card-content-header">{props.header}</span>
            {props.description}
            </Card.Text>
       </Card.Body>
    </Card>
)

export default ServiceCard;
