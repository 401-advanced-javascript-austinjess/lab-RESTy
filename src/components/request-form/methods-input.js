import React, { useContext } from 'react';
import { Context } from '../context';

const MethodsInput = (props) => {
  const context = useContext(Context);
  const onChange = (e) => {
    props.onChange(e.target.value);
  };

  // const { method } = context;

  const MethodInput = (method) => (
    <>
      <input
        value={method}
        id={method}
        name="method"
        type="radio"
        checked={context.method === method}
        onChange={onChange}
      />
      <label htmlFor={method}>{method.toUpperCase()}</label>
    </>
  );

  return (
    <div className="flex">
      <section className="methods">
        <MethodInput method="GET" />
        <MethodInput method="POST" />
        <MethodInput method="PUT" />
        <MethodInput method="PATCH" />
        <MethodInput method="DELETE" />
      </section>
      <input type="submit" value="SEND REQUEST" />
    </div>
  );
};

export default MethodsInput;
