import React from 'react';

import History from './history';
import Request from './request';
import Response from './response';
import helper from '../helpers';

class Resty extends React.Component {
  state = {
    response: null,
    history: []
    // formUrl: '',
    // formMethod: 'get',
    // formBody: null,
    // formUsername: null,
    // formPassword: null,
    // formToken: null
  };

  componentDidMount() {
    this.populateHistory();
  }

  populateFromHistory = (e) => {
    let formState = e.target.innerText;
    formState = formState.split('\n');
    this.setState({ formState });
    //
  };

  handleResponse = (response) => {
    if (!response) {
      throw Error();
    }
    let newLog = helper.handleHistory(response);

    let filtered = Object.keys(response).filter(
      (key) => key === 'headers' || key === 'data'
    );

    response = filtered.map((key) => response[key]);
    this.setState((state) => {
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
      } catch {
        this.setState({ history: [] });
      }
    }
  };

  render() {
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
