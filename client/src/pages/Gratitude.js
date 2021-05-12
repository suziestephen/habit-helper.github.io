import React from "react";
import { Row, Container } from "../components/Grid";
import CreateGratitudeForm from "../components/CreateGratefulForm/index";

const Gratitude = () => {
  return (
    <Container fluid>
      <Row>
          <CreateGratitudeForm />
      </Row>
    </Container>
  );
};

export default Gratitude;
