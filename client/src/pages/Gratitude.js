import React, { Component } from "react";
import { Row, Container } from "../components/Grid";
import CreateGratitudeForm from "../components/CreateGratefulForm/index";

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
                <CreateGratitudeForm  />
            </Row>
            </Container>
            </div>
        );
    }
}

export default Gratitude;
