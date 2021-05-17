import React, {Component} from "react";
import { Col, Row, Container } from "react-bootstrap";
import CreateExerciseForm from "../components/ExerciseForm/index";
import SideMenu from "../components/SideMenu/index";


class Exercise extends Component {
  render () {
    return (
      <Container fluid>
        <Row>
          <Col size="md-3">
              <SideMenu  />
          </Col>
          <Col size="md-9">
            <CreateExerciseForm />
          </Col>
        </Row>
      </Container>
    );
  };

}

export default Exercise;
