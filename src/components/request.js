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
      await this.postRequest(e, method, url);
    }
    response = await axios({ method, url });
    this.props.onResponse(response);
  };

  postRequest = async (e, method, url) => {
    e.preventDefault();
    let jsonBody = e.target.body.value;
    let response = await axios({ method, url, data: jsonBody });
    return response;
  };

  putRequest = async (e, method, url) => {
    e.preventDefault();
    let jsonBody = e.target.body.value;
    let response = await axios({ method, url, data: jsonBody });
    return response;
  };

  render() {
    return (
      <section className="resty-request">
        <form onSubmit={this.doRequest}>
          <input name="url" type="text" placeholder="https://example.com/api" />
          <MethodsInput method={this.state.method} />
          <BodyHeaders />
        </form>
      </section>
    );
  }
}

export default Request;
