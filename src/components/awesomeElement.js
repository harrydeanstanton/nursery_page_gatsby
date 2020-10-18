import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './fontawesome';
import "../components/layout_custom.css";

const AwesomeElement = (props) => (

    <FontAwesomeIcon icon={props.name}/>
)

export default AwesomeElement;
