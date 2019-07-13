import React from 'react';
import axios from 'axios';

import MethodsInput from './request-form/methods-input';
import BodyHeaders from './request-form/body-headers-input';

import '../styles/request.scss';

class Request extends React.Component {
  handleBasicAuth = async (url, username, password) => {
    let response;
    try {
      response = await axios.post(
        url,
        {},
        {
          auth: {
            username,
            password
          }
        }
      );
    } catch (err) {
      if (err.response) {
        response = err;
      }
    }
    return response;
  };

  // DOESNT WORK!!!!!!!!!!!!!
  // handleBearerAuth = async (url, token) => {
  //   let response;
  //   let config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`
  //     }
  //   };
  //   try {
  //     response = await axios.post(url, {}, config);
  //   } catch (err) {
  //     if (err.response) {
  //       response = err;
  //     }
  //   }
  //   return response;
  // };

  doRequest = async (e) => {
    e.preventDefault();
    let response;
    let url = e.target.url.value;
    let method = e.target.method.value;
    let username = e.target.username.value;
    let password = e.target.password.value;
    let jsonBody = e.target.body.value;
    let token = e.target.token.value;

    if (username && password) {
      response = await this.handleBasicAuth(url, username, password);
    } else if (token) {
      // response = await this.handleBearerAuth(url, token);
    } else {
      if (method === 'post' || method === 'put') {
        jsonBody = JSON.parse(jsonBody);

        try {
          response = await axios({
            method,
            url,
            data: { name: jsonBody.name }
          });
        } catch (err) {
          if (err.response) {
            response = err;
          }
        }
      } else {
        try {
          response = await axios({ method, url });
        } catch (err) {
          if (err.response) {
            response = err.response;
          }
        }
      }
    }
    console.log('RESPONSE', response);
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
