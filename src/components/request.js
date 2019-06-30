import React from 'react';
import ReactDOM from 'react-dom';
import superagent from 'superagent';

import MethodsInput from './request-form/methods-input';
import BodyHeaders from './request-form/body-headers-input';
import { handleError as errorHandler } from '../helpers';

import '../styles/request.scss';

class Request extends React.Component {
  doRequest = async (e) => {
    let response;
    e.preventDefault();
    let url = e.target.url.value;
    let method = e.target.method.value;

    if (method === 'post') {
      await this.postRequest(e, method, url);
    }

    response = await superagent(method, url);
    this.props.onResponse(response);
  };

  postRequest = async (e, method, url) => {
    e.preventDefault();
    let jsonBody = e.target.body.value;
    let response = await superagent(method, url).send(jsonBody);
    return response || Error();
  };

  render() {
    return (
      <section className="resty-request">
        <form onSubmit={this.doRequest}>
          <input name="url" type="text" placeholder="https://example.com/api" />
          <MethodsInput />
          <BodyHeaders />
        </form>
      </section>
    );
  }
}

export default Request;
