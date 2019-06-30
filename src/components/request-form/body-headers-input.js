import React from 'react';

const BodyHeaders = () => {
  return (
    <section className="body-headers-inputs">
      <textarea placeholder="raw JSON body" />
      <section className="headers">
        <div className="userpass">
          <h6>Authorization</h6>
          {/* <label>Username</label> */}
          <div>
            <input type="text" placeholder="username" />
            <input type="text" placeholder="password" />
          </div>
        </div>
        <div className="bearer">
          <h6>Bearer Token</h6>
          <input type="text" placeholder="bearer token" />
        </div>
      </section>
    </section>
  );
};

export default BodyHeaders;
