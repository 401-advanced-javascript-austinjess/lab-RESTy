import React from 'react';
import ReactDOM from 'react-dom';
import superagent from 'superagent';

import '../styles/request.scss';

class Request extends React.Component {
  doRequest = async (e) => {
    e.preventDefault();
    let url = e.target.url.value;
    let method = e.target.method.value;

    let response = await superagent(method, url);
    if (!response) throw Error();
    this.props.onResponse(response);
  };

  render() {
    return (
      <section className="resty-request">
        <form onSubmit={this.doRequest}>
          <input name="url" type="text" placeholder="https://example.com/api" />
          <div>
            <section className="methods">
              <input value="get" id="get" name="method" type="radio" />
              <label htmlFor="get" className="list-start">
                GET
              </label>

              <input value="post" id="post" name="method" type="radio" />
              <label htmlFor="post">POST</label>

              <input value="put" id="put" name="method" type="radio" />
              <label htmlFor="put">PUT</label>

              <input value="patch" id="patch" name="method" type="radio" />
              <label htmlFor="patch">PATCH</label>

              <input value="delete" id="delete" name="method" type="radio" />
              <label htmlFor="delete">DELETE</label>
            </section>
            <input type="submit" value="SEND REQUEST" />
          </div>
        </form>
      </section>
    );
  }
}

export default Request;
