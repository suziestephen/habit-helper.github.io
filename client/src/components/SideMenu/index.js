import React, { Component } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";



class SideMenu extends Component {
  render() {
    return (
      <div className="menu-div">
      <Container className="display-container">
        <h2>Enter Your Daily Habits</h2>
        <br />
          <Row>
            <Button className="menu-button">
              <Link to="/Gratitude"> Enter Your Gratitude  </Link>
            </Button>
          </Row>
          <br />
          <Row>
            <Button className="menu-button">
              <Link to="/Exercise"> Enter Your Exercise </Link>
            </Button>
          </Row> 
          <br />
          <Row>
            <Button className="menu-button">
              <Link to="/Reading"> Enter Your Reading  </Link>
            </Button>
          </Row>
      </Container>
       </div>

  


 
      );
    }
  }
export default SideMenu;