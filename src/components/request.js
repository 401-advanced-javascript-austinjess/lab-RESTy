import React, { useContext } from 'react';
import axios from 'axios';
import { RestyContext } from '../context';

import MethodsInput from './request-form/methods-input';
import BodyHeaders from './request-form/body-headers-input';

import '../styles/request.scss';

const Request = (props) => {
  const context = useContext(RestyContext);

  const handleBasicAuth = async (url, username, password) => {
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

  const doRequest = async (e) => {
    e.preventDefault();
    let response;
    let url = e.target.url.value;
    let method = e.target.method.value;
    let username = e.target.username.value;
    let password = e.target.password.value;
    let jsonBody = e.target.body.value;
    let token = e.target.token.value;

    if (username && password) {
      response = await handleBasicAuth(url, username, password);
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
    context.handleResponse(response);
  };

  return (
    <section className="resty-request">
      <form onSubmit={doRequest}>
        <input
          defaultValue={context.url || ''}
          onChange={context.handleFormChange}
          name="url"
          type="text"
          placeholder="https://example.com/api"
        />
        <MethodsInput method={context.method} onChange={context.changeMethod} />
        <BodyHeaders handleChange={context.handleFormChange} />
      </form>
    </section>
  );
};

export default Request;
