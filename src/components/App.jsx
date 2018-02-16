import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      character: {},
    };
  }

  pickMeACharacter() {
    const from = 1;
    const to = 88;
    const num = Math.floor(Math.random() * to) + from;
    this.fetchCharacterWithId(num);
  }

  fetchCharacterWithId(id) {
    this.setState({ isLoading: true });
    const url = `https://swapi.co/api/people/${id}/`;
    axios.get(url).then(response => {
      this.setState({ character: response.data, isLoading: false });
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="">
            <Button
              bsStyle="warning"
              bsSize="small"
              disabled={this.state.isLoading}
              onClick={() => this.pickMeACharacter()}
            >
              WHO AM I?
            </Button>
          </div>
          <div>{this.state.character.name}</div>
        </div>
      </div>
    );
  }
}

export default App;
