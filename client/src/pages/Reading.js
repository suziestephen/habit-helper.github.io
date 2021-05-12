import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import ReadingForm from "../components/ReadingForm/index";
import SideMenu from "../components/SideMenu/index";

class Reading extends Component {

    state = {
        fields: {}
    };

    onSubmit = fields => {
        this.setState({ fields });
    }

    render() {
        return (
            <div className="Reading">
            <Container fluid>
            <Row>
                <Col size="md-3">
                    <SideMenu  />
                </Col>
                <Col size="md-9">
                    <ReadingForm  />
                </Col>
            </Row>
            </Container>
            </div>
        );
    }
}

export default Reading;
