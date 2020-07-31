import React from "react";
import styled from 'styled-components';
import Card from 'react-bootstrap/Card'

const ServiceCard = (icon, header, description) => (

    <Card>
       <Card.Img src= {icon}/>
       <Card.Body>
            <Card.Title>{header}</Card.Title>
            <Card.Text>{description}</Card.Text>
       </Card.Body>
    </Card>
)

export default ServiceCard;