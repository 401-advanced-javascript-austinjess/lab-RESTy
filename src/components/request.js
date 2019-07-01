import React from 'react';
import axios from 'axios';

import MethodsInput from './request-form/methods-input';
import BodyHeaders from './request-form/body-headers-input';

import '../styles/request.scss';

class Request extends React.Component {
  state = {
    url: '',
    method: 'get',
    body: null,
    username: null,
    password: null,
    token: null
  };

  doRequest = async (e) => {
    let response;
    e.preventDefault();
    let url = e.target.url.value;
    let method = e.target.method.value;
    this.setState({ url, method });

    if (method === 'post' || method === 'put') {
      response = await this.bodyRequest(e, method, url);
    } else {
      response = await axios({ method, url });
    }
    this.props.onResponse(response);
  };

  bodyRequest = async (e, method, url) => {
    e.preventDefault();
    let jsonBody = e.target.body.value;
    console.log(jsonBody);
    let response = await axios({ method, url, data: jsonBody });
    return response;
  };

  changeMethod = (method) => {
    this.setState({ method });
  };

  changeBody = (e) => {
    console.log(e);
    let jsonBody = e.target.value;
    console.log(jsonBody);
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
            value={this.state.url}
            onChange={this.changeUrl}
            name="url"
            type="text"
            placeholder="https://example.com/api"
          />
          <MethodsInput
            method={this.state.method}
            onChange={this.changeMethod}
          />
          <BodyHeaders
            {...this.state}
            onBodyChange={this.changeBody}
            onUserChange={this.changeUsername}
            onPassChange={this.changePassword}
            onTokenChange={this.changeToken}
          />
        </form>
      </section>
    );
  }
}

export default Request;
