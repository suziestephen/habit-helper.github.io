import React, { Component } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./topmenu.css"



class TopMenu extends Component {
  render() {
    return (
      <div className="menu-div">
      <Container className="menu-container">
        <h2>My Habits</h2>
        <br />
          <Row>
            <Button className="menu-button">
              <Link to="/GratitudeLog"> Gratitude Entries </Link>
            </Button>
          </Row>
          <br />
          <Row>
            <Button className="menu-button">
              <Link to="/ExerciseLog"> Exercise Entries</Link>
            </Button>
          </Row> 
          <br />
          <Row>
            <Button className="menu-button">
              <Link to="/ReadingLog"> Reading Entries </Link>
            </Button>
          </Row>
      </Container>
      </div>

  


 
      );
    }
  }
export default TopMenu;