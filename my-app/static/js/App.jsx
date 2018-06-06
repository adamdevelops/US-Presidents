import React from "react";
// import Hello from "./Hello";
import { Grid, Row, Col, Button } from "react-bootstrap";

var $ = require('jquery');

export default class App extends React.Component{

  constructor(props) {
        super(props);
        this.state = {
          checking:false
        }

        // This binding is necessary to make `this` work in the callback
		    this.getPythonHello = this.getPythonHello.bind(this);
  }

  getPythonHello() {
    $.get(window.location.href + 'hello', (data) => {
    console.log(data);
    })
  }

  render () {
    return(
      <Grid>
                <h1>Presidents</h1>
                <Button>
                Asc
                </Button>
                <Button>
                Desc
                </Button>
                <Row>
                <Col md={2} mdOffset={5}>
                    <h1>p</h1>
                </Col>

                <Col md={2} mdOffset={5}>
                    <h1>bd</h1>
                </Col>

                <Col md={2} mdOffset={5}>
                    <h1>bp</h1>
                </Col>

                <Col md={2} mdOffset={5}>
                    <h1>dd</h1>
                </Col>

                <Col md={2} mdOffset={5}>
                    <h1>dp</h1>
                </Col>
                </Row>
                {this.getPythonHello()}

        </Grid>
    );
  }
}
