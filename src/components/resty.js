import React from 'react';
import ReactDOM from 'react-dom';

import History from './history';
import Request from './request';

class Resty extends React.Component {
  state = {
    response: null
  };

  render() {
    return (
      <main>
        <History />
        <Request />
      </main>
    );
  }
}

export default Resty;
