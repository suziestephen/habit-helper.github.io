import React, { Component } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./sidemenu.css"



class SideMenu extends Component {
  render() {
    return (
      <div className="menu-div">
      <Container className="display-container">
        <h2>Select a habit and create an entry for today</h2>
        <br />
          <Row>
            <Button className="menu-button">
              <Link to="/Gratitude"> Gratitude </Link>
            </Button>
          </Row>
          <br />
          <Row>
            <Button className="menu-button">
              <Link to="/Exercise"> Exercise </Link>
            </Button>
          </Row> 
          <br />
          <Row>
            <Button className="menu-button">
              <Link to="/Reading"> Reading </Link>
            </Button>
          </Row>
      </Container>
      </div>

  


 
      );
    }
  }
export default SideMenu;