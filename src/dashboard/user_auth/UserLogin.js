import React, { Component } from "react";
import './UserLogin.css'
import { Button, Row, Col, Panel } from 'react-bootstrap';

class UserLogin extends Component {
    render() {
        return (
            <Row>
                <Col md={4} mdOffset={4} >
                    <Panel className="loginPanel">
                        <Panel.Heading>
                            Please Sign In
                        </Panel.Heading>
                        <Panel.Body>
                            <Button bsStyle="primary" block={true}> Sign In with Github </Button>
                        </Panel.Body>
                    </Panel>
                </Col>
            </Row>
        )
    }
}

export default UserLogin;
