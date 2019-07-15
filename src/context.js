import React from 'react';
import helper from './helpers';

export const RestyContext = React.createContext();

class RestyProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      response: null,
      history: [],
      url: '',
      method: 'get',
      body: null,
      username: null,
      password: null,
      token: null,
      populateHistory: this.populateHistory,
      changeMethod: this.changeMethod,
      populateFormHistory: this.populateFromHistory,
      handleResponse: this.handleResponse,
      handleFormChange: this.handleFormChange
    };
  }

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

  componentDidMount() {
    this.populateHistory();
  }

  populateFromHistory = (e) => {
    let formState = e.currentTarget.innerText;
    formState = formState.split('\n');
    this.setState({
      url: formState[2],
      method: formState[0]
    });
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

  render() {
    return (
      <RestyContext.Provider value={this.state}>
        {this.props.children}
      </RestyContext.Provider>
    );
  }
}

export default RestyProvider;
