import React from 'react';

const MethodsInput = (props) => {
  return (
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
  );
};

export default MethodsInput;
