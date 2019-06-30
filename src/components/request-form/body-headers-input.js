import React from 'react';

const BodyHeaders = () => {
  return (
    <section className="body-headers-inputs">
      <textarea name="body" placeholder="raw JSON body" />
      <section className="headers">
        <div className="userpass">
          <h6>Authorization</h6>
          {/* <label>Username</label> */}
          <div>
            <input name="username" type="text" placeholder="username" />
            <input name="password" type="text" placeholder="password" />
          </div>
        </div>
        <div className="bearer">
          <h6>Bearer Token</h6>
          <input name="token" type="text" placeholder="bearer token" />
        </div>
      </section>
    </section>
  );
};

export default BodyHeaders;
