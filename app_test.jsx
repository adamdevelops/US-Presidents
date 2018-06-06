import React from "react";
// import Hello from "./Hello";
import { Grid, Row, Col } from "react-bootstrap";

export default class App extends React.Component{

  render () {
    return(
      <Grid>
                <Row>
                <Col md={7} mdOffset={5}>
                    <h1>p</h1>
                </Col>
                <Col md={7} mdOffset={5}>
                    <h1>bd</h1>
                </Col>
                <Col md={7} mdOffset={5}>
                    <h1>bp</h1>
                </Col>
                <Col md={7} mdOffset={5}>
                    <h1>dd</h1>
                </Col>
                <Col md={7} mdOffset={5}>
                    <h1>dp</h1>
                </Col>
                </Row>
                <Row>
                <Col md={7} mdOffset={5}>
                    HEY!!
                </Col>
                </Row>
        </Grid>
    );
  }
}

// Perform JQuery GET request to server to retreive CSV data from hello endpoint


<div class="table">
{% block content %}
{{ data|safe }}
{% endblock %}
</div>



<table>
          <tr>
            <td >
                <h1>p</h1>
            </td>
            <td >
                <h1>bd</h1>
            </td>
            <td >
                <h1>bp</h1>
            </td>
            <td >
                <h1>dd</h1>
            </td>
            <td >
                <h1>dp</h1>
            </td>
          </tr>
          <tr>
            <td >
                HEY!!
            </td>
          </tr>
  </table>
