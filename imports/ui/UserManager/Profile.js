import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Image, Container, Row, Col } from 'react-bootstrap';

export default class Profile extends Component {
    render() {
        return (
            <div id="profile">
                
                {Meteor.user().profile.rol == "admin" &&
                    <div><h1 id="profileHeader">Profiles:</h1>
                        {Meteor.users.find({}).map(u =>
                            < div className="meal-card" key={u._id}>
                                <Container fluid>
                                    <Row className="justify-content-md-center align-items-center" style={{ cursor: 'pointer' }}>
                                        <Col lg={3} className="text-center">
                                            <Image className="meal-thumbnail" src="/assets/defaultPhoto.jpg" roundedCircle alt="default-profile-picture"/>
                                        </Col>
                                        <Col>
                                            <Row as="h2">Username: {u.username}</Row>
                                            <Row as="p" style={{ color: '#323232' }}><strong>Id: {u._id}</strong></Row>
                                            <Row as="p">{u.email}</Row>
                                        </Col>
                                    </Row>
                                </Container>
                            </ div>
                        )}
                    </div>}
                {Meteor.user().profile.rol != "admin" &&
                    <div><h1 id="profileHeader">Profile:</h1>
                        < div className="meal-card" >
                    <Container fluid>
                        <Row className="justify-content-md-center align-items-center" style={{ cursor: 'pointer' }}>
                            <Col lg={3} className="text-center">
                                <Image className="meal-thumbnail" src="/assets/defaultPhoto.jpg" roundedCircle alt="default-profile-picture"/>
                            </Col>
                            <Col>
                                <Row as="h2">Username: {Meteor.user().username}</Row>
                                <Row as="p" style={{ color: '#323232' }}><strong>Id: {Meteor.userId()}</strong></Row>
                                <Row as="p">{Meteor.user().email}</Row>
                            </Col>
                        </Row>
                    </Container>
                </ div>
                </div>
                }
            </div>
        )
    }
}
