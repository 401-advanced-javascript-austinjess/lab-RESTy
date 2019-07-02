import React from 'react';
import axios from 'axios';

import MethodsInput from './request-form/methods-input';
import BodyHeaders from './request-form/body-headers-input';

import '../styles/request.scss';

class Request extends React.Component {
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

  render() {
    return (
      <section className="resty-request">
        <form onSubmit={this.doRequest}>
          <input
            value={this.props.url || ''}
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
