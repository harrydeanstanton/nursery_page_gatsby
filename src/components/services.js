import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { CardGroup } from "react-bootstrap";
import "../components/layout_custom.css";
import ServiceCard from './serviceCard';
import Awesome from "./awesomeElement";
import Bilangual from './bilangualLogo'
import MrMelody from './mrMelodyLogo';
import Logosensoryka from './logsensorykaLogo';
import Sensoplastyka from './sensoplastykaLogo';


const header = {
    first: "zajęcia kulinarne",
    second: "Zajęcia plastyczne",
    third: "Język angielski",
    fourth: "Sensoplastyka",
    fifth: "Zajęcia muzyczne z j angielskim",
    sixth: "Teatr",
    seventh: "Logosensoryka",
    eighth: "Zajęcia motoryczne"


};
const desc = {
    first: "Opis zajęć kulinarnych",
    second: "Opis zajęć plastycznych",
    third: "Program Dwujęzyczne Dzieci",
    fourth: "Opis sensoplastyki",
    fifth: "Prowadzone przez Mr Melody",
    sixth: "Interaktywne przedstawienia prowadzone przez KULTURKA",
    seventh: "Opis logosensoryki",
    eighth: "Opis zajęć motorycznych"
}




class Services extends React.Component {

    render() {

        return(
                    
            <Container className ="services-container">
                        <Row className="justify-content-md-center" style= {{margin:"20px 0 20px 0"}}> 
                            <h2 style={{color: 'grey'}} >Nauka poprzez zabawę</h2>
                        </Row>
                        <CardGroup style={{margin: '0 auto', width: '80%'}}>
                            <ServiceCard
                                icon =  {<Awesome name = {'pizza-slice'}/>}
                                header = {header.first}
                                description = {desc.first}
                            /> 
                            <ServiceCard
                                icon =  {<Awesome name = {'paint-brush'}/>}
                                header = {header.second}
                                description = {desc.second}
                            /> 
                            <ServiceCard
                                icon =  {<Awesome name = {'theater-masks'}/>}
                                header = {header.sixth}
                                description = {desc.sixth}
                            /> 
                            <ServiceCard
                                icon =  {<Awesome name = {'child'}/>}
                                header = {header.eighth}
                                description = {desc.eighth}
                            /> 
                            
                              
                        </CardGroup>
                        <CardGroup style={{margin: '0 auto', width: '80%'}}>
                        <ServiceCard
                                icon =  {<MrMelody/>}
                                header = {header.fifth}
                                description = {desc.fifth}
                            /> 
                            
                            <ServiceCard
                                icon =  {<Logosensoryka/>}
                                header = {header.seventh}
                                description = {desc.seventh}
                            /> 
                            <ServiceCard
                                icon =  {<Bilangual/>}
                                header = {header.third}
                                description = {desc.third}
                            /> 
                            <ServiceCard
                                icon =  {<Sensoplastyka/>}
                                header = {header.fourth}
                                description = {desc.fourth}
                            /> 
                            

                        </CardGroup>
                    </Container>
                     
        )
    }
}

export default Services;