import React from 'react';

const MethodsInput = (props) => {

  const MethodInput = ({ method }) => (
    <>
      <input value={method} id={method} name="method" type="radio" defaultChecked={props.method === method} />
      <label htmlFor={method}>{method.toUpperCase()}</label>
    </>
  )

  return (
    <div className="flex">
      <section className="methods">
        <MethodInput method="get" />
        <MethodInput method="post" />
        <MethodInput method="put" />
        <MethodInput method="patch" />
        <MethodInput method="delete" />
      </section>
      <input type="submit" value="SEND REQUEST" />
    </div>
  );
};

export default MethodsInput;
