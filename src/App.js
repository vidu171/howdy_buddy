import React, { Component } from 'react';

export default class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(response => this.setState({response}));

    /*this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));*/
  }

  /*callApi = async () => {
    const response = await fetch('/');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };*/

  render() {
    return (
      <div className="App">
        <p className="App-intro">{this.state.response}</p>
      </div>
    );
  }
}
