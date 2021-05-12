import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import CreateGratitudeForm from "../components/GratitudeForm/index";
import SideMenu from "../components/SideMenu/index";

class Gratitude extends Component {

    state = {
        fields: {}
    };

    onSubmit = fields => {
        this.setState({ fields });
    }

    render() {
        return (
            <div className="Gratitude">
            <Container fluid>
            <Row>
                <Col size="md-3">
                    <SideMenu  />
                </Col>
                <Col size="md-9">
                    <CreateGratitudeForm  />
                </Col>
            </Row>
            </Container>
            </div>
        );
    }
}

export default Gratitude;
