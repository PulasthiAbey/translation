import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "../css/styles.css";

class Home extends Component {
  render() {
    document.body.style.backgroundColor = "#270252";
    return (
      <Container>
        <h2 style={{ color: "#FDFDFD", marginTop: "100px" }}>
          Select an input type
        </h2>
        <Row>
          <Col style={{ height: "500px", margin: "40px", bgcolor: "#FDFDFD" }}>
            <Link to={`/convert-written`}>
              <button
                style={{
                  bgcolor: "#FDFDFD",
                  borderRadius: "12px",
                  height: "40px",
                  width: "150px",
                  color: "#FFF",
                }}
              >
                Handwritten
              </button>
            </Link>
          </Col>
          <Col style={{ height: "500px", margin: "40px", bgcolor: "#FDFDFD" }}>
            <Link to={`/convert-printed`}>
              <button
                style={{
                  bgcolor: "#FDFDFD",
                  borderRadius: "12px",
                  height: "40px",
                  width: "150px",
                  color: "#FFF",
                }}
              >
                Printed
              </button>
            </Link>
          </Col>
          <Col style={{ height: "500px", margin: "40px", bgcolor: "#FDFDFD" }}>
            <Link to={`/convert-text`}>
              <button
                style={{
                  bgcolor: "#FDFDFD",
                  borderRadius: "12px",
                  height: "40px",
                  width: "150px",
                  color: "#FFF",
                }}
              >
                Text
              </button>
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
