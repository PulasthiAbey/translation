import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import {Col, Row, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png'

class About extends Component {

    render() {
        document.body.style.backgroundColor = "#270252";
        return (
            <Container>
                <Container>
                <Row>
                <Col style={{border: "solid", height: "500px", margin: "24px"}}>
                    <h2 style={{color:'#9c9c08'}}>What is CRITR?</h2>
                    <p style={{color:'#e4f2e8'}}>In recent years, character recognition has emerged as one of the most intriguing and challenging study areas. It has numerous academic and commercial advantages, but most study in this field has focused on widely spoken languages. This is partly because datasets for other regional languages are unavailable. Languages other than widely spoken languages, such as regional languages and endangered languages, are one of the future research directions. Implementing a Character Recognition System in regional languages can help disadvantaged communities preserve their cultural heritage while also helping to improve global synergy.
    As a result, this program focuses on the regional language of Sinhala, which is Sri Lanka's native tongue</p>
                </Col>
                <Col style={{border: "solid", height: "500px", margin: "24px"}}>
                    <h2 style={{color:'#9c9c08'}}>Why CRITR?</h2>
                    <p style={{color:'#e4f2e8'}}>It is critical to note that the present Sinhala Character Recognition Systems have limited practical
    applications for a variety of reasons. A few significant issues among them include the Sinhala language's
    advanced alphabet with round and distinctive 60 letters, a lack of community support for the language
    (lack of databases), and the technology they have been using.
    Our aim is to improve the recognition accuracy of both handwritten and printed Sinhala characters, as
    well as the typeface, through a better user interface.</p>
                </Col>
                <Col style={{border: "solid", height: "500px", margin: "24px"}}>
                    <h2 style={{color:'#9c9c08'}}>Used technologies</h2>
                </Col>
            </Row>
            </Container>    
            
            <Container>
                <h2 style={{color:'#9c9c08'}}>Developer Team</h2>
                <p style={{margin: "32px", marginBottom: "48px",color:'white'}}>We are a group 5 students studying computer science in univesity of Westminister</p>
                <Row>
                    <Col>
                        <Image style={{border: "solid #471209"}} src={img1} width = "120px" roundedCircle ></Image>
                        <h6 style={{color:'#65b0db'}}>Name : Ihshana Imthiaz (Team Leader)</h6>
                        <h6 style={{color:'#65b0db'}}>ID : 20200167</h6>
                    </Col>
                    <Col>
                        <Image style={{border: "solid #471209"}} src={img2} width = "120px" roundedCircle ></Image>
                        <h6 style={{color:'#65b0db'}}>Name : Shehani Ranasinghe</h6>
                        <h6 style={{color:'#65b0db'}}>ID : 2019599</h6>
                    </Col>
                    <Col>
                        <Image style={{border: "solid #471209"}} src={img4} width = "120px" roundedCircle ></Image>
                        <h6 style={{color:'#65b0db'}}>Name : Yoganathan Karthik</h6>
                        <h6 style={{color:'#65b0db'}}>ID : 20200312</h6>
                    </Col>
                    <Col>
                        <Image style={{border: "solid #471209"}} src={img4} width = "120px" roundedCircle ></Image>
                        <h6 style={{color:'#65b0db'}}>Name : Shanel Silva </h6>
                        <h6 style={{color:'#65b0db'}}>ID : 20200497</h6>
                    </Col>
                    <Col>
                        <Image style={{border: "solid #471209"}} src={img3} width = "120px" roundedCircle ></Image>
                        <h6 style={{color:'#65b0db'}}>Name : Thejana Ravindu</h6>
                        <h6 style={{color:'#65b0db'}}>ID : 2019723</h6>
                    </Col>
                </Row>
            </Container>
        </Container>
        );
    }
}

export default About;