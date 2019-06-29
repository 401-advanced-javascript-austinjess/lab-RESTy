import React from 'react';
import ReactDOM from 'react-dom';

import History from './history';
import Request from './request';
import Response from './response';

class Resty extends React.Component {
  state = {
    response: null,
    history: []
  };

  handleResponse = (response) => {
    let filtered = Object.keys(response).filter(
      (key) => key === 'header' || key === 'body'
    );
    response = filtered.map((key) => response[key]);

    this.setState({ response });
  };

  render() {
    return (
      <main>
        <History />
        <Request onResponse={this.handleResponse} />
        <Response response={this.state.response} />
      </main>
    );
  }
}

export default Resty;
