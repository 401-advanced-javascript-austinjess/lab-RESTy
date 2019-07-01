import React from 'react';

const BodyHeaders = (props) => {
  let disableBody = props.method === 'get' || props.method === 'delete';

  return (
    <section className="body-headers-inputs">
      <textarea
        onChange={props.onBodyChange}
        name="body"
        placeholder="raw JSON body"
        disabled={disableBody}
      />
      <section className="headers">
        <div className="userpass">
          <p>Authorization</p>
          <input
            onChange={props.onUserChange}
            name="username"
            type="text"
            placeholder="username"
          />
          <input
            onChange={props.onPassChange}
            name="password"
            type="text"
            placeholder="password"
          />
        </div>
        <div className="bearer">
          <p>Bearer Token</p>
          <input
            onChange={props.onTokenChange}
            name="token"
            type="text"
            placeholder="bearer token"
          />
        </div>
      </section>
    </section>
  );
};

export default BodyHeaders;
