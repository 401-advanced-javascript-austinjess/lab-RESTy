import React from 'react';

const BodyHeaders = () => {
  return (
    <section className="body-headers-inputs">
      <textarea name="body" placeholder="raw JSON body" />
      <section className="headers">
        <div className="userpass">
          <p>Authorization</p>
          <input name="username" type="text" placeholder="username" />
          <input name="password" type="text" placeholder="password" />
        </div>
        <div className="bearer">
          <p>Bearer Token</p>
          <input name="token" type="text" placeholder="bearer token" />
        </div>
      </section>
    </section>
  );
};

export default BodyHeaders;
