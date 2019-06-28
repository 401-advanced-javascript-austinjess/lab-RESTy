import React from 'react';
import ReactDom from 'react';

import '../styles/request.scss';

class Request extends React.Component {
  doRequest = (e) => {
    e.preventDefault();
    let url = e.target.url.value;
  };

  render() {
    return (
      <section className="resty-request">
        <form onSubmit={this.doRequest}>
          <input name="url" type="text" placeholder="https://example.com/api" />
          <section className="methods">
            <label htmlFor="get">GET</label>
            <input hidden id="get" type="radio" />

            <label htmlFor="post">POST</label>
            <input hidden id="post" type="radio" />

            <label htmlFor="put">PUT</label>
            <input hidden id="put" type="radio" />

            <label htmlFor="patch">PATCH</label>
            <input hidden id="patch" type="radio" />

            <label htmlFor="delete">DELETE</label>
            <input hidden id="delete" type="radio" />
          </section>
          <input type="submit" value="GO" />
        </form>
      </section>
    );
  }
}

export default Request;
