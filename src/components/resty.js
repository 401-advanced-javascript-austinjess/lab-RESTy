import React from 'react';
import ReactDOM from 'react-dom';

import History from './history';
import Request from './request';

class Resty extends React.Component {
  state = {
    response: null
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
      </main>
    );
  }
}

export default Resty;
