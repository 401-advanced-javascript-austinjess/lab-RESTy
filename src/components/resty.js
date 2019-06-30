import React from 'react';
import ReactDOM from 'react-dom';

import History from './history';
import Request from './request';
import Response from './response';
import helper from '../helpers';

class Resty extends React.Component {
  state = {
    response: null,
    history: []
  };

  componentDidMount() {
    this.populateHistory();
  }

  handleResponse = (response) => {
    if (!response) {
      throw Error();
    }
    let newLog = helper.handleHistory(response);

    let filtered = Object.keys(response).filter(
      (key) => key === 'header' || key === 'body'
    );
    response = filtered.map((key) => response[key]);

    this.setState((state) => {
      console.log(newLog);
      return {
        response,
        history: [...state.history, newLog]
      };
    });

    localStorage.setItem('history', JSON.stringify(this.state.history));
  };

  populateHistory = () => {
    if (localStorage.hasOwnProperty('history')) {
      let history = localStorage.getItem('history');

      try {
        history = JSON.parse(history);
        this.setState({ history });
      } catch (err) {
        this.setState({ history: [] });
      }
    }
  };

  render() {
    console.log('THIS.STATE.HISTORY: ', this.state.history);
    return (
      <main>
        <History log={this.state.history} />
        <Request onResponse={this.handleResponse} />
        <Response response={this.state.response} />
      </main>
    );
  }
}

export default Resty;
