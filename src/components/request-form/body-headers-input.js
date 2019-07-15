import React, { useContext } from 'react';
import { RestyContext } from '../../context';

const BodyHeaders = (props) => {
  const context = useContext(RestyContext);
  let disableBody = context.method === 'get' || context.method === 'delete';

  return (
    <section className="body-headers-inputs">
      <textarea
        onChange={props.handleChange}
        name="body"
        placeholder="raw JSON body"
        disabled={disableBody}
      />
      <section className="headers">
        <div className="userpass">
          <p>Authorization</p>
          <input
            onChange={props.handleChange}
            name="username"
            type="text"
            placeholder="username"
          />
          <input
            onChange={props.handleChange}
            name="password"
            type="text"
            placeholder="password"
          />
        </div>
        <div className="bearer">
          <p>Bearer Token</p>
          <input
            onChange={props.handleChange}
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
