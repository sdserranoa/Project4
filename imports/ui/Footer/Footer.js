import React from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FooterSubmit from './FooterSubmit'


function renderChat() {
    if (Meteor.user() != null) {
        return (
            <Link to="/chat" className="link-style"><Button>Chat with us</Button></Link>
        )
    } else {

    }
}

function Footer() {
    return (
        <FooterContainer className="main-footer">
            <div className="footer-middle">
                <Row>
                    <Col md={2} sm={0}></Col>
                    <Col>
                        <div className="container-fluid">
                            <Row>
                                <Col md={3} sm={6}>
                                    <h4>Us</h4>
                                    <ul className="list-unstyled">
                                        <li>Bogotá, Colombia</li>
                                        <li>Universidad de los Andes</li>
                                        <li>Tel: (+57) 1 12345678</li>
                                        <li>Correo: contact@easydiets.com</li>
                                    </ul>
                                </Col>
                                <Col md={3} sm={6}>
                                    <h4>Our company</h4>
                                    <ul className="list-unstyled">
                                        <li><p>Our company is dedicated to improve our clients health by offering balanced meals and daily delivers to workplaces or home</p></li>
                                    </ul>
                                </Col>
                                <Col md={3} sm={6}>
                                    <h4>Quick Links</h4>
                                    <ul className="list-unstyled">

                                        <li><Link className="link-style" to="/">Home</Link></li>
                                        <li><Link className="link-style" to="/diets">Diets</Link></li>
                                        <li><Link className="link-style" to="/meals">Meals</Link></li>

                                    </ul>
                                </Col>
                                <Col md={3} sm={6}>
                                    <h4>Contact us</h4>
                                    <Form>
                                        <Form.Group controlId="emailForm.ControlImput1">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="name@example.com" />
                                        </Form.Group>
                                        <Form.Group controlId="textForm.ControlTextarea1">
                                            <Form.Label>Message</Form.Label>
                                            <Form.Control as="textarea" rows="3" />
                                        </Form.Group>
                                    </Form>
                                    <Row>
                                        <Col>
                                            <FooterSubmit/>
                                        </Col>
                                        <Col>{renderChat()}</Col>
                                    </Row>

                                </Col>
                            </Row>
                            <div className="footer-bottom">
                                <p className="text-xs-center">&copy;{new Date().getFullYear()}Bogotá, Universidad de los Andes - All Rights Reserved </p>
                            </div>
                        </div>
                    </Col>
                    <Col md={2} sm={0}></Col>
                </Row>
            </div>
        </FooterContainer>
    )
}

export default Footer;

const FooterContainer = styled.footer`
    .footer-middle {
        background: #343c48;
        padding-top: 3rem;
        color: White;
    }

    .footer-bottom {
        padding-top: 3rem;
        padding-bottom: 2rem;
    }

    .link-style {
        color: White;
    }
`;