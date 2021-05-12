import React from "react";
import { Row, Container } from "../components/Grid";
import CreateExerciseForm from "../components/CreateExerciseForm/index";


const Exercise = () => {
  return (
    <Container fluid>
      <Row>
          <CreateExerciseForm />
      </Row>
    </Container>
  );
};

export default Exercise;
