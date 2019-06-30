import React from 'react';
import ReactDOM from 'react-dom';
import superagent from 'superagent';

import MethodsInput from './request-form/methods-input';
import BodyHeaders from './request-form/body-headers-input';

import '../styles/request.scss';

class Request extends React.Component {
  doRequest = async (e) => {
    e.preventDefault();
    let url = e.target.url.value;
    let method = e.target.method.value;

    if (method === 'post') {
      let jsonBody = e.target.body.value;
      let response = await superagent(method, url).send(jsonBody);
      console.log(response);
    }

    let response = await superagent(method, url);
    if (!response) throw Error();
    this.props.onResponse(response);
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
