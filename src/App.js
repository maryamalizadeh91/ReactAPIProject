import React from 'react';
import './App.css';
import Users from './Users';
import { Container, Row, Col, Input, Button, Table } from 'reactstrap';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.updateInputValue = this.updateInputValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      inputValue: "1",
      value: "0"
    }
  }

  updateInputValue(event) {
    this.setState({
      inputValue: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState(() => {
      return {
        value: parseInt(this.state.inputValue)
      }
    }
    )
  }

  render() {

    var userArray = [];
    var i;

    for (i = 0; i < this.state.value; i++) {
      userArray.push(
        <Users key={i} num={i + 1} />
      )
    }

    return (
      <div>
        <Container>
          <Row>&nbsp;</Row>
          <Row>
            <Col lg="2" md="2" sm="12" className="Alignment">Number of Users:</Col>
            <Col lg="6" md="6" sm="12" ><Input type="number" min="1" max="50" value={this.state.inputValue} onChange={this.updateInputValue} /></Col>
            <Col lg="4" md="4" sm="12" ><Button block onClick={this.handleSubmit}>Submit</Button></Col>
          </Row>
        </Container>
        <Container className="Alignment">
          {userArray}
        </Container>
      </div>
        )
      }
    }
    
export default App;