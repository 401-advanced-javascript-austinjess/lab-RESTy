import React from 'react';
import axios from 'axios';

import MethodsInput from './request-form/methods-input';
import BodyHeaders from './request-form/body-headers-input';

import '../styles/request.scss';

class Request extends React.Component {
  // state = {
  //   url: '',
  //   method: 'get',
  //   body: null,
  //   username: null,
  //   password: null,
  //   token: null
  // };

  doRequest = async (e) => {
    let response;
    e.preventDefault();
    let url = e.target.url.value;
    let method = e.target.method.value;
    this.setState({ url, method });

    if (method === 'post' || method === 'put') {
      let jsonBody = e.target.body.value;
      jsonBody = JSON.parse(jsonBody);

      response = await axios({ method, url, data: { name: jsonBody.name } });
    } else {
      response = await axios({ method, url });
    }
    this.props.onResponse(response);
  };

  // changeMethod = (method) => {
  //   this.setState({ method });
  // };

  changeBody = (e) => {
    let jsonBody = e.target.value;
    this.setState({
      body: jsonBody
    });
  };

  changeUrl = (e) => {
    let url = e.target.value;
    this.setState({ url });
  };

  changeUsername = (e) => {
    let username = e.target.value;
    this.setState({ username });
  };

  changePassword = (e) => {
    let password = e.target.value;
    this.setState({ password });
  };

  changeToken = (e) => {
    let token = e.target.value;
    this.setState({ token });
  };

  render() {
    return (
      <section className="resty-request">
        <form onSubmit={this.doRequest}>
          <input
            onChange={this.props.onInputChange}
            name="url"
            type="text"
            placeholder="https://example.com/api"
          />
          <MethodsInput
            method={this.props.method}
            onChange={this.props.onMethodChange}
          />
          <BodyHeaders
            {...this.props}
            handleChange={this.props.onInputChange}
          />
        </form>
      </section>
    );
  }
}

export default Request;
