import React from 'react';

import History from './history';
import Request from './request';
import Response from './response';
import helper from '../helpers';

class Resty extends React.Component {
  state = {
    response: null,
    history: [],
    url: '',
    method: 'get',
    body: null,
    username: null,
    password: null,
    token: null
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

  handleFormChange = (event) => {
    const target = event.target;
    const value = target.type === 'radio' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  changeMethod = (method) => {
    this.setState({ method });
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
        history: [newLog, ...this.state.history]
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
        <Request
          {...this.state}
          onInputChange={this.handleFormChange}
          onMethodChange={this.changeMethod}
          onResponse={this.handleResponse}
        />
        <Response response={this.state.response} />
      </main>
    );
  }
}

export default Resty;
